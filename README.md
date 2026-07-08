# CostcoWatch

**Never miss a Costco price drop again.**

CostcoWatch lets you upload Costco receipts, automatically scans every item, and alerts you when a price drop means you're owed a refund — all within Costco's 30-day price-protection window.

![CostcoWatch Dashboard](https://img.shields.io/badge/stack-React%20%2B%20Express-10b981?style=flat-square) ![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue?style=flat-square) ![License](https://img.shields.io/badge/license-MIT-gray?style=flat-square)

---

## Features

- **Receipt upload** — drag-and-drop a photo or PDF; every item, price, and date is extracted automatically
- **Price tracking** — each item is monitored for the full 30-day price-match window
- **Smart alerts** — three-tier verdict system: **Alert** (refund available), **Review** (edge case), **No Action**
- **Dashboard** — live stats for total receipts, items scanned, open alerts, and estimated savings
- **Explainer video** — animated motion-graphics video at `/costco-watch-video/`

---

## Getting Started

```bash
# Install dependencies
pnpm install

# Start the API server (port 8080)
pnpm --filter @workspace/api-server run dev

# Start the frontend (served at /)
pnpm --filter @workspace/costco-watch run dev
```

Both services are managed as Replit workflows and start automatically in the workspace.

---

## Project Structure

```
/
├── artifacts/
│   ├── api-server/          # Express 5 API — receipts, policies, dashboard
│   ├── costco-watch/        # React + Vite frontend
│   └── costco-watch-video/  # Animated explainer video (React + Framer Motion)
├── lib/
│   ├── api-spec/            # OpenAPI spec (source of truth for all types)
│   ├── api-client-react/    # Generated React Query hooks (do not edit)
│   └── api-zod/             # Generated Zod validation schemas (do not edit)
└── e2e/                     # Playwright end-to-end tests
```

---

## Stack

| Layer | Technology |
|---|---|
| Monorepo | pnpm workspaces |
| Runtime | Node.js 24 |
| Language | TypeScript 5.9 |
| Frontend | React, Vite, Tailwind CSS, wouter, TanStack Query |
| Backend | Express 5 |
| API contract | OpenAPI → Orval codegen (React Query hooks + Zod schemas) |
| Video | Framer Motion, GSAP |
| Tests | Playwright (e2e) |

---

## API

The API is defined in `lib/api-spec/openapi.yaml` — the single source of truth for all types and contracts.

After any spec change, regenerate client hooks and server schemas:

```bash
pnpm --filter @workspace/api-spec run codegen
```

**Endpoints**

| Method | Path | Description |
|---|---|---|
| `GET` | `/api/dashboard/summary` | Aggregated stats (receipts, items, alerts, savings) |
| `GET` | `/api/receipts` | List all uploaded receipts |
| `POST` | `/api/receipts` | Upload a new receipt |
| `GET` | `/api/receipts/:id` | Receipt detail with line items |
| `GET` | `/api/receipts/:id/comparison` | Price comparison + verdicts |
| `DELETE` | `/api/receipts/:id` | Delete a receipt |
| `GET` | `/api/policies` | Costco price-protection policy knowledge base |

---

## Verdict Logic

| Condition | Verdict |
|---|---|
| No price drop detected | No Action |
| Drop outside the 30-day window | Review |
| Drop ≥ $2.00 or ≥ 3% within window | **Alert** |
| Drop > $0 but below threshold | Review |

---

## Development Notes

- **In-memory store** — receipts live in a `Map` on the server process; fast for the prototype, no DB setup required. Seed data is loaded on startup.
- **Mock extraction** — uploading any file triggers deterministic mock extraction from a catalogue of realistic Costco items (filename hash seeds selection).
- **OpenAPI-first** — never hand-write types that codegen produces; always edit the spec and re-run codegen.
- **Dark mode** — the `ThemeProvider` applies the `dark` class on mount; no toggle in the prototype.

---

## Explainer Video

An animated ~42-second motion-graphics explainer lives at `/costco-watch-video/`. To export it as an `.mp4`:

1. Select **CostcoWatch — Explainer Video** from the artifact dropdown in the Replit preview pane
2. Click the **Export** button — Replit records the full playback and downloads the file

The preview bar includes scene-jump controls, a scene-lock loop, and a mute/unmute toggle.
