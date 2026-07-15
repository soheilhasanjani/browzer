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

unsubOnline();
unsubVisibility();
unsubTheme();
unsubOrientation();
unsubFocus();
unsubReady();
unsubLoad();
unsubBeforeUnload();
```

## Development

```bash
npm run build      # emit dist/ (ESM + CJS + types)
npm run typecheck  # typecheck src/
npm run test       # smoke-test dist/ (run after build)
```
