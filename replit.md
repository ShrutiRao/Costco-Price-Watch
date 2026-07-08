# CostcoWatch

CostcoWatch helps shoppers automatically monitor Costco purchases and alerts them when a meaningful price drop is available.

## Run & Operate

- `pnpm --filter @workspace/api-server run dev` — run the API server (port 8080, proxied at `/api`)
- `pnpm --filter @workspace/costco-watch run dev` — run the React frontend (proxied at `/`)
- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from the OpenAPI spec

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- Frontend: React + Vite, Tailwind CSS, wouter routing, TanStack Query
- API: Express 5 (artifacts/api-server) — in-memory store (no DB wired yet)
- API contract: OpenAPI spec in `lib/api-spec/openapi.yaml`, Orval codegen
- Validation: Zod (`@workspace/api-zod`) on the server, generated React Query hooks on the client

## Where things live

- `lib/api-spec/openapi.yaml` — source of truth for all API contracts
- `lib/api-client-react/src/generated/` — generated React Query hooks (do not edit)
- `lib/api-zod/src/generated/` — generated Zod schemas for server validation (do not edit)
- `artifacts/api-server/src/lib/store.ts` — in-memory receipt store + mock extraction logic + policy KB
- `artifacts/api-server/src/routes/` — Express route handlers (receipts, policies, dashboard)
- `artifacts/costco-watch/src/pages/` — React pages: dashboard, upload, receipts list, receipt detail
- `artifacts/costco-watch/src/components/` — shared layout and theme provider

## Architecture decisions

- **In-memory store**: Receipts live in a `Map` on the API server process. Intentional for the prototype — fast to iterate, no DB setup. Follow-up task exists to migrate to PostgreSQL.
- **Mock receipt extraction**: Uploading any file triggers deterministic mock extraction from a catalogue of realistic Costco items. The filename hash seeds the item selection.
- **OpenAPI-first**: All types flow from `openapi.yaml` → Orval codegen → typed hooks and Zod schemas. Never hand-write types that codegen produces.
- **Dark mode by default**: The `ThemeProvider` adds the `dark` class on mount. No toggle needed for the prototype.

## Product

- **Hero dashboard** (`/`): headline, 4 stat cards (receipts, items, alerts, savings), recent receipts
- **Upload** (`/upload`): drag-and-drop zone, accepts image/PDF, triggers mock extraction
- **Receipts list** (`/receipts`): all uploaded receipts with verdict summary badges
- **Receipt detail** (`/receipts/:id`): line-item comparison table with Alert/Review/No Action verdicts, evidence snippets, policy knowledge base accordion

## Verdict logic

| Condition | Verdict |
|---|---|
| No price drop | No Action |
| Outside policy window | Review |
| Drop ≥ $2.00 or ≥ 3% (within window) | Alert |
| Drop > 0 but below threshold (within window) | Review |

## User preferences

_Populate as you build — explicit user instructions worth remembering across sessions._

## Gotchas

- After any change to `lib/api-spec/openapi.yaml`, run codegen before touching frontend or server code that uses generated types.
- The API server must be running for the frontend to load real data — both workflows need to be active.
- `lib/api-zod/tsconfig.json` includes `"dom"` in lib (added to support `File`/`Blob` types in generated Zod schemas for multipart upload).
