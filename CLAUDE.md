# Blog (tompassarelli.org)

Hugo site with Tailwind CSS (PostCSS build), deployed via GitHub Pages.

## Setup after fresh clone

```sh
npm ci
ln -sf ../../hooks/pre-commit .git/hooks/pre-commit
```

## Before committing

- The pre-commit hook runs `hugo --minify` automatically to verify the build
- Check that any new Tailwind classes you use exist in `tailwind.config.js` color definitions
- CSS is inlined in `baseof.html` via Hugo Pipes — no external stylesheet

## Accessibility

- Use `text-ef-grey2` (not grey0/grey1) for any readable text on dark backgrounds — it's the minimum that passes WCAG AA 4.5:1 contrast
- grey0/grey1 are only for decorative elements (borders, separators)
- Content wrapper uses `<main>` landmark — don't change to `<div>`

## SEO

- Every page gets meta description, Open Graph, Twitter card, and JSON-LD from `baseof.html`
- Page-level descriptions come from front matter `description` field (ox-hugo: `#+description:`)
- Falls back to site description in `hugo.toml` if not set

## Publishing workflow

- org-roam files tagged `:public:` are exported via `+org/hugo-publish-all` in Emacs
- ox-hugo writes markdown to `content/` — don't manually edit content files
- Push to `main` triggers GitHub Actions build and deploy
