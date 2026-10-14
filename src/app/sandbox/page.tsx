import { Sandbox } from "@/features/sandbox/components/sandbox";
import { getSandboxComponentId } from "@/features/sandbox/validations/component";

export const metadata = { title: "UI sandbox" };

export default async function SandboxPage({
  searchParams,
}: {
  searchParams: Promise<{ component?: string | string[] }>;
}) {
  const { component } = await searchParams;
  const initialComponent = getSandboxComponentId(component);
  return <Sandbox key={initialComponent} initialComponent={initialComponent} />;
}
