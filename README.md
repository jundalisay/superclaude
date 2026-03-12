# Superphysics — Hugo Website

A multilingual science website built with Hugo and Tailwind CSS 4.2.1.

{{- $hasImage := and .Params.image (not .Params.icon) -}}


npx @tailwindcss/cli -i ./assets/css/main.css -o ./static/css/styles.css --watch

BUN_VERSION 1.3.3
HUGO_VERSION 0.145.0


<div class="card-reveal" style="animation-delay: {{ mul (mod $i 8) 10 }}ms">
        {{ partial "card.html" $page }}
      </div>

git remote add origin https://github.com/username/your-repo.git

      
## Tech Stack

- **Hugo** (static site generator)
- **Tailwind CSS 4.2.1** (via CDN for development, CLI for production)
- **Fonts**: Space Grotesk (display), Crimson Pro (body), Fira Code (monospace)
- **i18n**: 6 languages — English, 中文, Français, Español, العربية, हिन्दी

## Setup

### Prerequisites
- [Hugo Extended](https://gohugo.io/installation/) v0.120+
- Node.js 18+ (for Tailwind production builds)

### Install & Run

```bash
# Clone / download this project
cd superphysics

# Development (uses Tailwind CDN automatically)
hugo server --buildDrafts

# Production build
npm install
npm run build:css   # Builds optimized Tailwind CSS
hugo --minify
```

## Project Structure

```
superphysics/
├── hugo.toml              # Main config (baseURL, languages, params)
├── i18n/                  # Translation files (en, zh, fr, es, ar, hi)
├── layouts/
│   ├── _default/
│   │   ├── baseof.html    # Base template
│   │   ├── list.html      # Section/list pages
│   │   └── single.html    # Article pages
│   ├── index.html         # Homepage
│   └── partials/
│       ├── head.html      # <head> with meta, fonts, Tailwind
│       ├── navbar.html    # Navigation with dark mode, search, lang
│       ├── footer.html    # Site footer
│       ├── card.html      # Article card (3 types)
│       └── comments.html  # Basin.com comment form
├── assets/css/main.css    # Tailwind 4 input (for CLI builds)
├── static/
│   ├── css/custom.css     # Non-Tailwind overrides
│   ├── js/main.js         # Dark mode, search, animations, scroll
│   └── icons/             # Avatar images (e.g. "Heritage Foundation.jpg")
└── content/
    ├── en/                # English content (default)
    ├── zh/                # Chinese content
    ├── fr/                # French content
    ├── es/                # Spanish content
    ├── ar/                # Arabic content (RTL)
    └── hi/                # Hindi content
```

## Content Sections

Each folder is a nav submenu:
`research`, `superphysics`, `supermath`, `superlogic`, `material`, `bio`, `society`, `economics`, `cycles`, `spiritual`, `news`, `about`, `help`, `faqs`, `tags`

## Article Front Matter

```yaml
---
title: "Bureau Of Industry And Security"
date: 2024-11-01
description: "Article description shown in cards and meta"
image: /img/photo.jpg       # → image card type
v: /videos/clip.mp4         # → hero video on article page
c: "firebrick"              # → card background/accent color (CSS color or hex)
icon: "Heritage Foundation" # → avatar (loads /icons/Heritage Foundation.jpg)
heading: "Chapter 21e"      # → small label above title
weight: 12                  # → sort order in section
showdate: true              # → show date on avatar/plain cards
tags: ["policy", "science"]
---
```

### Card Types (auto-selected)

| Front Matter         | Card Type   | Appearance                                        |
|---------------------|-------------|---------------------------------------------------|
| `image:` is set     | Image card  | Full image background, title overlaid at bottom   |
| `icon:` is set      | Avatar card | Background color, avatar + title centered         |
| Neither             | Plain card  | Background color, heading + title centered        |

## Icons / Avatars

Place avatar images in `/static/icons/` as `{icon name}.jpg`\
Example: `icon: "Heritage Foundation"` → `/static/icons/Heritage Foundation.jpg`

If the image is missing, a colored circle with the first letter is shown.

## Dark / Light Mode

- Automatically detects system preference
- Persisted in `localStorage` as `sp-theme`
- Toggle button in navbar

## Search

- Searches article `title` and `description` fields
- Index generated as `/index.json` at build time
- Triggered by search button or `Ctrl/Cmd + K`

## Comments

Comments post to [usebasin.com](https://usebasin.com) via AJAX (no page reload).\
Configure the form endpoint in `hugo.toml`:
```toml
[params]
  commentAction = "https://usebasin.com/f/YOUR_FORM_ID"
```

## i18n

All UI strings are in `i18n/{lang}.yaml`. Hugo automatically loads the correct file based on the current language. To add content in a language, create matching files under `content/{lang}/`.

## RTL Support

Arabic (`ar`) has `languageDirection = "rtl"` set in hugo.toml. The `<html dir="rtl">` attribute is added automatically by the base template.

## Deployment

Built files go to `public/`. Deploy to any static host:
- Netlify: `hugo --minify` build command, `public` publish dir
- Vercel: Hugo framework preset
- GitHub Pages: use Hugo GitHub Action


<style type="text/tailwindcss">

