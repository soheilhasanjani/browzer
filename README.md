# Browzer

Better developer experience for modern browser APIs.

## Installation

```bash
npm install browzer
```

## Usage

```ts
import { hello } from "browzer";

console.log(hello()); // "Hello from Browzer"
```

## Development

```bash
npm run build      # emit dist/ (ESM + CJS + types)
npm run typecheck  # typecheck src/
npm run test       # smoke-test dist/ (run after build)
```
