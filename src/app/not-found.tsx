import Link from "next/link";
import { Button } from "@/components/ui/button";
export default function NotFound() {
  return (
    <main id="main-content" className="max-w-lg mx-auto px-6 py-24">
      <h1 className="text-2xl font-semibold">Page not found</h1>
      <Button
        variant="secondary"
        className="mt-6"
        nativeButton={false}
        role="link"
        render={<Link href="/" />}
      >
        Back home
      </Button>
    </main>
  );
}
