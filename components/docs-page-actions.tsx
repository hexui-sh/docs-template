import { MarkdownCopyButton } from "fumadocs-ui/layouts/notebook/page";
import { DocsViewOptionsPopover } from "@/components/docs-view-options-popover";

export function DocsPageActions({
  markdownUrl,
  githubUrl,
}: {
  /** URL to fetch the raw Markdown/MDX content of the page. */
  markdownUrl: string;
  /** Source file URL on GitHub. */
  githubUrl?: string;
}) {
  return (
    <div className="inline-flex items-stretch">
      <MarkdownCopyButton
        markdownUrl={markdownUrl}
        className="rounded-r-none! border-0"
      />
      <DocsViewOptionsPopover
        markdownUrl={markdownUrl}
        githubUrl={githubUrl}
        aria-label="Select a provider"
        className="rounded-l-none! border-y-0 border-r-0 border-l px-2"
      >
        {false}
      </DocsViewOptionsPopover>
    </div>
  );
}
