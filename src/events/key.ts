import type { Unsubscribe } from "../core/observable";

export type KeyState = "down" | "up";

/** Subscribes to keyboard down/up. */
export function key(
  listener: (state: KeyState, event: KeyboardEvent) => void,
): Unsubscribe {
  const onDown = (event: KeyboardEvent) => listener("down", event);
  const onUp = (event: KeyboardEvent) => listener("up", event);

  window.addEventListener("keydown", onDown);
  window.addEventListener("keyup", onUp);

  return () => {
    window.removeEventListener("keydown", onDown);
    window.removeEventListener("keyup", onUp);
  };
}
