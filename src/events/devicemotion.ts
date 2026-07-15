import { createEvent } from "../core/observable";

/** Fires on window `devicemotion`. Emits `DeviceMotionEvent`. Returns unsubscribe. */
export const devicemotion = createEvent<DeviceMotionEvent>((emit) => {
  const handler = (event: DeviceMotionEvent) => emit(event);

  window.addEventListener("devicemotion", handler);

  return () => {
    window.removeEventListener("devicemotion", handler);
  };
});
