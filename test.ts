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

const unsubOnline = browzer.events.online((isOnline) => {
  console.log("online", isOnline);
});
unsubOnline();

const unsubVisibility = browzer.events.visibility((state) => {
  console.log("visibility", state);
});
unsubVisibility();

const unsubTheme = browzer.events.theme((isDark) => {
  console.log("theme", isDark);
});
unsubTheme();

const unsubOrientation = browzer.events.orientation((type) => {
  console.log("orientation", type);
});
unsubOrientation();

const unsubFocus = browzer.events.focus((isFocused) => {
  console.log("focus", isFocused);
});
unsubFocus();

const unsubReady = browzer.events.ready(() => {
  console.log("ready");
});
unsubReady();

const unsubLoad = browzer.events.load(() => {
  console.log("load");
});
unsubLoad();

const unsubBeforeUnload = browzer.events.beforeUnload((event) => {
  console.log("beforeUnload", event.type);
});
unsubBeforeUnload();

console.log("browzer.events ok");
