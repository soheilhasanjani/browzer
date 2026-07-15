import { createEvent } from "../core/observable";

/** Fires on window `hashchange`. Emits `HashChangeEvent`. Returns unsubscribe. */
export const hashchange = createEvent<HashChangeEvent>((emit) => {
  const handler = (event: HashChangeEvent) => emit(event);

  window.addEventListener("hashchange", handler);

  return () => {
    window.removeEventListener("hashchange", handler);
  };
});
