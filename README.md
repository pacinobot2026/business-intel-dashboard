# 🎯 Nicely Control

**Your unified command center for all business operations**

Live at: **https://nicelycontrol.com**

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
cd nicelycontrol
npm install
npm run dev
```

Visit http://localhost:3000

## Production Deployment

### Vercel
```bash
npm install -g vercel
vercel --prod
```

### Manual Build
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

## Navigation

All boards accessible via left sidebar:
- ⚡ Command Center (home)
- ⌘ Custom Commands (/commands)
- ◉ Business Board
- ▦ Team Board
- □ Operator Vault
- ▶ Project Board
- ◈ Article Board
- ☆ Idea Board
- ⊞ Video Cue
- ⊡ Wish List
- ▣ Resource Library

## Auto-Refresh

Dashboard auto-refreshes every 5 minutes. Manual refresh available via button.

## Tech Stack

- **Framework**: Next.js 14
- **Styling**: CSS-in-JS (inline styles)
- **Data**: REST APIs
- **Deployment**: Vercel → nicelycontrol.com

## Domain Setup

Point your domain to Vercel:
1. Add `nicelycontrol.com` in Vercel project settings
2. Configure DNS with nameservers or A/CNAME records
3. SSL auto-provisions

---

**Built by Pacino 🎬**  
*Rebranded 2026-03-01*
