# Trip Travvy — Website

A tailor-made tour operator website for **Trip Travvy**, based in Vasai-Virar, Maharashtra. Static HTML/CSS/JS site, five pages, no build step required.

> **Design note:** `index.html` (the homepage) uses Tailwind CSS with a slate/amber palette and Playfair Display + Plus Jakarta Sans. The other four pages (`destinations.html`, `experiences.html`, `about.html`, `contact.html`) use a separate hand-written CSS design system with a navy/brass "tailoring" theme and Fraunces + Jost. This is a deliberate short-term tradeoff to ship the requested homepage quickly — the two look like different brands once a visitor clicks past the homepage. Recommend eventually restyling either the homepage to match the tailoring theme, or the four inner pages to match the Tailwind system, so the site reads as one brand. The previous tailoring-style homepage is preserved separately (not included in this deployable folder) if you'd like to revert.

## Structure

```
index.html          Home (Tailwind build, 5-slide destination carousel)
destinations.html   Full destination collection (with India / International filter)
experiences.html    "The Atelier" — the four-step tailoring process
about.html           About / team / values
contact.html         Consultation request form + contact details
styles.css           Shared design system for the four inner pages (colors, type, components)
script.js            Shared behavior for the four inner pages (nav, scroll reveal, header shrink)
favicon.svg           Brand monogram favicon (primary icon, modern browsers)
apple-touch-icon.png   180×180 PNG icon for iOS "Add to Home Screen"
icon-192.png            192×192 PNG icon for the web manifest
icon-512.png            512×512 PNG icon for the web manifest
site.webmanifest        Enables "Add to Home Screen" / basic PWA metadata
404.html                Custom not-found page
robots.txt               Search-engine crawl rules
sitemap.xml               Page list for search engines
.nojekyll                 Tells GitHub Pages to skip Jekyll processing
.editorconfig              Consistent indentation/line-endings across editors
LICENSE                     Proprietary copyright notice
.github/workflows/deploy.yml   Optional Actions-based deploy (see below)
```

Note: `index.html` is self-contained (Tailwind CDN + its own inline `<style>`/`<script>`) and does not load `styles.css` or `script.js` — those only serve the other four pages.

## Navigation map

- Header/footer on `index.html` link **Destinations → destinations.html**, **The Atelier → experiences.html**, **About → about.html**, **Contact → contact.html**. "Journal" and "FAQs" stay as in-page anchors since there's no standalone page for them yet.
- All "talk to us" CTAs (top bar, header button, hero, "Ask Us") route to `contact.html`, which holds the one full contact form and studio details. The homepage's own consultation section was condensed to a single CTA button instead of a second, duplicate form.
- The four inner pages' own header nav already link back to `index.html` for Home — unchanged.

## Before you go live — replace these placeholders

- **Domain**: `https://www.triptravvy.in` is used as a placeholder in the canonical tags, Open Graph tags, and `sitemap.xml`/`robots.txt`. Find-and-replace it with your real domain once you have one.
- **Phone / email / address**: currently placeholder values (`+91 98765 43210`, `hello@triptravvy.in`, a placeholder Vasai-Virar address) in every page footer and on the contact page.
- **Images**: destination and team photos are pulled from Unsplash by URL as stand-ins. Swap in your own photography before launch.
- **Social share image**: `og:image` / `twitter:image` currently reuse a stock photo. Replace with a proper 1200×630 branded share image for better link previews on WhatsApp, Facebook, etc.
- **Contact form**: the consultation form on `contact.html` is front-end only right now — it shows a success message but doesn't send anywhere. Wire it to a form backend (e.g. Formspree, Google Forms, or your own endpoint) before relying on it.

## Deploying to GitHub Pages

You have two options — pick one:

**Option A — Deploy from a branch (simplest, recommended for this static site)**
1. Create a new GitHub repository and push all files in this folder to the `main` branch (root of the repo — not inside a subfolder).
2. In the repo, go to **Settings → Pages**.
3. Under **Build and deployment**, set **Source** to `Deploy from a branch`, branch `main`, folder `/ (root)`.
4. Save. GitHub will publish the site at `https://<your-username>.github.io/<repo-name>/` within a minute or two.
5. You can delete `.github/workflows/deploy.yml` if you're using this option — it's not needed.

**Option B — GitHub Actions (use if you later add a build step, e.g. compiling Tailwind instead of the CDN build)**
1. Push the repo as above, including `.github/workflows/deploy.yml`.
2. In **Settings → Pages**, set **Source** to `GitHub Actions`.
3. Every push to `main` will now deploy automatically via the included workflow.

**Optional custom domain** (either option): if you own a domain, add a `CNAME` file at the repo root containing just your domain (e.g. `www.triptravvy.in`), then point your domain's DNS to GitHub Pages per [GitHub's custom domain docs](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site). Update the placeholder domain in the meta tags and `sitemap.xml`/`robots.txt` to match.

## Local preview

No build tools needed — just open `index.html` in a browser, or serve the folder locally:

```
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.
