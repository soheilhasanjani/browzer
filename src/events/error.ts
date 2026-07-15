import { createEvent } from "../core/observable";

/** Fires on window `error` (uncaught errors / resource failures). Emits `ErrorEvent`. */
export const error = createEvent<ErrorEvent>((emit) => {
  const handler = (event: ErrorEvent) => emit(event);

  window.addEventListener("error", handler);

  return () => {
    window.removeEventListener("error", handler);
  };
});
