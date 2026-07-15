import { createEvent } from "../core/observable";

export type ScrollPosition = {
  x: number;
  y: number;
};

/** Emits window scroll position on `scroll`. Returns unsubscribe. */
export const scroll = createEvent<ScrollPosition>((emit) => {
  const handler = () => {
    emit({ x: window.scrollX, y: window.scrollY });
  };

  window.addEventListener("scroll", handler, { passive: true });

  return () => {
    window.removeEventListener("scroll", handler);
  };
});
