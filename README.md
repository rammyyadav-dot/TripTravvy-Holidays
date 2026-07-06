# Trip Travvy — Website

A tailor-made tour operator website for **Trip Travvy**, based in Vasai-Virar, Maharashtra. Static HTML/CSS/JS site, five pages, no build step required.

## Structure

```
index.html          Home
destinations.html   Full destination collection (with India / International filter)
experiences.html    "The Atelier" — the four-step tailoring process
about.html           About / team / values
contact.html         Consultation request form + contact details
styles.css           Shared design system (colors, type, components)
script.js            Shared behavior (nav, scroll reveal, header shrink)
favicon.svg           Brand monogram favicon
404.html              Custom not-found page
robots.txt             Search-engine crawl rules
sitemap.xml             Page list for search engines
.nojekyll               Tells GitHub Pages to skip Jekyll processing
```

## Before you go live — replace these placeholders

- **Domain**: `https://www.triptravvy.in` is used as a placeholder in the canonical tags, Open Graph tags, and `sitemap.xml`/`robots.txt`. Find-and-replace it with your real domain once you have one.
- **Phone / email / address**: currently placeholder values (`+91 98765 43210`, `hello@triptravvy.in`, a placeholder Vasai-Virar address) in every page footer and on the contact page.
- **Images**: destination and team photos are pulled from Unsplash by URL as stand-ins. Swap in your own photography before launch.
- **Social share image**: `og:image` / `twitter:image` currently reuse a stock photo. Replace with a proper 1200×630 branded share image for better link previews on WhatsApp, Facebook, etc.
- **Contact form**: the consultation form on `contact.html` is front-end only right now — it shows a success message but doesn't send anywhere. Wire it to a form backend (e.g. Formspree, Google Forms, or your own endpoint) before relying on it.

## Deploying to GitHub Pages

1. Create a new GitHub repository and push all files in this folder to the `main` branch (root of the repo — not inside a subfolder).
2. In the repo, go to **Settings → Pages**.
3. Under **Build and deployment**, set **Source** to `Deploy from a branch`, branch `main`, folder `/ (root)`.
4. Save. GitHub will publish the site at `https://<your-username>.github.io/<repo-name>/` within a minute or two.
5. **Optional custom domain**: if you own a domain, add a `CNAME` file at the repo root containing just your domain (e.g. `www.triptravvy.in`), then point your domain's DNS to GitHub Pages per [GitHub's custom domain docs](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site). Update the placeholder domain in the meta tags and `sitemap.xml`/`robots.txt` to match.

## Local preview

No build tools needed — just open `index.html` in a browser, or serve the folder locally:

```
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.
