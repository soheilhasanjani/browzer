import type { Unsubscribe } from "../core/observable";

export type TouchState = "start" | "end";

/** Subscribes to touch start/end. */
export function touch(
  listener: (state: TouchState, event: TouchEvent) => void,
): Unsubscribe {
  const onStart = (event: TouchEvent) => listener("start", event);
  const onEnd = (event: TouchEvent) => listener("end", event);

  window.addEventListener("touchstart", onStart, { passive: true });
  window.addEventListener("touchend", onEnd, { passive: true });

  return () => {
    window.removeEventListener("touchstart", onStart);
    window.removeEventListener("touchend", onEnd);
  };
}
