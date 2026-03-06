# vadislab

Personal website and platform engineering blog at [vadislab.com](https://vadislab.com).

Built with Next.js 16, Tailwind CSS, and MDX. Retro amber terminal aesthetic.

## Getting Started

```bash
npm install
npm run dev       # http://localhost:3000
```

## Adding a Blog Post

Create a `.mdx` file in `content/`:

```
---
title: "Your Post Title"
date: "2026-03-06"
description: "Optional subtitle shown on the listing page"
---

Your content here. Supports standard Markdown plus JSX components.
```

The post appears on `/blog` automatically, sorted by date descending. Quote the date string to prevent YAML from parsing it as a `Date` object.

## Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server on port 3000 |
| `npm run build` | Production build |
| `npm run lint` | Run ESLint |
| `npm run lint:fix` | Auto-fix lint errors |

## Stack

- **Next.js 16** — App router, server components
- **next-mdx-remote** — MDX rendering via `compileMDX` (RSC)
- **Tailwind CSS** — Utility styling, `darkMode: 'class'`
- **TypeScript**
