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
  console.log(type);
});

const unsubFocus = browzer.events.focus((isFocused) => {
  console.log(isFocused ? "focused" : "blurred");
});

const unsubLifecycle = browzer.events.lifecycle((state) => {
  // state: "ready" | "load"
  console.log(state);
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

const unsubKey = browzer.events.key((state, event) => {
  // state: "down" | "up"
  console.log(state, event.key);
});

const unsubPointer = browzer.events.pointer((state, event) => {
  // state: "down" | "up"
  console.log(state, event.pointerId);
});

const unsubPointermove = browzer.events.pointermove((event) => {
  console.log(event.clientX, event.clientY);
});

const unsubTouch = browzer.events.touch((state, event) => {
  // state: "start" | "end"
  console.log(state, event.touches.length);
});

const unsubWheel = browzer.events.wheel((event) => {
  console.log(event.deltaY);
});

const unsubClipboard = browzer.events.clipboard((state, event) => {
  // state: "copy" | "cut" | "paste"
  console.log(state, event.type);
});

const unsubFocusChange = browzer.events.focusChange((state, event) => {
  // state: "in" | "out"
  console.log(state, event.target);
});

const unsubHistory = browzer.events.history((state, event) => {
  // state: "popstate" | "hashchange"
  console.log(state, event.type);
});

const unsubPage = browzer.events.page((state, event) => {
  // state: "show" | "hide"
  console.log(state, event.persisted);
});

const unsubStorage = browzer.events.storage((event) => {
  console.log(event.key, event.newValue);
});

const unsubError = browzer.events.error((event) => {
  console.log(event.message);
});

const unsubUnhandledRejection = browzer.events.unhandledRejection((event) => {
  console.log(event.reason);
});

const unsubDevice = browzer.events.device((state, event) => {
  // state: "orientation" | "motion"
  console.log(state, event.type);
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
unsubLifecycle();
unsubBeforeUnload();
unsubResize();
unsubScroll();
unsubKey();
unsubPointer();
unsubPointermove();
unsubTouch();
unsubWheel();
unsubClipboard();
unsubFocusChange();
unsubHistory();
unsubPage();
unsubStorage();
unsubError();
unsubUnhandledRejection();
unsubDevice();
unsubReducedMotion();
unsubViewport();
```

## Development

```bash
npm run build      # emit dist/ (ESM + CJS + types)
npm run typecheck  # typecheck src/
npm run test       # smoke-test dist/ (run after build)
```
