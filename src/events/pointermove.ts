import { createEvent } from "../core/observable";

/** Fires on window `pointermove`. Emits `PointerEvent`. Returns unsubscribe. */
export const pointermove = createEvent<PointerEvent>((emit) => {
  const handler = (event: PointerEvent) => emit(event);

  window.addEventListener("pointermove", handler, { passive: true });

  return () => {
    window.removeEventListener("pointermove", handler);
  };
});
