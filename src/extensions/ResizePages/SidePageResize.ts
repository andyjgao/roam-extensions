import {
  addMouseMoveListener,
  resize,
  runListeners,
  waitForAddedNode,
} from "./util";

export const SidePageResize = () => {
  const sidePageCallback = (element: HTMLElement) => {
    const resizeComponent =
      "#roam-right-sidebar-content > div > div > div > div:last-child";

    const resizeSidePageWidth = resize("--page-side-width");

    runListeners(
      resizeComponent,
      addMouseMoveListener(resizeComponent, 10, resizeSidePageWidth),
      resizeSidePageWidth
    );
  };

  waitForAddedNode({
    id: "roam-right-sidebar-content",
    parent: document.getElementById("right-sidebar"),
    recursive: true,
    done: sidePageCallback,
  });
};
