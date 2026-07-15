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

const unsubResize = browzer.events.resize((size) => {
  console.log("resize", size);
});
unsubResize();

const unsubScroll = browzer.events.scroll((position) => {
  console.log("scroll", position);
});
unsubScroll();

const unsubKeydown = browzer.events.keydown((event) => {
  console.log("keydown", event.key);
});
unsubKeydown();

const unsubKeyup = browzer.events.keyup((event) => {
  console.log("keyup", event.key);
});
unsubKeyup();

const unsubWheel = browzer.events.wheel((event) => {
  console.log("wheel", event.deltaY);
});
unsubWheel();

const unsubStorage = browzer.events.storage((event) => {
  console.log("storage", event.key);
});
unsubStorage();

const unsubPopstate = browzer.events.popstate((event) => {
  console.log("popstate", event.state);
});
unsubPopstate();

const unsubError = browzer.events.error((event) => {
  console.log("error", event.message);
});
unsubError();

const unsubFocusin = browzer.events.focusin((event) => {
  console.log("focusin", event.target);
});
unsubFocusin();

const unsubFocusout = browzer.events.focusout((event) => {
  console.log("focusout", event.target);
});
unsubFocusout();

const unsubPageshow = browzer.events.pageshow((event) => {
  console.log("pageshow", event.persisted);
});
unsubPageshow();

const unsubPagehide = browzer.events.pagehide((event) => {
  console.log("pagehide", event.persisted);
});
unsubPagehide();

const unsubUnhandledRejection = browzer.events.unhandledRejection((event) => {
  console.log("unhandledRejection", event.reason);
});
unsubUnhandledRejection();

const unsubHashchange = browzer.events.hashchange((event) => {
  console.log("hashchange", event.newURL);
});
unsubHashchange();

const unsubPointerdown = browzer.events.pointerdown((event) => {
  console.log("pointerdown", event.pointerId);
});
unsubPointerdown();

const unsubPointerup = browzer.events.pointerup((event) => {
  console.log("pointerup", event.pointerId);
});
unsubPointerup();

const unsubPointermove = browzer.events.pointermove((event) => {
  console.log("pointermove", event.clientX, event.clientY);
});
unsubPointermove();

const unsubCopy = browzer.events.copy((event) => {
  console.log("copy", event.type);
});
unsubCopy();

const unsubCut = browzer.events.cut((event) => {
  console.log("cut", event.type);
});
unsubCut();

const unsubPaste = browzer.events.paste((event) => {
  console.log("paste", event.type);
});
unsubPaste();

const unsubTouchstart = browzer.events.touchstart((event) => {
  console.log("touchstart", event.touches.length);
});
unsubTouchstart();

const unsubTouchend = browzer.events.touchend((event) => {
  console.log("touchend", event.touches.length);
});
unsubTouchend();

const unsubDeviceorientation = browzer.events.deviceorientation((event) => {
  console.log("deviceorientation", event.alpha);
});
unsubDeviceorientation();

const unsubDevicemotion = browzer.events.devicemotion((event) => {
  console.log("devicemotion", event.interval);
});
unsubDevicemotion();

const unsubReducedMotion = browzer.events.reducedMotion((enabled) => {
  console.log("reducedMotion", enabled);
});
unsubReducedMotion();

const unsubViewport = browzer.events.viewport((state) => {
  console.log("viewport", state.width, state.height);
});
unsubViewport();

console.log("browzer.events ok");
