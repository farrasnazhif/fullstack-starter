export const projectKeys = {
  list: (userId: string) => ["projects", userId] as const,
  detail: (userId: string, id: string) => ["project", userId, id] as const,
};
