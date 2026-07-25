import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";
import { siteConfig } from "@/lib/site-config";
import { docsCollections } from "@/lib/docs-collections";

export function baseOptions(): BaseLayoutProps {
  return {
    githubUrl: siteConfig.links.github,
    links: docsCollections.map((collection) => ({
      text: collection.title,
      url: collection.path,
      active: "nested-url",
    })),
    themeSwitch: {
      mode: "light-dark-system",
    },
  };
}
