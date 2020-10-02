import {
  addMouseMoveListener,
  resize,
  runListeners,
  waitForAddedNode,
} from "./util";

export const SidePageResize = () => {
  const resizeSidePageWidth = resize("--page-side-width");
  const removeMouseMoveListener = () => {
    document.removeEventListener("mousemove", resizeSidePageWidth);
  };
  const resizeComponent =
    "#roam-right-sidebar-content > div > div > div > div:last-child";

  const sidePageCallback = async () => {
    document.removeEventListener("mouseup", resizeSidePageWidth);
    await runListeners(
      resizeComponent,
      addMouseMoveListener(resizeComponent, 25, resizeSidePageWidth),
      removeMouseMoveListener
    );
  };

  waitForAddedNode({
    id: "roam-right-sidebar-content",
    parent: document.getElementById("right-sidebar"),
    recursive: false,
    done: sidePageCallback,
  });
};
