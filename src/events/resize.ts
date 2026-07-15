import { createEvent } from "../core/observable";

export type ViewportSize = {
  width: number;
  height: number;
};

/** Emits window viewport size on `resize`. Returns unsubscribe. */
export const resize = createEvent<ViewportSize>((emit) => {
  const handler = () => {
    emit({ width: window.innerWidth, height: window.innerHeight });
  };

  window.addEventListener("resize", handler);

  return () => {
    window.removeEventListener("resize", handler);
  };
});
