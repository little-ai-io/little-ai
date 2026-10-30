# Little AI — website

Static landing page for https://www.little-ai.io (plain HTML/CSS/JS, no build step), hosted on GitHub Pages.

- `index.html` (EN) and `zh/index.html` (中文) hold all content as static HTML. Keep the two in sync.
- `main.js` is progressive enhancement only (animation, menu).
- `index.md`, `zh/index.md`, `llms.txt`, `llms-full.txt`, `robots.txt`, `sitemap.xml` are for search engines and AI agents.

## Preview

```sh
python3 -m http.server 8000
```

## Deploy

Push to `main`; Pages serves the repo root. `CNAME` sets the custom domain.

DNS: `www` CNAME → `little-ai-io.github.io`; apex A records → `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`.
