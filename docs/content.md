# Writing content.md

`src/content.md` is standard Markdown with a few extra tokens for media and layout.

## Embedding media

Reference items from the `media[]` array in `publication.ts` by 1-based index or by the optional `id` alias.

```
[MEDIA:1]              single item, full width
[MEDIA:overview]       same item, referenced by id alias
[MEDIA:1:0.6]          single item at 60% of the content width
[MEDIA:1-4]            carousel — items 1 through 4
[MEDIA:1,3,5]          carousel — non-contiguous picks
```

Add `{...}` immediately after any token for a Markdown caption block rendered above the media:

```
[MEDIA:1]{**Figure 1.** Caption with **bold**, *italic*, `code`, and math ($\alpha$).}
```

## Multi-column layout

```
[MEDIA-MULTICOL:1.1]
[MEDIA:1]{**Left column caption.**}
[MEDIA:2]{**Right column caption.**}
[/MEDIA-MULTICOL]
```

The number after `:` is a scale factor — `1.1` lets the block extend 10% past the normal content width. Use any number of columns. Columns collapse to a single column on mobile.

## Spacing

```
[SPACING:small]    →  16 px
[SPACING:medium]   →  32 px
[SPACING:large]    →  48 px
[SPACING:xlarge]   →  64 px
```

## Math

Full [KaTeX](https://katex.org/) support — inline and display:

```
Inline: $E = mc^2$

Display:
$$
\mathcal{L} = \sum_{i} \log p(x_i)
$$
```

## Standard Markdown

Everything else is standard Markdown: **bold**, *italic*, `code`, [links](https://example.com), tables, and fenced code blocks.
