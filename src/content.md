<!--
┌─────────────────────────────────────────────────────────────────────────────┐
│  content.md  —  YOUR PAPER'S BODY                                           │
│                                                                             │
│  Write normal Markdown here. Between sections you can embed media items     │
│  from the `media` array in publication.ts using these tokens:               │
│                                                                             │
│  [MEDIA:N]                    show item N (1-based) full-width              │
│  [MEDIA:N:0.7]                show item N at 70% of max width               │
│  [MEDIA:1-6]                  carousel of items 1 through 6                 │
│  [MEDIA:1,3,5]                carousel of items 1, 3 and 5                  │
│  [MEDIA:1-6]{Caption **md**}  carousel with a markdown caption above        │
│                                                                             │
│  [MEDIA-SIDE-BY-SIDE:1.0]                                                   │
│  [MEDIA:1-3]{Left caption}                                                  │
│  [MEDIA:4-6]{Right caption}                                                 │
│  [/MEDIA-SIDE-BY-SIDE]        side-by-side columns (scale > 1 = wider)      │
│                                                                             │
│  [SPACING:small|medium|large|xlarge]   vertical gap                         │
└─────────────────────────────────────────────────────────────────────────────┘
-->

### Section 1

Write your section text here. You can use **bold**, *italic*, `code`,
[links](https://example.com), math ($E = mc^2$), and all standard GFM features.

[MEDIA:1]{**Figure 1.** A caption for your figure goes here.}

### Section 2

Another section. Use a carousel to show multiple related items.

[MEDIA:1-2]{**Figures 1–2.** These two figures illustrate the same concept from different angles.}

### Side-by-side comparison

[MEDIA-SIDE-BY-SIDE:1.0]
[MEDIA:1]{**Baseline.** Description of the baseline method.}
[MEDIA:2]{**Ours.** Description of your method.}
[/MEDIA-SIDE-BY-SIDE]

## Cite us

```bibtex
@article{author2025yourpaper,
  title   = {Your Paper Title},
  author  = {Author, A. and Coauthor, B.},
  journal = {arXiv preprint arXiv:XXXX.XXXXX},
  year    = {2025},
}
```
