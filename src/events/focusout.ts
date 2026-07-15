import { createEvent } from "../core/observable";

/** Fires on document `focusout` (bubbles). Emits `FocusEvent`. Returns unsubscribe. */
export const focusout = createEvent<FocusEvent>((emit) => {
  const handler = (event: FocusEvent) => emit(event);

  document.addEventListener("focusout", handler);

  return () => {
    document.removeEventListener("focusout", handler);
  };
});
