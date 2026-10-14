import { Suspense } from "react";
import { ProjectDetail } from "@/features/projects/components/project-detail";
import { DataState } from "@/components/ui/data-state";

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return (
    <Suspense fallback={<DataState state="loading" />}>
      <ProjectDetail id={id} />
    </Suspense>
  );
}
