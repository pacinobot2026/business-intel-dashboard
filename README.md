# 🎯 Business Intelligence Dashboard

**Your unified command center for all business operations**

## Features

### 📊 Real-Time Metrics
- **Sales & Revenue**: MTD, yesterday, today, avg order value
- **Ad Performance**: Spend, sales, ROAS, profit, CAC
- **Support**: Open tickets, urgent items, DFY orders
- **Systems Health**: API status, URL uptime monitoring

### 🚀 Active Projects
- Integration with KANBAN.md
- Team task tracking
- Recent builds visibility
- Project status at a glance

### 💰 Product Catalog
- All active products with pricing
- Direct links to live pages
- Status tracking

### ⚡ Quick Actions
- One-click access to common shortcodes
- Fast navigation to key tools
- Streamlined workflow

## Installation

```bash
cd business-intel-dashboard
npm install
npm run dev
```

Visit http://localhost:3000

## Production Deployment

### Option 1: Vercel (Recommended)
```bash
npm install -g vercel
vercel --prod
```

### Option 2: Manual Build
```bash
npm run build
npm start
```

## API Endpoints

The dashboard pulls data from these internal APIs:

- `/api/sales` - Sales and revenue metrics
- `/api/ads` - Ad campaign performance
- `/api/systems` - System health checks
- `/api/support` - Support ticket stats
- `/api/projects` - Active projects from KANBAN.md
- `/api/products` - Product catalog

## Configuration

### Environment Variables

Create `.env.local`:

```env
WORKSPACE_PATH=/path/to/workspace
STRIPE_SECRET_KEY=sk_...
```

### Real Data Integration

To connect real data sources, update the API files in `pages/api/`:

1. **Sales**: Integrate with Stripe API
2. **Ads**: Connect to Facebook/Google Ads API
3. **Support**: Link to support ticket system
4. **Systems**: Already implemented (checks APIs/URLs)
5. **Projects**: Already reads from KANBAN.md
6. **Products**: Static list (update as needed)

## Auto-Refresh

Dashboard auto-refreshes every 5 minutes. Manual refresh available via button.

## Mobile Responsive

Fully responsive design works on desktop, tablet, and mobile.

## Tech Stack

- **Framework**: Next.js 14
- **Styling**: CSS-in-JS
- **Data**: REST APIs
- **Deployment**: Vercel

## Customization

### Adding New Metrics

1. Create new API route in `pages/api/`
2. Add fetch call in `pages/index.js` 
3. Create new card component
4. Add to grid layout

### Changing Colors

Update the color variables in the styles section of `pages/index.js`.

### Adding Quick Actions

Add new buttons in the Quick Actions card with onclick handlers.

## Maintenance

- Check API endpoints regularly
- Update product list when launching new products
- Monitor system health alerts
- Review KANBAN.md integration

---

**Built overnight by Pacino 🎬**  
*2026-02-27*
