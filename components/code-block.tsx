"use client";

import { useRef, type ReactNode, type RefObject } from "react";
import { Check, Copy } from "lucide-react";
import {
  CodeBlock,
  Pre,
  type CodeBlockProps,
} from "fumadocs-ui/components/codeblock";
import { useCopyButton } from "fumadocs-ui/utils/use-copy-button";
import { cn } from "@/lib/utils";

type CustomCodeBlockProps = Omit<
  CodeBlockProps,
  "Actions" | "children" | "ref"
> & {
  children?: ReactNode;
};

function CodeCopyButton({
  containerRef,
}: {
  containerRef: RefObject<HTMLElement | null>;
}) {
  const [copied, onCopy] = useCopyButton(() => {
    const pre = containerRef.current
      ?.getElementsByTagName("pre")
      .item(0);

    if (!pre) return;

    const clone = pre.cloneNode(true) as HTMLElement;
    clone.querySelectorAll(".nd-copy-ignore").forEach((node) => {
      node.replaceWith("\n");
    });

    return navigator.clipboard.writeText(clone.textContent ?? "");
  });

  return (
    <button
      type="button"
      data-copied={copied}
      className={cn(
        "mdx-code-copy-button inline-flex h-7 items-center gap-1.5 rounded-md px-2",
        "text-xs font-medium text-fd-muted-foreground transition-colors",
        "hover:text-fd-accent-foreground",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fd-ring",
      )}
      aria-label={copied ? "Code copied" : "Copy code"}
      onClick={onCopy}
    >
      {copied ? (
        <Check aria-hidden="true" className="size-3.5" />
      ) : (
        <Copy aria-hidden="true" className="size-3.5" />
      )}
    </button>
  );
}

/**
 * Fumadocs code block with a project-owned copy action.
 *
 * The surrounding CodeBlock and Pre components remain upstream components,
 * so syntax highlighting, code tabs, titles, and line numbers keep working.
 */
export function CustomCodeBlock({
  allowCopy = true,
  children,
  ...props
}: CustomCodeBlockProps) {
  const containerRef = useRef<HTMLElement>(null);
  const canCopy = allowCopy !== false && allowCopy !== "false";

  return (
    <CodeBlock
      ref={containerRef}
      {...props}
      allowCopy={false}
      Actions={({ className }) =>
        canCopy ? (
          <div className={className}>
            <CodeCopyButton containerRef={containerRef} />
          </div>
        ) : null
      }
    >
      <Pre>{children}</Pre>
    </CodeBlock>
  );
}
