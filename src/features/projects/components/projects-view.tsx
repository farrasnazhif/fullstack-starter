"use client";

import { ArrowRight, Layers, CircleCheck, Zap } from "lucide-react";
import Link from "next/link";
import { useProjects } from "../hooks/use-projects";
import { CreateProject } from "./create-project";
import { ProjectCard } from "./project-card";
import { DataState } from "@/components/ui/data-state";
import { Button } from "@/components/ui/button";

export function ProjectsView({ dashboard = false }: { dashboard?: boolean }) {
  const query = useProjects();
  const projects = query.data ?? [];
  return (
    <>
      <div className="page-heading">
        <div>
          <p className="eyebrow">
            {dashboard ? "Your workspace" : "Build something great"}
          </p>
          <h1>{dashboard ? "Overview" : "Projects"}</h1>
          <p className="text-muted mt-2">
            {dashboard
              ? "A little less setup. A lot more building."
              : "Your ideas, in one place. Only you can access these projects."}
          </p>
        </div>
        <CreateProject />
      </div>
      {query.isPending ? (
        <DataState state="loading" />
      ) : query.isError ? (
        <DataState state="error" onRetry={() => void query.refetch()} />
      ) : (
        <>
          {dashboard && (
            <div className="grid gap-4 sm:grid-cols-3 mb-10">
              {[
                {
                  label: "Total projects",
                  value: projects.length,
                  Icon: Layers,
                },
                {
                  label: "In progress",
                  value: projects.filter((p) => p.status === "active").length,
                  Icon: Zap,
                },
                {
                  label: "Completed",
                  value: projects.filter((p) => p.status === "completed")
                    .length,
                  Icon: CircleCheck,
                },
              ].map(({ label, value, Icon }) => (
                <div className="stat-card" key={label}>
                  <div className="flex justify-between text-muted">
                    <span className="text-sm">{label}</span>
                    <Icon size={18} />
                  </div>
                  <p className="text-3xl font-semibold mt-4">{value}</p>
                </div>
              ))}
            </div>
          )}
          {dashboard && (
            <div className="flex items-center justify-between mb-5">
              <h2 className="text-lg font-semibold">Recent projects</h2>{" "}
              <Button
                variant="quiet"
                nativeButton={false}
                role="link"
                render={<Link href="/projects" />}
              >
                View all <ArrowRight size={15} />{" "}
              </Button>
            </div>
          )}
          {projects.length === 0 ? (
            <DataState state="empty" action={<CreateProject />} />
          ) : (
            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {(dashboard ? projects.slice(0, 6) : projects).map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          )}
        </>
      )}
    </>
  );
}
