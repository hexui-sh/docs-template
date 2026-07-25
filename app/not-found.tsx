import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Page not found",
};

export default function NotFound() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center gap-5 [grid-area:main] px-6 py-24 text-center">
      <h1 className="text-5xl font-bold tracking-tight">
        404
      </h1>
      <h2 className="text-3xl font-semibold tracking-tight">
        Page not found
      </h2>
      <p className="max-w-md text-fd-muted-foreground">
        The page you are looking for doesn&apos;t exist or may have been
        moved. Try searching the documentation or head back to a safe place.
      </p>
      <Button render={<Link href="/" />} className="mt-4 rounded-full">
        Back to home
      </Button>
    </main>
  );
}
