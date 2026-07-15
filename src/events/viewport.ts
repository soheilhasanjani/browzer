import { createEvent } from "../core/observable";

export type VisualViewportState = {
  width: number;
  height: number;
  offsetLeft: number;
  offsetTop: number;
  pageLeft: number;
  pageTop: number;
  scale: number;
};

/** Emits `visualViewport` metrics on resize/scroll. Returns unsubscribe. */
export const viewport = createEvent<VisualViewportState>((emit) => {
  const vv = window.visualViewport;
  if (!vv) {
    return () => {};
  }

  const handler = () => {
    emit({
      width: vv.width,
      height: vv.height,
      offsetLeft: vv.offsetLeft,
      offsetTop: vv.offsetTop,
      pageLeft: vv.pageLeft,
      pageTop: vv.pageTop,
      scale: vv.scale,
    });
  };

  vv.addEventListener("resize", handler);
  vv.addEventListener("scroll", handler);

  return () => {
    vv.removeEventListener("resize", handler);
    vv.removeEventListener("scroll", handler);
  };
});
