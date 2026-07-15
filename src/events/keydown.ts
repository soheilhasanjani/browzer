import { createEvent } from "../core/observable";

/** Fires on window `keydown`. Emits the `KeyboardEvent`. Returns unsubscribe. */
export const keydown = createEvent<KeyboardEvent>((emit) => {
  const handler = (event: KeyboardEvent) => emit(event);

  window.addEventListener("keydown", handler);

  return () => {
    window.removeEventListener("keydown", handler);
  };
});
