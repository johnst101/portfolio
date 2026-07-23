# Tyler Johnson — Portfolio Site

A static site (plain HTML/CSS/JS, no build step) built around the "assembly line"
concept. my career and side projects framed like a systems/parts diagram.

## Files
- `index.html` - page structure and content
- `styles.css` - design tokens (colors/type/layout) and styling
- `script.js` - powers the interactive "Assembly Line" career diagram
- `assets/Tyler_Johnson_Resume.pdf` - placeholder resume, **TODO: replace with my final version before you publish this live**

## Editing content
- Career timeline: edit the `stations` array at the top of `script.js` — everything renders from that data, so you don't need to touch HTML to update it.
- Projects: edit the `<article class="project-card">` blocks in `index.html`.
- Colors/fonts: all defined as CSS variables at the top of `styles.css` under `:root`.

## Before I make it public
- [ ] Swap in my finished resume PDF (keep the same filename or update the two links in `index.html`)
- [ ] Double check all GitHub/LinkedIn links
- [ ] Test on mobile width (it's responsive, but give it a real look)
