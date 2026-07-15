import { createEvent } from "../core/observable";

/** Fires on window `load`, or immediately if the page is already complete. */
export const load = createEvent<void>((emit) => {
  if (document.readyState === "complete") {
    emit();
    return () => {};
  }

  const handler = () => emit();
  window.addEventListener("load", handler);

  return () => {
    window.removeEventListener("load", handler);
  };
});
