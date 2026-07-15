import { createEvent } from "../core/observable";

/** Fires on window `touchend`. Emits `TouchEvent`. Returns unsubscribe. */
export const touchend = createEvent<TouchEvent>((emit) => {
  const handler = (event: TouchEvent) => emit(event);

  window.addEventListener("touchend", handler, { passive: true });

  return () => {
    window.removeEventListener("touchend", handler);
  };
});
