# Leads Table Setup

## Create Table in Supabase

Run this SQL in your Supabase SQL Editor:

```sql
-- Create leads table for email capture
create table leads (
  id uuid default gen_random_uuid() primary key,
  email text not null,
  slug text not null,
  claimed_at timestamp default now()
);

-- Create indexes for faster lookups
create index idx_leads_email on leads(email);
create index idx_leads_slug on leads(slug);
```

## Verify Table Exists

```sql
SELECT * FROM leads LIMIT 1;
```

## Check Captured Leads

```sql
SELECT email, slug, claimed_at 
FROM leads 
ORDER BY claimed_at DESC;
```

## Environment Variables Required

Make sure these are set in Vercel:

```
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

## Demo Mode

If Supabase env vars are missing, the API will log to console instead of saving to database.
