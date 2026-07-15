import { createEvent } from "../core/observable";

/** Emits `navigator.onLine` whenever connectivity changes. Returns unsubscribe. */
export const online = createEvent<boolean>((emit) => {
  const handler = () => emit(navigator.onLine);

  window.addEventListener("online", handler);
  window.addEventListener("offline", handler);

  return () => {
    window.removeEventListener("online", handler);
    window.removeEventListener("offline", handler);
  };
});
