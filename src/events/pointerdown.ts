import { createEvent } from "../core/observable";

/** Fires on window `pointerdown`. Emits `PointerEvent`. Returns unsubscribe. */
export const pointerdown = createEvent<PointerEvent>((emit) => {
  const handler = (event: PointerEvent) => emit(event);

  window.addEventListener("pointerdown", handler);

  return () => {
    window.removeEventListener("pointerdown", handler);
  };
});
