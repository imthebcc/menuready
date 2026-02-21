-- Create leads table for email capture
create table leads (
  id uuid default gen_random_uuid() primary key,
  email text not null,
  slug text not null,
  claimed_at timestamp default now()
);

-- Create index for faster lookups
create index idx_leads_email on leads(email);
create index idx_leads_slug on leads(slug);
