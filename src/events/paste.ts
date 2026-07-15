import { createEvent } from "../core/observable";

/** Fires on document `paste`. Emits `ClipboardEvent`. Returns unsubscribe. */
export const paste = createEvent<ClipboardEvent>((emit) => {
  const handler = (event: ClipboardEvent) => emit(event);

  document.addEventListener("paste", handler);

  return () => {
    document.removeEventListener("paste", handler);
  };
});
