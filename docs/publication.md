# Filling out publication.ts

Open `src/publication.ts`. Everything here is optional except `title` and `authors`.

## Metadata

```ts
title: "Your Paper Title",
authors: [
  ["A. Author", "https://scholar.google.com/..."],  // name + profile URL
  ["B. Coauthor"],                                   // name only
],
affiliations: "University X; Institute Y",
venue: "CVPR 2025",   // or undefined to hide
year:  "2025",
abstract: "Your abstract text.",
siteUrl: "https://your-portfolio.github.io/",  // "← Back to site" link
```

## Buttons

Each button has three states:

```ts
import { COMING_SOON } from "@/_internal/types";

paper:         "https://arxiv.org/abs/XXXX.XXXXX",  // active link
code:          COMING_SOON,                          // greyed out "coming soon"
pdf:           undefined,                            // hidden entirely
supplementary: undefined,
```

`pdf` and `supplementary` paths starting with `/` resolve automatically to `public/assets/`.  
Example: `pdf: "/resources/paper.pdf"` → `public/assets/resources/paper.pdf`

## Media list

```ts
media: [
  {
    type:    "image",
    src:     "/media/figure1.png",   // relative to public/assets/
    id:      "overview",             // optional alias for [MEDIA:overview] in content.md
    title:   "Figure title",
    caption: "Figure caption.",
  },
  {
    type:  "video",
    src:   "/media/demo.mp4",
    title: "Demo",
    audio: true,   // default is muted autoplay; set true to enable audio
  },
],
teaserIndex: 1,   // 1-based index — shown below buttons before the abstract
```

## Theme (all optional)

Remove any line to keep the default value.

```ts
const theme: Theme = {
  accentColor:          "#0a4b7c",   // headings, separator, footer background
  pageBackground:       "#ffffff",
  blockBackground:      "#f7f7f7",   // abstract + text blocks
  baseFontSize:         16,          // scales the whole page
  titleFontSize:        48,
  authorFontSize:       18,
  headingFontSize:      22,
  abstractFontSize:     16,
  contentFontSize:      16,
  mediaTitleFontSize:   18,
  mediaCaptionFontSize: 13,
  contentMaxWidth:      1200,
  bodyFont:             "Lato, sans-serif",
  headingFont:          '"Patua One", serif',
};
```
