import { createEvent } from "../core/observable";

/** Fires on window `popstate` (history navigation). Emits `PopStateEvent`. */
export const popstate = createEvent<PopStateEvent>((emit) => {
  const handler = (event: PopStateEvent) => emit(event);

  window.addEventListener("popstate", handler);

  return () => {
    window.removeEventListener("popstate", handler);
  };
});
