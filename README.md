# md-paper

A minimal template for publishing academic paper project pages on GitHub Pages.  
You write everything in **Markdown**. No HTML, no React knowledge required.

## What you edit

There are exactly **3 files** to change when publishing a new paper:

| File | What goes there |
|---|---|
| `index.html` | Page `<title>` and `<meta description>` |
| `src/publication.ts` | Authors, venue, links, media list |
| `src/content.md` | Paper body — full Markdown with embedded media |

Media files (images, videos) go in `public/assets/media/`.  
Everything under `src/_internal/` is the engine — don't touch it.

## Quickstart

```bash
# 1. Use this template (GitHub button) or clone it
git clone https://github.com/LuCazzola/md-paper my-paper
cd my-paper

# 2. Install
npm install

# 3. Start the dev server
npm run dev       # → http://localhost:5173
```

Then open `src/publication.ts` and `src/content.md` and fill them in.

## Embedding media in Markdown

Reference media items from the `media` array in `publication.ts` by their **1-based index**:

```md
[MEDIA:1]                        single item, full width
[MEDIA:1:0.7]                    single item at 70% width
[MEDIA:1-6]                      carousel of items 1–6
[MEDIA:1,3,5]                    carousel of items 1, 3, 5
[MEDIA:1-6]{Caption **text**}    carousel with a markdown caption above

[MEDIA-SIDE-BY-SIDE:1.0]
[MEDIA:1-3]{Left column caption}
[MEDIA:4-6]{Right column caption}
[/MEDIA-SIDE-BY-SIDE]

[SPACING:small|medium|large|xlarge]   vertical gap
```

Captions inside `{...}` are full Markdown — bold, italic, links, math all work.

## Deploying to GitHub Pages

1. Push to `main`
2. In the repo Settings → Pages → Source: **GitHub Actions**
3. Done — the included workflow builds and deploys on every push

If your repo lives at a sub-path (e.g. `github.com/you/my-paper`), set `VITE_BASE` in the workflow:

```yaml
- name: Build
  run: npm run build
  env:
    VITE_BASE: /my-paper/
```

## Features

- Markdown-native: write content, not JSX
- Media tokens: images, videos, embeds, carousels, side-by-side comparisons
- Math support via KaTeX (`$inline$` and `$$block$$`)
- Buttons for Paper PDF, ArXiv, Code, Supplementary — greyed out when missing
- Zero-config GitHub Pages deploy

---

© Luca Cazzola — MIT License
