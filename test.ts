import { browzer } from "./dist/index.js";

const listeners = new Map<string, EventListenerOrEventListenerObject>();

Object.defineProperty(globalThis, "navigator", {
  value: { onLine: true },
  configurable: true,
});

globalThis.window = {
  addEventListener(type: string, listener: EventListenerOrEventListenerObject) {
    listeners.set(type, listener);
  },
  removeEventListener(type: string) {
    listeners.delete(type);
  },
  matchMedia() {
    return {
      matches: false,
      addEventListener(type: string, listener: EventListenerOrEventListenerObject) {
        listeners.set(`media:${type}`, listener);
      },
      removeEventListener(type: string) {
        listeners.delete(`media:${type}`);
      },
    };
  },
  visualViewport: {
    width: 0,
    height: 0,
    offsetLeft: 0,
    offsetTop: 0,
    pageLeft: 0,
    pageTop: 0,
    scale: 1,
    addEventListener(type: string, listener: EventListenerOrEventListenerObject) {
      listeners.set(`visualViewport:${type}`, listener);
    },
    removeEventListener(type: string) {
      listeners.delete(`visualViewport:${type}`);
    },
  },
} as unknown as Window & typeof globalThis;

globalThis.document = {
  visibilityState: "visible",
  readyState: "complete",
  addEventListener(type: string, listener: EventListenerOrEventListenerObject) {
    listeners.set(type, listener);
  },
  removeEventListener(type: string) {
    listeners.delete(type);
  },
} as unknown as Document;

Object.defineProperty(globalThis, "screen", {
  value: {
    orientation: {
      type: "portrait-primary",
      addEventListener(type: string, listener: EventListenerOrEventListenerObject) {
        listeners.set(`orientation:${type}`, listener);
      },
      removeEventListener(type: string) {
        listeners.delete(`orientation:${type}`);
      },
    },
  },
  configurable: true,
});

const unsubs = [
  browzer.events.online(() => {}),
  browzer.events.visibility(() => {}),
  browzer.events.theme(() => {}),
  browzer.events.orientation(() => {}),
  browzer.events.focus(() => {}),
  browzer.events.lifecycle(() => {}),
  browzer.events.beforeUnload(() => {}),
  browzer.events.resize(() => {}),
  browzer.events.scroll(() => {}),
  browzer.events.key(() => {}),
  browzer.events.pointer(() => {}),
  browzer.events.pointermove(() => {}),
  browzer.events.touch(() => {}),
  browzer.events.wheel(() => {}),
  browzer.events.clipboard(() => {}),
  browzer.events.focusChange(() => {}),
  browzer.events.history(() => {}),
  browzer.events.page(() => {}),
  browzer.events.storage(() => {}),
  browzer.events.error(() => {}),
  browzer.events.unhandledRejection(() => {}),
  browzer.events.device(() => {}),
  browzer.events.reducedMotion(() => {}),
  browzer.events.viewport(() => {}),
];

for (const unsub of unsubs) {
  unsub();
}

console.log("browzer.events ok");
