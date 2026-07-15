import * as events from "./events";

export type { Unsubscribe, Listener, Emit } from "./core/observable";
export { createEvent } from "./core/observable";
export type {
  ClipboardState,
  DeviceState,
  FocusChangeState,
  HistoryState,
  KeyState,
  LifecycleState,
  PageState,
  PointerState,
  ScrollPosition,
  TouchState,
  ViewportSize,
  VisualViewportState,
} from "./events";
export { events };

export const browzer = {
  events,
} as const;
