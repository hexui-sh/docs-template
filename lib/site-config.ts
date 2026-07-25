import { docsCollections } from "@/lib/docs-collections";

/**
 * Central site configuration.
 *
 * This is the single source of truth for branding and navigation.
 * Update the values below to re-brand the entire template without
 * touching any component.
 */

export interface NavLink {
  title: string;
  href: string;
  /** Mark the link as external (opens in a new tab). */
  external?: boolean;
}

export interface SocialLink {
  title: string;
  href: string;
  /** Key of an icon in `components/icons.tsx`. */
  icon: "github" | "x" | "discord";
}

export const siteConfig = {
  /** Project name shown in the header, metadata and footer. */
  name: "Docs",
  /** Short description used for SEO metadata. */
  description:
    "A reusable documentation template built with Next.js, Fumadocs and Tailwind CSS.",
  /** Tagline shown on the home page hero. */
  tagline: "Build beautiful documentation sites in minutes.",
  /** Production URL (used for metadata). */
  url: "https://docs.hex-ui.dev",
  /** Base path of the documentation. */
  docsBase: "/",

  /** Project links. */
  links: {
    github: "https://github.com/hex-ui/hex-ui",
  },

  nav: [
    ...docsCollections.map((collection) => ({
      title: collection.title,
      href: collection.defaultPath,
    })),
    {
      title: "GitHub",
      href: "https://github.com/hex-ui/hex-ui",
      external: true,
    },
  ] as NavLink[],

  /** Social links shown in the footer. */
  socials: [
    { title: "GitHub", href: "https://github.com/hex-ui/hex-ui", icon: "github" },
    { title: "X", href: "https://x.com/hexui", icon: "x" },
    { title: "Discord", href: "https://discord.gg/hexui", icon: "discord" },
  ] satisfies SocialLink[],
} as const;

export type SiteConfig = typeof siteConfig;
