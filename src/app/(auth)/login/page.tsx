import { AuthForm } from "@/features/auth/components/auth-form";
import { isSupabaseConfigured } from "@/lib/env";

export default async function LoginPage({
  searchParams,
}: {
  searchParams: Promise<{ next?: string; message?: string }>;
}) {
  const params = await searchParams;
  return (
    <AuthForm
      mode="login"
      next={params.next}
      message={params.message}
      configured={isSupabaseConfigured()}
    />
  );
}
