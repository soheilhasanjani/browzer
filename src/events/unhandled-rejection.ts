import { createEvent } from "../core/observable";

/** Fires on window `unhandledrejection`. Emits `PromiseRejectionEvent`. */
export const unhandledRejection = createEvent<PromiseRejectionEvent>((emit) => {
  const handler = (event: PromiseRejectionEvent) => emit(event);

  window.addEventListener("unhandledrejection", handler);

  return () => {
    window.removeEventListener("unhandledrejection", handler);
  };
});
