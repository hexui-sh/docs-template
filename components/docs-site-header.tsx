"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { PanelLeft } from "lucide-react";
import {
  FullSearchTrigger,
  SearchTrigger,
} from "fumadocs-ui/layouts/shared/slots/search-trigger";
import { ThemeSwitch } from "fumadocs-ui/layouts/shared/slots/theme-switch";
import { useNotebookLayout } from "fumadocs-ui/layouts/notebook";
import { buttonVariants } from "fumadocs-ui/components/ui/button";
import { DocsCategoryNav } from "./docs-category-nav";
import { siteConfig } from "@/lib/site-config";

export function DocsSiteHeader() {
  const { slots } = useNotebookLayout();
  const SidebarTrigger = slots.sidebar?.trigger;

  return (
    <header className="sticky top-(--fd-docs-row-1) z-30 bg-background [grid-area:header] after:pointer-events-none after:absolute after:bottom-0 after:left-1/2 after:w-screen after:-translate-x-1/2 after:border-b after:content-[''] layout:[--fd-header-height:--spacing(28)]">
      <div className="flex h-14 items-center gap-2 px-4 md:px-6">
        {SidebarTrigger ? (
          <SidebarTrigger
            aria-label="Toggle navigation menu"
            className={cn(
              buttonVariants({ color: "ghost", size: "icon-sm" }),
              "-ms-1.5 p-2 md:hidden",
            )}
          >
            <PanelLeft aria-hidden="true" />
          </SidebarTrigger>
        ) : null}
        <Link href="/">
          <p className="text-xl font-medium">{siteConfig.name}</p>
        </Link>
        <div className="flex flex-1 justify-center px-2 max-md:hidden">
          <FullSearchTrigger
            hideIfDisabled
            className="w-full max-w-sm rounded-full border bg-transparent px-3 [&_kbd]:rounded-full"
          />
        </div>
        <div className="ms-auto flex items-center gap-1.5">
          <SearchTrigger hideIfDisabled className="p-2 md:hidden" />
          <ThemeSwitch mode="light-dark-system" />
        </div>
      </div>
      <DocsCategoryNav />
    </header>
  );
}
