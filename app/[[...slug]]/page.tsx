import type { Metadata } from "next";
import { notFound, redirect } from "next/navigation";
import {
  DocsDescription,
  DocsPage,
  DocsTitle,
} from "fumadocs-ui/layouts/notebook/page";
import { getPageMarkdownUrl, source } from "@/lib/source";
import { getMDXComponents } from "@/mdx-components";
import { gitConfig } from "@/lib/shared";
import { getDocsRedirect } from "@/lib/docs-collections";
import { DocsPageActions } from "@/components/docs-page-actions";
import { Footer } from "@/components/docs-footer";

export default async function Page({
  params,
}: {
  params: Promise<{ slug?: string[] }>;
}) {
  const { slug } = await params;
  const redirectPath = getDocsRedirect(slug);
  if (redirectPath) redirect(redirectPath);

  const page = source.getPage(slug);
  if (!page) notFound();

  const MDX = page.data.body;
  const markdownUrl = getPageMarkdownUrl(page).url;

  return (
    <DocsPage
      toc={page.data.toc}
      className="p-4 md:p-4 xl:p-4 mt-2"
      tableOfContent={{ container: { className: "p-4" } }}
      tableOfContentPopover={{ enabled: false }}
      slots={{ footer: Footer }}
    >
      <div className="flex w-full flex-row items-start justify-between gap-2">
        <div className="flex flex-col gap-2">
          <DocsTitle>{page.data.title}</DocsTitle>
          <DocsDescription className="text-base">
            {page.data.description}
          </DocsDescription>
        </div>
        <div className="hidden xl:block mt-2">
          <DocsPageActions
            markdownUrl={markdownUrl}
            githubUrl={`https://github.com/${gitConfig.user}/${gitConfig.repo}/blob/${gitConfig.branch}/content/docs/${page.path}`}
          />
        </div>
      </div>
      <div className="typeset typeset-docs mdx-content flex-1">
        <MDX components={getMDXComponents()} />
      </div>
    </DocsPage>
  );
}

export function generateStaticParams() {
  return source.generateParams();
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug?: string[] }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const redirectPath = getDocsRedirect(slug);
  if (redirectPath) redirect(redirectPath);

  const page = source.getPage(slug);
  if (!page) notFound();

  return {
    title: page.data.title,
    description: page.data.description,
    openGraph: {
      title: page.data.title,
      description: page.data.description,
      type: "article",
    },
  };
}
