import { createEvent } from "../core/observable";

/** Fires on window `beforeunload`. Emits the event so you can cancel navigation. */
export const beforeUnload = createEvent<BeforeUnloadEvent>((emit) => {
  const handler = (event: BeforeUnloadEvent) => emit(event);

  window.addEventListener("beforeunload", handler);

  return () => {
    window.removeEventListener("beforeunload", handler);
  };
});
