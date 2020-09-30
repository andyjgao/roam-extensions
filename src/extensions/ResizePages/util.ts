import { on } from "delegated-events";

interface IWaitForAddedNode {
  id: string;
  parent: HTMLElement | null;
  recursive: boolean;
  done: (e: HTMLElement) => void;
}

// util: used to calc delta in mouse change and resize page accordingly
export const resize = (typeWidth: string): ((e: MouseEvent) => void) => {
  return (e: MouseEvent) => {
    const dx = e.x - window.m_pos;
    window.m_pos = e.x;
    var currentWidth = getComputedStyle(
      document.documentElement
    ).getPropertyValue(typeWidth);

    document.documentElement.style.setProperty(
      typeWidth,
      parseInt(currentWidth) + dx + "px"
    );
  };
};

// util: adds mousemove eventlistener when mousedown is within triggerX pixels away from card border
export const addMouseMoveListener = (
  selector: string,
  triggerX: number,
  resize: (e: MouseEvent) => void
) => {
  return (e: MouseEvent) => {
    const queriedSelector = document.querySelector(selector);
    if ((queriedSelector as HTMLElement).offsetWidth - triggerX <= e.offsetX) {
      window.m_pos = e.x;
      window.addEventListener("mousemove", resize);
    }
  };
};

// util: runs listeners needed to handle page resize
export const runListeners = async (
  selector: string,
  MouseMoveListener: (e: MouseEvent) => void,
  resize: (e: MouseEvent) => void
) => {
  on("mousedown", selector, MouseMoveListener);
  let removeMouseMoveListener = () => {
    window.removeEventListener("mousemove", resize);
  };
  window.addEventListener("mouseup", removeMouseMoveListener);
};

export const createResizeDiv = async (
  queriedSelector: Element | null,
  newElementClass: string,
  width: number
) => {
  const newElement = document.createElement("span");
  Object.assign(newElement.style, {
    position: "absolute",
    top: 0,
    right: 0,
    height: "100%",
    width: width + "px",
    cursor: "w-resize",
  });
  newElement.className = newElementClass;
  queriedSelector?.appendChild(newElement);
};

export const waitForAddedNode = ({
  id,
  parent,
  recursive,
  done,
}: IWaitForAddedNode) => {
  new MutationObserver(function (this: MutationObserver, mutations) {
    const el = document.getElementById(id);
    el && done(el) && this.disconnect();
  }).observe(parent || document, {
    subtree: !!recursive,
    childList: true,
  });
};
