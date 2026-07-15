import { createEvent } from "../core/observable";

/** Fires on window `keyup`. Emits the `KeyboardEvent`. Returns unsubscribe. */
export const keyup = createEvent<KeyboardEvent>((emit) => {
  const handler = (event: KeyboardEvent) => emit(event);

  window.addEventListener("keyup", handler);

  return () => {
    window.removeEventListener("keyup", handler);
  };
});
