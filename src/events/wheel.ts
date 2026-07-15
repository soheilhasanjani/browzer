import { createEvent } from "../core/observable";

/** Fires on window `wheel`. Emits the `WheelEvent`. Returns unsubscribe. */
export const wheel = createEvent<WheelEvent>((emit) => {
  const handler = (event: WheelEvent) => emit(event);

  window.addEventListener("wheel", handler, { passive: true });

  return () => {
    window.removeEventListener("wheel", handler);
  };
});
