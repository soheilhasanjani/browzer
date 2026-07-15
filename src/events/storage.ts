import { createEvent } from "../core/observable";

/** Fires on window `storage` (cross-tab storage changes). Emits `StorageEvent`. */
export const storage = createEvent<StorageEvent>((emit) => {
  const handler = (event: StorageEvent) => emit(event);

  window.addEventListener("storage", handler);

  return () => {
    window.removeEventListener("storage", handler);
  };
});
