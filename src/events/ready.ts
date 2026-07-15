import { createEvent } from "../core/observable";

/** Fires when the DOM is ready (`DOMContentLoaded`), or immediately if already ready. */
export const ready = createEvent<void>((emit) => {
  if (document.readyState !== "loading") {
    emit();
    return () => {};
  }

  const handler = () => emit();
  document.addEventListener("DOMContentLoaded", handler);

  return () => {
    document.removeEventListener("DOMContentLoaded", handler);
  };
});
