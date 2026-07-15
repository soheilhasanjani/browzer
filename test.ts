import { browzer } from "./dist/index.js";

const listeners = new Map();

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
} as unknown as Window & typeof globalThis;

const unsubscribe = browzer.events.online((isOnline) => {
  console.log("online", isOnline);
});

unsubscribe();
console.log("browzer.events.online ok");
