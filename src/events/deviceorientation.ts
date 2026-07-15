import { createEvent } from "../core/observable";

/** Fires on window `deviceorientation`. Emits `DeviceOrientationEvent`. */
export const deviceorientation = createEvent<DeviceOrientationEvent>((emit) => {
  const handler = (event: DeviceOrientationEvent) => emit(event);

  window.addEventListener("deviceorientation", handler);

  return () => {
    window.removeEventListener("deviceorientation", handler);
  };
});
