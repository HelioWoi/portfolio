create table if not exists public.cadastro (
  id bigint generated always as identity primary key,
  name text not null,
  email text not null,
  message text not null,
  created_at timestamptz not null default now()
);

alter table public.cadastro enable row level security;

create policy "Allow anonymous inserts on cadastro"
on public.cadastro
for insert
to anon
with check (true);
