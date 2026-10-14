"use client";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useAuth } from "@/providers/auth-provider";
import * as api from "../api/projects";
import { projectKeys } from "../constants/query-keys";
import type { ProjectInput } from "../validations/project";

export function useProjects() {
  const user = useAuth();
  return useQuery({
    queryKey: projectKeys.list(user?.id ?? ""),
    queryFn: api.getProjects,
    enabled: !!user,
  });
}

export function useProject(id: string) {
  const user = useAuth();
  return useQuery({
    queryKey: projectKeys.detail(user?.id ?? "", id),
    queryFn: () => api.getProject(id),
    enabled: !!user && !!id,
    retry: false,
  });
}

export function useProjectMutations() {
  const user = useAuth();
  const client = useQueryClient();
  const userId = user?.id ?? "";
  const refresh = () =>
    client.invalidateQueries({ queryKey: projectKeys.list(userId) });
  const create = useMutation({
    mutationFn: api.createProject,
    onSuccess: refresh,
  });
  const update = useMutation({
    mutationFn: ({ id, input }: { id: string; input: ProjectInput }) =>
      api.updateProject(id, input),
    onSuccess: async (project) => {
      await Promise.all([
        refresh(),
        client.invalidateQueries({
          queryKey: projectKeys.detail(userId, project.id),
        }),
      ]);
    },
  });
  const remove = useMutation({
    mutationFn: api.deleteProject,
    onSuccess: async (id) => {
      client.removeQueries({ queryKey: projectKeys.detail(userId, id) });
      await refresh();
    },
  });
  return { create, update, remove };
}
