import type { Unsubscribe } from "../core/observable";

export type LifecycleState = "ready" | "load";

/** Subscribes to DOM ready and window load (fires immediately if already done). */
export function lifecycle(
  listener: (state: LifecycleState) => void,
): Unsubscribe {
  let active = true;

  const emitReady = () => {
    if (active) listener("ready");
  };
  const emitLoad = () => {
    if (active) listener("load");
  };

  if (document.readyState !== "loading") {
    emitReady();
  } else {
    document.addEventListener("DOMContentLoaded", emitReady);
  }

  if (document.readyState === "complete") {
    emitLoad();
  } else {
    window.addEventListener("load", emitLoad);
  }

  return () => {
    active = false;
    document.removeEventListener("DOMContentLoaded", emitReady);
    window.removeEventListener("load", emitLoad);
  };
}
