import { createEvent } from "../core/observable";

/** Fires on window `pointerup`. Emits `PointerEvent`. Returns unsubscribe. */
export const pointerup = createEvent<PointerEvent>((emit) => {
  const handler = (event: PointerEvent) => emit(event);

  window.addEventListener("pointerup", handler);

  return () => {
    window.removeEventListener("pointerup", handler);
  };
});
