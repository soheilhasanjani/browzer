import { createEvent } from "../core/observable";

/** Emits `screen.orientation.type` when orientation changes. Returns unsubscribe. */
export const orientation = createEvent<OrientationType>((emit) => {
  const handler = () => emit(screen.orientation.type);

  screen.orientation.addEventListener("change", handler);

  return () => {
    screen.orientation.removeEventListener("change", handler);
  };
});
