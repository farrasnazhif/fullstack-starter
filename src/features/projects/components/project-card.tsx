"use client";

import Link from "next/link";
import { ArrowUpRight, Folder } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import type { Project } from "../types/project";

export function ProjectCard({
  project,
  onOpen,
}: {
  project: Project;
  onOpen?: () => void;
}) {
  const content = (
    <>
      <div className="flex items-start justify-between">
        <span className="project-icon">
          <Folder size={20} />
        </span>
        <Badge status={project.status} />
      </div>
      <h3 className="font-semibold text-lg mt-5 break-words">{project.name}</h3>
      <p className="text-sm text-muted mt-2 line-clamp-2 min-h-10 break-words">
        {project.description ||
          "No description yet. Every great project starts with an idea."}
      </p>
      <div className="flex items-center justify-between mt-6 pt-4 border-t border-line text-xs text-muted">
        <span>
          Updated {new Date(project.updated_at).toISOString().slice(0, 10)}
        </span>
        <ArrowUpRight size={17} />
      </div>
    </>
  );
  return onOpen ? (
    <button type="button" className="project-card text-left" onClick={onOpen}>
      {content}
    </button>
  ) : (
    <Link className="project-card" href={`/projects/${project.id}`}>
      {content}
    </Link>
  );
}
