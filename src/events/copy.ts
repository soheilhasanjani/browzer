import { createEvent } from "../core/observable";

/** Fires on document `copy`. Emits `ClipboardEvent`. Returns unsubscribe. */
export const copy = createEvent<ClipboardEvent>((emit) => {
  const handler = (event: ClipboardEvent) => emit(event);

  document.addEventListener("copy", handler);

  return () => {
    document.removeEventListener("copy", handler);
  };
});
