create table public.projects (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null default auth.uid() references auth.users(id) on delete cascade,
  name text not null check (name = btrim(name) and name !~ '^[[:space:]]|[[:space:]]$' and char_length(name) between 1 and 100),
  description text not null default '' check (char_length(description) <= 2000),
  status text not null default 'draft' check (status in ('draft', 'active', 'completed')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index projects_owner_updated_idx on public.projects (user_id, updated_at desc);

create function public.maintain_project_fields() returns trigger
language plpgsql set search_path = '' as $$
begin
  if tg_op = 'UPDATE' then
    if new.user_id is distinct from old.user_id then
      raise exception 'Project ownership cannot change';
    end if;
    new.id := old.id;
    new.created_at := old.created_at;
  else
    new.created_at := now();
  end if;
  new.updated_at := now();
  return new;
end;
$$;

create trigger projects_maintain_fields before insert or update on public.projects
for each row execute function public.maintain_project_fields();

alter table public.projects enable row level security;
revoke all on public.projects from anon, authenticated;
grant select, insert, update, delete on public.projects to authenticated;

create policy "Owners read projects" on public.projects for select to authenticated
using ((select auth.uid()) = user_id);
create policy "Owners create projects" on public.projects for insert to authenticated
with check ((select auth.uid()) = user_id);
create policy "Owners update projects" on public.projects for update to authenticated
using ((select auth.uid()) = user_id) with check ((select auth.uid()) = user_id);
create policy "Owners delete projects" on public.projects for delete to authenticated
using ((select auth.uid()) = user_id);
