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

unsubOnline();
unsubVisibility();
unsubTheme();
```

## Development

```bash
npm run build      # emit dist/ (ESM + CJS + types)
npm run typecheck  # typecheck src/
npm run test       # smoke-test dist/ (run after build)
```
