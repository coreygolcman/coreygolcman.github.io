# Portfolio starter

Plain HTML, CSS, and a little JavaScript. No build step, no dependencies.

## Folder layout

    index.html                    Home: hero, about + photo, selected projects, experience, contact
    projects.html                 Project overview with filterable timeline
    projects/project-template.html  Copy this for every new project
    projects/qc-station.html      Pre-filled with what you've told me; fill in the dashed [prompts]
    projects/formula-ic-etc.html  Same
    css/style.css                 All styling. Colours and fonts are variables at the top
    js/main.js                    Timeline progress, filter buttons, "On this page" highlight
    images/                       Your photos. Put project images in images/<project-name>/
    favicon.svg                   Tab icon

## First edit pass

Use your editor's search across all files for each of these:

1. `Lastname` : your last name (header, home page, footer)
2. `[` : every bracketed placeholder (dates, university, major, bullets)
3. `yourdomain.com`, `your-handle` : email, LinkedIn, GitHub links
4. Replace `images/profile-placeholder.svg` with your photo (save as `images/profile.jpg`, then update the `src` in index.html)
5. Drop `resume.pdf` into the top folder

Dashed orange-edged paragraphs on project pages are prompts. Replace them with your text.

## Adding a project

1. Copy `projects/project-template.html` and rename it (for example `projects/my-project.html`).
2. Fill it in. Add images under `images/my-project/`.
3. In `projects.html`, copy one `<li class="t-item">` block, change the text and `href`, and set `data-tags` to any of: mechanical, electronics, automation, software.
4. Optionally add a card to the home page.

## Animations

- Hero gear drawing: draws itself once, then the gears turn. Edit the delays in the inline `style` attributes, or the speeds (`.spin-a`, `.spin-b`) in style.css.
- Timeline: the orange line and nodes follow your scroll.
- Pages cross-fade when you navigate (supported in current Chrome, Edge, and Safari).
- All motion turns off for visitors who set "reduce motion" in their operating system.

## Publishing with your own domain (GitHub Pages)

1. Put this folder in a GitHub repo and turn on Pages in Settings.
2. Enter your custom domain in the Pages settings.
3. At your registrar, add four A records for the root domain (185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153) and a CNAME for `www` pointing to `<username>.github.io`.
4. Wait for DNS, then tick "Enforce HTTPS."

Check GitHub's current Pages docs for the exact records. Netlify and Cloudflare Pages work with this folder as-is.

## Before you publish

If a project came from an internship or co-op, check with your employer what you can show. Photos and numbers from work projects often need approval.
