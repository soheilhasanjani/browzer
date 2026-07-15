import { createEvent } from "../core/observable";

/** Fires on document `cut`. Emits `ClipboardEvent`. Returns unsubscribe. */
export const cut = createEvent<ClipboardEvent>((emit) => {
  const handler = (event: ClipboardEvent) => emit(event);

  document.addEventListener("cut", handler);

  return () => {
    document.removeEventListener("cut", handler);
  };
});
