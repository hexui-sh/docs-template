import { defineConfig, defineDocs } from "fumadocs-mdx/config";

/**
 * The documentation collection.
 *
 * Content lives in `content/docs`. Each folder can contain a `meta.json`
 * file to control its title, icon, order and collapsible behavior.
 * See https://fumadocs.dev/docs/headless/page-conventions
 */
export const docs = defineDocs({
  dir: "content/docs",
  docs: {
    postprocess: {
      includeProcessedMarkdown: true,
    },
  },
});

export default defineConfig();
