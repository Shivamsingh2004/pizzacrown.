# The Pizza Crown – React (Vite) website

## Run locally
```
npm install
npm run dev
```
## Build
```
npm run build   # output in dist/
```
## Deploy on Vercel
1. Push this folder to GitHub.
2. Vercel → New Project → import the repo.
3. Framework Preset: Vite (build `npm run build`, output `dist`).
4. Deploy. `vercel.json` already contains the SPA rewrite.

All menu content lives in `src/data/menu.js`; edit it and the whole site updates.
