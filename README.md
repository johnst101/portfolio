# Tyler Johnson — Portfolio Site

A static site (plain HTML/CSS/JS, no build step) built around the "assembly line"
concept — your career and side projects framed like a systems/parts diagram.

## Files
- `index.html` — page structure and content
- `styles.css` — design tokens (colors/type/layout) and styling
- `script.js` — powers the interactive "Assembly Line" career diagram
- `assets/Tyler_Johnson_Resume.pdf` — placeholder resume, **replace with your final version before you publish this live**

## Editing content
- Career timeline: edit the `stations` array at the top of `script.js` — everything renders from that data, so you don't need to touch HTML to update it.
- Projects: edit the `<article class="project-card">` blocks in `index.html`.
- Colors/fonts: all defined as CSS variables at the top of `styles.css` under `:root`.

## Deploying (pick one, all are free)

### Option A — GitHub Pages (easiest, ties to your existing GitHub)
1. Create a new repo, e.g. `tylerjohnson.dev` or `portfolio`.
2. Push these files to the repo root (`main` branch).
3. In the repo: Settings → Pages → Source → `main` branch, `/root`.
4. Your site will be live at `https://johnst101.github.io/<repo-name>/` within a few minutes.
5. Optional: buy a domain (e.g. via Namecheap/Google Domains) and point it at GitHub Pages via a custom domain in the same settings page.

### Option B — Vercel or Netlify (slightly more polished workflow)
1. Push the repo to GitHub as above.
2. Sign into vercel.com or netlify.com with GitHub, import the repo.
3. No build command needed — it's a static site. Deploy.
4. Both give you a free subdomain instantly and easy custom-domain support.

## Before you make it public
- [ ] Swap in your finished resume PDF (keep the same filename or update the two links in `index.html`)
- [ ] Double check all GitHub/LinkedIn links
- [ ] Test on mobile width (it's responsive, but give it a real look)
- [ ] Consider adding a favicon (`<link rel="icon">` in `index.html`)
