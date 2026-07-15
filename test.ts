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
  addEventListener(type: string, listener: EventListenerOrEventListenerObject) {
    listeners.set(type, listener);
  },
  removeEventListener(type: string) {
    listeners.delete(type);
  },
} as unknown as Document;

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

console.log("browzer.events ok");
