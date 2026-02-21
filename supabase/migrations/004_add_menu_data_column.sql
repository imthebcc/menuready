-- Add menu data storage to restaurants table
alter table restaurants 
  add column if not exists menu_data jsonb;

-- Create index for faster menu queries
create index if not exists idx_restaurants_menu_data on restaurants using gin(menu_data);

-- Example structure:
-- menu_data = {
--   "categories": [
--     {
--       "name": "Breakfast",
--       "items": [
--         { "name": "Item", "price": "6.00", "description": "..." }
--       ]
--     }
--   ]
-- }
