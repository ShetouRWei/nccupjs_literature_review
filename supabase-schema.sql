create table public.reading_notes (
  user_id uuid not null references auth.users(id) on delete cascade,
  book_id text not null,
  chapter_id integer not null check (chapter_id > 0),
  note text not null default '',
  updated_at timestamptz not null default now(),
  primary key (user_id, book_id, chapter_id)
);

alter table public.reading_notes enable row level security;

revoke all on table public.reading_notes from anon;
grant select, insert, update, delete on table public.reading_notes to authenticated;

create policy "Users can read their own notes"
on public.reading_notes for select
to authenticated
using ((select auth.uid()) = user_id);

create policy "Users can create their own notes"
on public.reading_notes for insert
to authenticated
with check ((select auth.uid()) = user_id);

create policy "Users can update their own notes"
on public.reading_notes for update
to authenticated
using ((select auth.uid()) = user_id)
with check ((select auth.uid()) = user_id);

create policy "Users can delete their own notes"
on public.reading_notes for delete
to authenticated
using ((select auth.uid()) = user_id);
