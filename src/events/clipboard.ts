import type { Unsubscribe } from "../core/observable";

export type ClipboardState = "copy" | "cut" | "paste";

/** Subscribes to document copy/cut/paste. */
export function clipboard(
  listener: (state: ClipboardState, event: ClipboardEvent) => void,
): Unsubscribe {
  const onCopy = (event: ClipboardEvent) => listener("copy", event);
  const onCut = (event: ClipboardEvent) => listener("cut", event);
  const onPaste = (event: ClipboardEvent) => listener("paste", event);

  document.addEventListener("copy", onCopy);
  document.addEventListener("cut", onCut);
  document.addEventListener("paste", onPaste);

  return () => {
    document.removeEventListener("copy", onCopy);
    document.removeEventListener("cut", onCut);
    document.removeEventListener("paste", onPaste);
  };
}
