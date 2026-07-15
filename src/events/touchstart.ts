import { createEvent } from "../core/observable";

/** Fires on window `touchstart`. Emits `TouchEvent`. Returns unsubscribe. */
export const touchstart = createEvent<TouchEvent>((emit) => {
  const handler = (event: TouchEvent) => emit(event);

  window.addEventListener("touchstart", handler, { passive: true });

  return () => {
    window.removeEventListener("touchstart", handler);
  };
});
