"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  docsCollections,
  getDocsCollection,
} from "@/lib/docs-collections";
import { cn } from "@/lib/utils";

export function DocsCategoryNav({ className }: { className?: string }) {
  const pathname = usePathname();
  const activeCollection = getDocsCollection(pathname);
  const activeRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    activeRef.current?.scrollIntoView({ block: "nearest", inline: "nearest" });
  }, [pathname]);

  return (
    <nav
      aria-label="Documentation collections"
      className={cn(
        "no-scrollbar flex h-11 items-stretch gap-6 overflow-x-auto px-4 md:px-6",
        className,
      )}
    >
      {docsCollections.map((collection) => {
        const isActive = activeCollection?.id === collection.id;
        const Icon = collection.icon;

        return (
          <Link
            key={collection.id}
            ref={isActive ? activeRef : undefined}
            href={collection.defaultPath}
            aria-current={isActive ? "page" : undefined}
            title={collection.description}
            className={cn(
              "relative z-10 inline-flex shrink-0 items-center gap-2 border-b-2 text-sm font-medium text-nowrap transition-colors",
              "outline-none focus-visible:ring-2 focus-visible:ring-fd-ring",
              isActive
                ? "border-fd-primary text-fd-primary"
                : "border-transparent text-fd-muted-foreground hover:text-fd-foreground",
            )}
          >
            <Icon className="size-4" aria-hidden="true" />
            {collection.title}
          </Link>
        );
      })}
    </nav>
  );
}
