/**
 * ┌─────────────────────────────────────────────────────────────────────────┐
 * │  publication.ts  —  YOUR PAPER'S METADATA                               │
 * │                                                                         │
 * │  Fill in every field that applies to your paper.                        │
 * │  Leave optional fields as undefined (or remove them) to hide them.      │
 * │                                                                         │
 * │  Media files go in:  public/assets/media/                               │
 * │  Other files (PDF, zips) go in:  public/assets/resources/               │
 * └─────────────────────────────────────────────────────────────────────────┘
 */
import type { Publication } from "@/_internal/types";

// Shorthand: resolves a path relative to the deployed site root.
// Usage:  a("/media/my-image.png")  →  "assets/media/my-image.png"  (or the correct base path in production)
const a = (path: string) => `${import.meta.env.BASE_URL.replace(/\/$/, "")}/assets${path}`;

const publication: Publication = {
  // ── required ──────────────────────────────────────────────────────────────
  title: "Your Paper Title",

  // Each author is [displayName, optionalProfileURL]
  authors: [
    ["A. Author",   "https://scholar.google.com/"],
    ["B. Coauthor"],   // no link → just plain text
  ],

  // ── venue & year ──────────────────────────────────────────────────────────
  venue: "(CONF) Full Conference Name",   // shown in the top bar and under the title
  year:  "2025",

  // ── optional text ─────────────────────────────────────────────────────────
  affiliations: "University X; Institute Y",   // shown below authors

  abstract: `Your abstract text goes here. It will be shown in a grey box
below the buttons. You can write multiple sentences — just keep it as
a plain string (no markdown here).`,

  // ── links (remove or set to undefined to show a "coming soon" button) ─────
  arxiv:        "https://arxiv.org/abs/XXXX.XXXXX",
  pdf:          a("/resources/your-paper.pdf"),          // or an external URL
  code:         undefined,                               // "https://github.com/..."
  supplementary: a("/resources/your-supplementary.zip"),

  // ── back-link ─────────────────────────────────────────────────────────────
  siteUrl: "https://your-portfolio.github.io/",

  // ── main teaser image (shown below buttons when there is no content.md) ───
  image: a("/media/your-teaser-image.png"),

  // ── media list (1-based in content.md, 0-based internally) ────────────────
  // These are referenced in content.md using [MEDIA:N] tokens.
  // Supported types: "image" | "video" | "embed"
  media: [
    // Example image
    {
      type: "image",
      src:  a("/media/figure1.png"),
      title:   "Figure 1",
      caption: "A description of Figure 1.",
    },

    // Example video (autoplay, muted, looping)
    {
      type:    "video",
      src:     a("/media/demo.mp4"),
      title:   "Demo video",
      caption: "A short description of the demo.",
    },

    // Example YouTube embed
    {
      type:    "embed",
      src:     "https://www.youtube.com/embed/VIDEO_ID",
      caption: "Optional caption.",
    },
  ],
};

export default publication;
