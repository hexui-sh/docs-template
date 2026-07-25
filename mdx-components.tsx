import type { MDXComponents } from "mdx/types";
import type { ComponentProps } from "react";
import defaultMdxComponents from "fumadocs-ui/mdx";
import { Accordion, Accordions } from "fumadocs-ui/components/accordion";
import { Callout } from "fumadocs-ui/components/callout";
import { Card, Cards } from "fumadocs-ui/components/card";
import { File, Files, Folder } from "fumadocs-ui/components/files";
import { Step, Steps } from "fumadocs-ui/components/steps";
import { Tab, Tabs } from "fumadocs-ui/components/tabs";
import { TypeTable } from "fumadocs-ui/components/type-table";
import { CustomCodeBlock } from "@/components/code-block";
import { cn } from "@/lib/utils";

const FumadocsCodeBlockTabs = defaultMdxComponents.CodeBlockTabs;

function TypesetExcludedCodeBlock({
  className,
  ...props
}: ComponentProps<"pre">) {
  return (
    <CustomCodeBlock
      {...props}
      className={cn("not-typeset mdx-code-block", className)}
    />
  );
}

function BackgroundCodeBlockTabs({
  className,
  ...props
}: ComponentProps<typeof FumadocsCodeBlockTabs>) {
  return (
    <FumadocsCodeBlockTabs
      {...props}
      className={cn("mdx-code-tabs", className)}
    />
  );
}

function TypesetExcludedCallout({
  className,
  ...props
}: ComponentProps<typeof Callout>) {
  return (
    <Callout
      {...props}
      className={cn("not-typeset mdx-callout", className)}
    />
  );
}

function TypesetExcludedCard({
  className,
  ...props
}: ComponentProps<typeof Card>) {
  return (
    <Card {...props} className={cn("not-typeset mdx-card", className)} />
  );
}

function TypesetExcludedCards({
  className,
  ...props
}: ComponentProps<typeof Cards>) {
  return (
    <Cards {...props} className={cn("not-typeset mdx-cards mt-4", className)} />
  );
}

function BackgroundAccordions({
  className,
  ...props
}: ComponentProps<typeof Accordions>) {
  return (
    <Accordions {...props} className={cn("mdx-accordions", className)} />
  );
}

function BackgroundFiles({
  className,
  ...props
}: ComponentProps<typeof Files>) {
  return <Files {...props} className={cn("mdx-files", className)} />;
}

function BackgroundFile({
  className,
  ...props
}: ComponentProps<typeof File>) {
  return <File {...props} className={cn("mdx-file", className)} />;
}

function BackgroundFolder({
  className,
  ...props
}: ComponentProps<typeof Folder>) {
  return <Folder {...props} className={cn("mdx-folder", className)} />;
}

function BackgroundTabs({
  className,
  ...props
}: ComponentProps<typeof Tabs>) {
  return <Tabs {...props} className={cn("mdx-tabs", className)} />;
}

function TypesetExcludedTypeTable({
  className,
  ...props
}: ComponentProps<typeof TypeTable>) {
  return (
    <TypeTable
      {...props}
      className={cn("not-typeset mdx-type-table", className)}
    />
  );
}

function BackgroundTable({
  className,
  ...props
}: ComponentProps<"table">) {
  return (
    <div className="mdx-table-wrap">
      <table {...props} className={cn("mdx-table", className)} />
    </div>
  );
}

/**
 * MDX components available in every documentation page.
 *
 * `defaultMdxComponents` already includes code blocks (with copy
 * button), headings, tables, images, etc. Extend the map below to
 * make more components available in your MDX content.
 */
export function getMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    ...defaultMdxComponents,
    pre: TypesetExcludedCodeBlock,
    table: BackgroundTable,
    CodeBlockTabs: BackgroundCodeBlockTabs,
    Accordion,
    Accordions: BackgroundAccordions,
    Callout: TypesetExcludedCallout,
    Card: TypesetExcludedCard,
    Cards: TypesetExcludedCards,
    File: BackgroundFile,
    Files: BackgroundFiles,
    Folder: BackgroundFolder,
    Step,
    Steps,
    Tab,
    Tabs: BackgroundTabs,
    TypeTable: TypesetExcludedTypeTable,
    ...components,
  };
}
