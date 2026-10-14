import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  return (
    <main
      id="main-content"
      className="min-h-dvh flex items-center justify-center p-6"
    >
      <Button
        variant="primary"
        nativeButton={false}
        role="link"
        render={<Link href="/sandbox" />}
      >
        Open sandbox
      </Button>
    </main>
  );
}
