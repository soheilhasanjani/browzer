import { createEvent } from "../core/observable";

/** Fires on window `pagehide` (including bfcache). Emits `PageTransitionEvent`. */
export const pagehide = createEvent<PageTransitionEvent>((emit) => {
  const handler = (event: PageTransitionEvent) => emit(event);

  window.addEventListener("pagehide", handler);

  return () => {
    window.removeEventListener("pagehide", handler);
  };
});
