import type { Unsubscribe } from "../core/observable";

export type FocusChangeState = "in" | "out";

/** Subscribes to document focusin/focusout. */
export function focusChange(
  listener: (state: FocusChangeState, event: FocusEvent) => void,
): Unsubscribe {
  const onIn = (event: FocusEvent) => listener("in", event);
  const onOut = (event: FocusEvent) => listener("out", event);

  document.addEventListener("focusin", onIn);
  document.addEventListener("focusout", onOut);

  return () => {
    document.removeEventListener("focusin", onIn);
    document.removeEventListener("focusout", onOut);
  };
}
