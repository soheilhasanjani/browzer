import * as events from "./events";

export type { Unsubscribe, Listener, Emit } from "./core/observable";
export type { ScrollPosition, ViewportSize } from "./events";
export { createEvent } from "./core/observable";
export { events };

export const browzer = {
  events,
} as const;
