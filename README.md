# MenuReady Template

Beautiful, mobile-first digital menu template for restaurants.

## Quick Start

1. **Update menu data**: Edit `public/menu-data.json`
2. **Test locally**: `npm run dev`
3. **Deploy to Netlify**: Connect repo and deploy

## Customization

### Menu Data Structure

```json
{
  "restaurant": {
    "name": "Your Restaurant Name",
    "tagline": "Your tagline",
    "logo": "url-to-logo (optional)",
    "colors": {
      "primary": "#D97706",
      "background": "#FFFBEB"
    },
    "reviewUrl": "https://g.page/r/your-google-review-link"
  },
  "menu": {
    "sections": [
      {
        "name": "Section Name",
        "items": [
          {
            "name": "Item Name",
            "description": "Item description",
            "price": "$0.00",
            "tags": ["vegan", "gf", "vegetarian"]
          }
        ]
      }
    ]
  }
}
```

### Colors

Update the `colors` object in `menu-data.json`:
- `primary`: Main accent color (prices, headings)
- `background`: Page background color

## Features

- ✅ Mobile-first, responsive design
- ✅ Fast loading (<2s)
- ✅ Dietary tags (vegan, GF, etc.)
- ✅ QR code for reviews
- ✅ Clean, restaurant-friendly design
- ✅ Zero JavaScript on frontend (static)

## Deployment

### Netlify (Recommended)

1. Push to GitHub
2. Connect repo to Netlify
3. Deploy automatically

### Manual Deploy

```bash
npm run build
# Upload .next folder to hosting
```

## Tech Stack

- Next.js 15 (App Router)
- Tailwind CSS v4
- TypeScript
- QR Code generation (server-side)
