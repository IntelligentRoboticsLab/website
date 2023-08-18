export const SITE = {
  title: "Dutch Nao Team",
  description: "Your favorite Robocup SPL team!",
  defaultLanguage: "en_US",
};

export const OPEN_GRAPH = {
  image: {
    src: "images/og-image.png",
    alt: "Dutch Nao Team",
  },
  twitter: "dutchnaoteam",
};

// This is the type of the frontmatter you put in the docs markdown files.
export type Frontmatter = {
  title: string;
  description: string;
  layout: string;
  image?: { src: string; alt: string };
  dir?: "ltr" | "rtl";
  ogLocale?: string;
  lang?: KnownLanguageCode;
  isMdx?: boolean;
};

export const KNOWN_LANGUAGES = {
  // Add more languages here
  // sv: "Svenska",
  en: "English",

  // TODO: NL docs?
  // nl: "Nederlands",
} as const;
export type KnownLanguageCode = keyof typeof KNOWN_LANGUAGES;

export const GITHUB_EDIT_URL = `#`;

export const COMMUNITY_INVITE_URL = `#`;

// See "Algolia" section of the README for more information.
export const ALGOLIA = {
  indexName: "#",
  appId: "#",
  apiKey: "#",
};

export type OuterHeaders = "Welcome" | "Open Source" | "Framework";

export type SidebarItem<TCode extends KnownLanguageCode = KnownLanguageCode> = {
  text: string;
  link: `${TCode}/${string}`;
};

export type SidebarItemLink = SidebarItem["link"];

export type Sidebar = {
  [TCode in KnownLanguageCode]: {
    // eslint-disable-next-line no-unused-vars
    [THeader in OuterHeaders]?: SidebarItem<TCode>[];
  };
};
export const SIDEBAR: Sidebar = {
  // For Translations:
  // Keep the "outer headers" in English so we can match them.
  // Translate the "inner headers" to the language you're translating to.
  // Omit any files you haven't translated, they'll fallback to English.
  // Example:
  // sv: {
  //   "Welcome": [
  //     { text: "Introduktion", link: "sv/introduction" },
  //     { text: "Installation", link: "sv/installation" },
  //   ],
  //   "Usage": [{ text: "Miljövariabler", link: "sv/usage/env-variables" }],
  // },

  en: {
    Welcome: [{ text: "Introduction", link: "en/introduction" }],
    "Open Source": [
      { text: "Nidhogg", link: "en/open-source/nidhogg" },
      { text: "Bifrost", link: "en/open-source/bifrost" },
    ],
    Framework: [{ text: "🐉", link: "en/framework/y" }],
  },
};

export const SIDEBAR_HEADER_MAP: Record<
  Exclude<KnownLanguageCode, "en">,
  Record<OuterHeaders, string>
> = {};
