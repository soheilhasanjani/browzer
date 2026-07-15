import { createEvent } from "../core/observable";

/** Emits `document.visibilityState` on `visibilitychange`. Returns unsubscribe. */
export const visibility = createEvent<DocumentVisibilityState>((emit) => {
  const handler = () => emit(document.visibilityState);

  document.addEventListener("visibilitychange", handler);

  return () => {
    document.removeEventListener("visibilitychange", handler);
  };
});
