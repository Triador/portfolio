# Portfolio

Static Astro portfolio published at https://triador.github.io/portfolio/.
Russian and English pages share project descriptions in `src/data/projects.ts`
and the layout in `src/components/Portfolio.astro`. Project logos live in
`src/assets/projects/`; implementation details use `ProjectDetails.astro`.
The header coffee button, payment panel and clipboard feedback live in `src/components/Support.astro`.

## Local development

```text
npm ci
npm run dev -- --host 127.0.0.1 --port 4321
npm run build
```

Preview: `http://127.0.0.1:4321/portfolio/ru/` or `/portfolio/en/`.
Check both languages and narrow screens after content or layout changes.

## Publication

Push reviewed changes to `main`. `.github/workflows/deploy.yml` builds the site
and publishes its `dist/` artifact through GitHub Actions to GitHub Pages.
The `github-pages` environment allows deployments from `main` only.
Do not publish files directly or deploy from other branches.

The workflow embeds the commit SHA in the `build-revision` HTML meta tag.
After the workflow succeeds, check that tag on a localized public page against
the deployed commit. Local builds use `local` as the revision.
