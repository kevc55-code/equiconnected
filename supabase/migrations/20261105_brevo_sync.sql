-- Brevo sync (see supabase/functions/brevo-sync/index.ts and README "Newsletter").
-- Applied to project ubehfckmknwexwsciexx; kept here so the setup can be rebuilt.

create extension if not exists pg_net;
create extension if not exists pg_cron;

-- Which subscribers have been copied to Brevo yet.
alter table public.newsletter_subscribers
  add column if not exists brevo_synced_at timestamptz;

-- Tiny bookkeeping table (when Brevo was last asked about unsubscribes).
-- RLS on with no policy = invisible to the public API; only the function
-- (service role) can read or write it.
create table if not exists public.newsletter_sync_state (
  key text primary key,
  at  timestamptz not null
);
alter table public.newsletter_sync_state enable row level security;

-- Right after someone subscribes, nudge the function. Asynchronous (pg_net) and
-- wrapped so a failure here can never block a signup; the hourly job below is
-- the safety net.
create or replace function public.notify_brevo_sync()
returns trigger
language plpgsql
security definer
set search_path = ''
as $$
begin
  begin
    perform net.http_post(
      url     := 'https://ubehfckmknwexwsciexx.supabase.co/functions/v1/brevo-sync',
      headers := '{"Content-Type":"application/json"}'::jsonb,
      body    := '{}'::jsonb
    );
  exception when others then
    null;
  end;
  return new;
end;
$$;
revoke all on function public.notify_brevo_sync() from public, anon, authenticated;

drop trigger if exists newsletter_subscribers_brevo_sync on public.newsletter_subscribers;
create trigger newsletter_subscribers_brevo_sync
  after insert on public.newsletter_subscribers
  for each row execute function public.notify_brevo_sync();

-- Hourly: retry anything that failed, and pull unsubscribes from Brevo.
select cron.schedule(
  'brevo-sync-hourly',
  '17 * * * *',
  $$select net.http_post(
      url     := 'https://ubehfckmknwexwsciexx.supabase.co/functions/v1/brevo-sync',
      headers := '{"Content-Type":"application/json"}'::jsonb,
      body    := '{}'::jsonb
    )$$
);
