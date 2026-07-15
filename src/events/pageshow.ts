import { createEvent } from "../core/observable";

/** Fires on window `pageshow` (including bfcache restore). Emits `PageTransitionEvent`. */
export const pageshow = createEvent<PageTransitionEvent>((emit) => {
  const handler = (event: PageTransitionEvent) => emit(event);

  window.addEventListener("pageshow", handler);

  return () => {
    window.removeEventListener("pageshow", handler);
  };
});
