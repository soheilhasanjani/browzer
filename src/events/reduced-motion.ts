import { createEvent } from "../core/observable";

/** Emits whether prefers-reduced-motion is enabled when it changes. */
export const reducedMotion = createEvent<boolean>((emit) => {
  const media = window.matchMedia("(prefers-reduced-motion: reduce)");
  const handler = () => emit(media.matches);

  media.addEventListener("change", handler);

  return () => {
    media.removeEventListener("change", handler);
  };
});
