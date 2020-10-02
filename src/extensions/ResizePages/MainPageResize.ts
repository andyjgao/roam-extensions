import {
  resize,
  addMouseMoveListener,
  runListeners,
  createResizeDiv,
} from "./util";

export const MainPageResize = () => {
  const resizePageWidth = resize("--page-width");
  const removeMouseMoveListener = () => {
    document.removeEventListener("mousemove", resizePageWidth);
  };
  const runMainPageResize = async () => {
    await createResizeDiv(
      document.querySelector(".roam-article"),
      "roam-page-width-resize",
      35
    );
    document.removeEventListener("mouseup", removeMouseMoveListener);
    await runListeners(
      ".roam-page-width-resize",
      addMouseMoveListener(".roam-page-width-resize", 35, resizePageWidth),
      removeMouseMoveListener
    );
  };

  runMainPageResize();
  window.addEventListener("hashchange", runMainPageResize, false);
};
