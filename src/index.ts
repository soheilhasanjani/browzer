import * as events from "./events";

export type { Unsubscribe, Listener, Emit } from "./core/observable";
export { createEvent } from "./core/observable";
export { events };

export const browzer = {
  events,
} as const;
