# browzerjs

Better developer experience for modern browser APIs.

## Installation

```bash
npm install browzerjs
```

## Usage

```ts
import { browzer } from "browzerjs";

const unsubOnline = browzer.events.online((isOnline) => {
  console.log(isOnline ? "online" : "offline");
});

const unsubVisibility = browzer.events.visibility((state) => {
  console.log(state); // "visible" | "hidden"
});

const unsubTheme = browzer.events.theme((isDark) => {
  console.log(isDark ? "dark" : "light");
});

const unsubOrientation = browzer.events.orientation((type) => {
  console.log(type); // "portrait-primary" | "landscape-primary" | ...
});

const unsubFocus = browzer.events.focus((isFocused) => {
  console.log(isFocused ? "focused" : "blurred");
});

const unsubReady = browzer.events.ready(() => {
  console.log("DOM ready");
});

const unsubLoad = browzer.events.load(() => {
  console.log("page loaded");
});

const unsubBeforeUnload = browzer.events.beforeUnload((event) => {
  event.preventDefault();
});

const unsubResize = browzer.events.resize(({ width, height }) => {
  console.log(width, height);
});

const unsubScroll = browzer.events.scroll(({ x, y }) => {
  console.log(x, y);
});

const unsubKeydown = browzer.events.keydown((event) => {
  console.log(event.key);
});

const unsubKeyup = browzer.events.keyup((event) => {
  console.log(event.key);
});

const unsubWheel = browzer.events.wheel((event) => {
  console.log(event.deltaY);
});

const unsubStorage = browzer.events.storage((event) => {
  console.log(event.key, event.newValue);
});

const unsubPopstate = browzer.events.popstate((event) => {
  console.log(event.state);
});

const unsubError = browzer.events.error((event) => {
  console.log(event.message);
});

const unsubFocusin = browzer.events.focusin((event) => {
  console.log(event.target);
});

const unsubFocusout = browzer.events.focusout((event) => {
  console.log(event.target);
});

const unsubPageshow = browzer.events.pageshow((event) => {
  console.log(event.persisted);
});

const unsubPagehide = browzer.events.pagehide((event) => {
  console.log(event.persisted);
});

const unsubUnhandledRejection = browzer.events.unhandledRejection((event) => {
  console.log(event.reason);
});

const unsubHashchange = browzer.events.hashchange((event) => {
  console.log(event.newURL);
});

const unsubPointerdown = browzer.events.pointerdown((event) => {
  console.log(event.pointerId);
});

const unsubPointerup = browzer.events.pointerup((event) => {
  console.log(event.pointerId);
});

const unsubPointermove = browzer.events.pointermove((event) => {
  console.log(event.clientX, event.clientY);
});

const unsubCopy = browzer.events.copy((event) => {
  console.log(event.type);
});

const unsubCut = browzer.events.cut((event) => {
  console.log(event.type);
});

const unsubPaste = browzer.events.paste((event) => {
  console.log(event.type);
});

const unsubTouchstart = browzer.events.touchstart((event) => {
  console.log(event.touches.length);
});

const unsubTouchend = browzer.events.touchend((event) => {
  console.log(event.touches.length);
});

const unsubDeviceorientation = browzer.events.deviceorientation((event) => {
  console.log(event.alpha);
});

const unsubDevicemotion = browzer.events.devicemotion((event) => {
  console.log(event.interval);
});

const unsubReducedMotion = browzer.events.reducedMotion((enabled) => {
  console.log(enabled);
});

const unsubViewport = browzer.events.viewport((state) => {
  console.log(state.width, state.height, state.scale);
});

unsubOnline();
unsubVisibility();
unsubTheme();
unsubOrientation();
unsubFocus();
unsubReady();
unsubLoad();
unsubBeforeUnload();
unsubResize();
unsubScroll();
unsubKeydown();
unsubKeyup();
unsubWheel();
unsubStorage();
unsubPopstate();
unsubError();
unsubFocusin();
unsubFocusout();
unsubPageshow();
unsubPagehide();
unsubUnhandledRejection();
unsubHashchange();
unsubPointerdown();
unsubPointerup();
unsubPointermove();
unsubCopy();
unsubCut();
unsubPaste();
unsubTouchstart();
unsubTouchend();
unsubDeviceorientation();
unsubDevicemotion();
unsubReducedMotion();
unsubViewport();
```

## Development

```bash
npm run build      # emit dist/ (ESM + CJS + types)
npm run typecheck  # typecheck src/
npm run test       # smoke-test dist/ (run after build)
```
