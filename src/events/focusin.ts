import { createEvent } from "../core/observable";

/** Fires on document `focusin` (bubbles). Emits `FocusEvent`. Returns unsubscribe. */
export const focusin = createEvent<FocusEvent>((emit) => {
  const handler = (event: FocusEvent) => emit(event);

  document.addEventListener("focusin", handler);

  return () => {
    document.removeEventListener("focusin", handler);
  };
});
