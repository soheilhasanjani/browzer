import type { Unsubscribe } from "../core/observable";

export type DeviceState = "orientation" | "motion";

/** Subscribes to deviceorientation and devicemotion. */
export function device(
  listener: (
    state: DeviceState,
    event: DeviceOrientationEvent | DeviceMotionEvent,
  ) => void,
): Unsubscribe {
  const onOrientation = (event: DeviceOrientationEvent) =>
    listener("orientation", event);
  const onMotion = (event: DeviceMotionEvent) => listener("motion", event);

  window.addEventListener("deviceorientation", onOrientation);
  window.addEventListener("devicemotion", onMotion);

  return () => {
    window.removeEventListener("deviceorientation", onOrientation);
    window.removeEventListener("devicemotion", onMotion);
  };
}
