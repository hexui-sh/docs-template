import { source } from "@/lib/source";
import { createFromSource } from "fumadocs-core/search/server";

/**
 * Full-text documentation search endpoint (powered by Orama).
 * Consumed by the search dialog included in the RootProvider.
 */
export const { GET } = createFromSource(source, {
  language: "english",
});
