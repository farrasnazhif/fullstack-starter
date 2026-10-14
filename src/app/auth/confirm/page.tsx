import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ResendConfirmation } from "@/features/auth/components/resend-confirmation";
import { isSupabaseConfigured } from "@/lib/env";

export default function ConfirmPage() {
  return (
    <main id="main-content" className="max-w-lg mx-auto px-6 py-24">
      {" "}
      <Button
        variant="quiet"
        nativeButton={false}
        role="link"
        render={<Link href="/login" />}
      >
        ← Back to sign in
      </Button>
      <h1 className="text-3xl font-semibold mt-8 mb-3">Confirm your email</h1>
      <p className="text-sm text-muted mb-8">
        Expired link? We’ll send you a new one.
      </p>
      <ResendConfirmation configured={isSupabaseConfigured()} />
    </main>
  );
}
