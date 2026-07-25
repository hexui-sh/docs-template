import type { ComponentType, SVGProps } from "react";
import { BookOpen, SquareCode } from "lucide-react";

type CollectionIcon = ComponentType<SVGProps<SVGSVGElement>>;

export interface DocsCollection {
  id: string;
  title: string;
  path: `/${string}`;
  defaultPath: `/${string}`;
  description: string;
  icon: CollectionIcon;
}

export const docsCollections = [
  {
    id: "documentation",
    title: "Documentation",
    path: "/documentation",
    defaultPath: "/documentation/overview",
    description: "Product guides, components, and configuration.",
    icon: BookOpen,
  },
  {
    id: "api-reference",
    title: "API Reference",
    path: "/api-reference",
    defaultPath: "/api-reference/overview/",
    description: "Technical reference for configuration and APIs.",
    icon: SquareCode,
  },
] as const satisfies readonly DocsCollection[];

export type DocsCollectionId = (typeof docsCollections)[number]["id"];

function matchesPath(pathname: string, path: string): boolean {
  return pathname === path || pathname.startsWith(`${path}/`);
}

export function getDocsCollection(
  pathname: string,
): (typeof docsCollections)[number] | undefined {
  return docsCollections.find((collection) =>
    matchesPath(pathname, collection.path),
  );
}

export function getDocsPath(slug?: readonly string[]): string {
  return slug?.length ? `/${slug.join("/")}` : "/";
}

const legacyPrefixes: readonly (readonly [string, string])[] = [];

const legacyPages = new Map<string, string>([
  ["/getting-started", "/documentation/overview"],
  ["/getting-started/installation", "/documentation/installation"],
  ["/getting-started/project-structure", "/documentation/project-structure"],
  ["/getting-started/quick-start", "/documentation/overview"],
  ["/guides", "/documentation/guides/add-a-page"],
  ["/guides/writing-content", "/documentation/features/mdx-content"],
  ["/guides/navigation", "/documentation/customization/navigation"],
  ["/guides/theming", "/documentation/customization/theme"],
  ["/guides/search", "/documentation/features/search"],
  ["/components", "/api-reference/components"],
  ["/components/callout", "/api-reference/components"],
  ["/components/cards", "/api-reference/components"],
  ["/components/code-blocks", "/documentation/features/mdx-content"],
  ["/documentation/components", "/api-reference/components"],
  ["/documentation/components/callout", "/api-reference/components"],
  ["/documentation/components/cards", "/api-reference/components"],
  ["/documentation/components/code-blocks", "/documentation/features/mdx-content"],
  ["/documentation/introduction", "/documentation/overview"],
  ["/documentation/getting-started/installation", "/documentation/installation"],
  ["/documentation/getting-started/project-structure", "/documentation/project-structure"],
  ["/documentation/getting-started/quick-start", "/documentation/overview"],
  ["/documentation/guides/writing-content", "/documentation/features/mdx-content"],
  ["/documentation/guides/navigation", "/documentation/customization/navigation"],
  ["/documentation/guides/theming", "/documentation/customization/theme"],
  ["/documentation/guides/search", "/documentation/features/search"],
  [
    "/api-reference/site-configuration",
    "/documentation/configuration",
  ],
  ["/api-reference/configuration/site-configuration", "/documentation/configuration"],
]);

export function getDocsRedirect(slug?: readonly string[]): string | undefined {
  const pathname = getDocsPath(slug);

  if (pathname === "/") {
    return docsCollections[0].defaultPath;
  }

  const collection = docsCollections.find(
    (candidate) => candidate.path === pathname,
  );
  if (collection) {
    return collection.defaultPath;
  }

  const exactRedirect = legacyPages.get(pathname);
  if (exactRedirect) {
    return exactRedirect;
  }

  for (const [from, to] of legacyPrefixes) {
    if (matchesPath(pathname, from)) {
      return pathname.replace(from, to);
    }
  }
}
