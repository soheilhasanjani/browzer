import { createEvent } from "../core/observable";

/** Emits whether prefers-color-scheme is dark when it changes. Returns unsubscribe. */
export const theme = createEvent<boolean>((emit) => {
  const media = window.matchMedia("(prefers-color-scheme: dark)");
  const handler = () => emit(media.matches);

  media.addEventListener("change", handler);

  return () => {
    media.removeEventListener("change", handler);
  };
});
