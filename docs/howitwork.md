---
sidebar_position: 2
---

# About

- This framework work written in typescript
- Using [inversifyJS](https://inversify.io/) library which support inversion of control (IoC) container
  for JavaScript & Node.js apps powered by TypeScript.
- UI using ReactJS Framework

## Structure

```mermaid
graph TD
    A[Application] -->|start| B(Inject all Controllers)
    B --> C{Controllers}
    C --> D[Ticks]
    C --> E[AllEvents]
    E --> F[TunnelEvents]
    E --> G[Events]
    E --> H[LocalEvents]
    E --> I[NetEvents]
    C --> J[AllExports]
    J --> K[Exports]
    J --> L[ExportCallbacks]
    C --> M[ChatCommands]
```
