# md-paper

A Markdown-native template for publishing academic paper pages on GitHub Pages.  
Write your paper page entirely in Markdown — no HTML, no JSX, no build knowledge required.

---

## Quick start

1. **Use this template** — click *Use this template* on GitHub to create your repo
2. **Enable GitHub Pages** — Settings → Pages → Source → **GitHub Actions**
3. **Edit three things** — `src/publication.ts`, `src/content.md`, and drop media in `public/assets/media/`
4. Push — your page deploys automatically

---

## The files you edit

### `src/publication.ts` — metadata & media list

```ts
import { COMING_SOON } from "@/_internal/types";

const publication: Publication = {
  title: "Your Paper Title",
  authors: [
    ["A. Author", "https://scholar.google.com/..."],
    ["B. Coauthor"],          // no URL → plain text
  ],
  venue: "CVPR 2025",         // or undefined to hide
  year:  "2025",
  affiliations: "University X; Institute Y",
  abstract: "Your abstract...",

  // "https://..." = active button   COMING_SOON = greyed out   undefined = hidden
  paper:         "https://arxiv.org/abs/XXXX.XXXXX",
  pdf:           undefined,
  code:          COMING_SOON,
  supplementary: undefined,

  siteUrl:     "https://your-portfolio.github.io/",
  teaserIndex: 1,   // 1-based index of the media item shown below the buttons

  // Paths are relative to public/assets/ — start with "/"
  media: [
    {
      type:    "image",
      src:     "/media/figure1.png",
      id:      "overview",     // optional alias — lets you write [MEDIA:overview] in content.md
      title:   "Figure title",
      caption: "Figure caption.",
    },
    {
      type:  "video",
      src:   "/media/demo.mp4",
      title: "Demo",
    },
  ],
};
```

---

### `src/content.md` — paper body

Standard Markdown with special tokens for media and layout.

#### Embedding media

| Token | Result |
|---|---|
| `[MEDIA:1]` | Single item, full width (1-based index) |
| `[MEDIA:overview]` | Single item by alias (`id` in publication.ts) |
| `[MEDIA:1:0.6]` | Single item at 60% width |
| `[MEDIA:1-4]` | Carousel — items 1 through 4 |
| `[MEDIA:1,3,5]` | Carousel — non-contiguous picks |

Add `{...}` after any token for a Markdown caption block rendered above the media:

```
[MEDIA:1]{**Figure 1.** Caption supports **bold**, *italic*, `code`, and math ($\alpha$).}
```

#### Multi-column layout

```
[MEDIA-MULTICOL:1.1]
[MEDIA:1]{**Left column caption.**}
[MEDIA:2]{**Right column caption.**}
[/MEDIA-MULTICOL]
```

The number after the colon is a scale factor — `1.1` lets the block extend 10% beyond the normal content width. Columns collapse to a single column on mobile automatically.

#### Spacing

```
[SPACING:small]    →  16 px
[SPACING:medium]   →  32 px
[SPACING:large]    →  48 px
[SPACING:xlarge]   →  64 px
```

#### Math

Full [KaTeX](https://katex.org/) — inline `$...$` and display `$$...$$`.

---

### `theme` block in `publication.ts` — visual customisation

All fields are optional — remove any line to keep its default.

```ts
const theme: Theme = {
  accentColor:          "#0a4b7c",          // headings, separator dots, footer background
  pageBackground:       "#ffffff",
  blockBackground:      "#f7f7f7",          // abstract / text-block background
  baseFontSize:         16,                 // root px — scales the whole page
  titleFontSize:        48,                 // paper title (clamped on small screens)
  authorFontSize:       18,
  headingFontSize:      22,                 // h2/h3 inside content
  abstractFontSize:     16,
  contentFontSize:      16,
  mediaTitleFontSize:   18,
  mediaCaptionFontSize: 13,
  contentMaxWidth:      1200,               // max column width in px
  bodyFont:             "Lato, sans-serif",
  headingFont:          '"Patua One", serif',
};
```

---

## File layout

```
public/
  assets/
    media/        ← images and videos referenced in publication.ts
    resources/    ← PDFs, zip files, etc.
src/
  publication.ts  ← ✏️  edit this
  content.md      ← ✏️  edit this
  _internal/      ← template internals — do not edit
```

---

## Local preview

```bash
npm install
npm run dev
```

---

## License

Open source — free to use with attribution.  
If md-paper is useful for your work, a link back is appreciated.
