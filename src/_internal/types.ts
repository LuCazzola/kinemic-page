export type MediaItem = {
  type: "image" | "video" | "embed";
  src: string;
  caption?: string;
  title?: string;
  poster?: string;
  /** set true to allow audio on videos (default: muted autoplay) */
  audio?: boolean;
};

export type Publication = {
  title: string;
  /** Array of [displayName, optionalProfileURL] */
  authors: Array<[string, string?]>;
  affiliations?: string;
  venue?: string;
  year?: string;
  pdf?: string;
  arxiv?: string;
  code?: string;
  /** Main teaser image shown below the buttons */
  image?: string;
  media?: MediaItem[];
  /** 1-based index into media[] to use as standalone teaser (overrides `image`) */
  teaserIndex?: number;
  supplementary?: string;
  tags?: string[];
  abstract?: string;
  /** Raw markdown string — populated automatically from content.md via main.tsx */
  content?: string;
  /** URL of your main portfolio/site shown in the top-left "Back to site" link */
  siteUrl?: string;
};
