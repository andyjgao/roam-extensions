import {
  resize,
  addMouseMoveListener,
  runListeners,
  createResizeDiv,
} from "./util";

export const MainPageResize = () => {
  const runMainPageResize = async () => {
    let resizePageWidth = resize("--page-width");

    await createResizeDiv(
      document.querySelector(".roam-article"),
      "roam-page-width-resize",
      35
    );

    await runListeners(
      ".roam-page-width-resize",
      addMouseMoveListener(".roam-page-width-resize", 35, resizePageWidth),
      resizePageWidth
    );
  };

  runMainPageResize();
  window.addEventListener("hashchange", runMainPageResize, false);
};
