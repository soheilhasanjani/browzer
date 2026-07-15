# browzerjs

Better developer experience for modern browser APIs.

## Installation

```bash
npm install browzerjs
```

## Usage

```ts
import { hello } from "browzerjs";

console.log(hello()); // "Hello from browzerjs"
```

## Development

```bash
npm run build      # emit dist/ (ESM + CJS + types)
npm run typecheck  # typecheck src/
npm run test       # smoke-test dist/ (run after build)
```
