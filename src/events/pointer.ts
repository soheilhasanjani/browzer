import { createEvent } from "../core/observable";
import type { Unsubscribe } from "../core/observable";

export type PointerState = "down" | "up";

/** Subscribes to pointer down/up (not move). */
export function pointer(
  listener: (state: PointerState, event: PointerEvent) => void,
): Unsubscribe {
  const onDown = (event: PointerEvent) => listener("down", event);
  const onUp = (event: PointerEvent) => listener("up", event);

  window.addEventListener("pointerdown", onDown);
  window.addEventListener("pointerup", onUp);

  return () => {
    window.removeEventListener("pointerdown", onDown);
    window.removeEventListener("pointerup", onUp);
  };
}

/** Fires on window `pointermove`. Emits `PointerEvent`. Returns unsubscribe. */
export const pointermove = createEvent<PointerEvent>((emit) => {
  const handler = (event: PointerEvent) => emit(event);

  window.addEventListener("pointermove", handler, { passive: true });

  return () => {
    window.removeEventListener("pointermove", handler);
  };
});
