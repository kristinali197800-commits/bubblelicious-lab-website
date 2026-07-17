# Bubblelicious Lab

The public website for Bubblelicious Lab, a build-your-own bubble tea shop in Cherry Hill, New Jersey.

## Website

- GitHub Pages: https://kristinali197800-commits.github.io/bubblelicious-lab-website/
- Reviews: https://kristinali197800-commits.github.io/bubblelicious-lab-website/reviews/

## Local development

This project requires Node.js 22.13 or newer and pnpm.

```bash
pnpm install
pnpm dev
```

Create the production site build with:

```bash
pnpm build
```

GitHub Pages serves the generated `docs/` directory from `main`. The files in
`docs/` are a static export of this same Next.js project, built with the
repository base path so every route, image, and animation works on Pages.

Regenerate the Pages version with:

```bash
GITHUB_PAGES=true \
NEXT_PUBLIC_BASE_PATH=/bubblelicious-lab-website \
NEXT_PUBLIC_SITE_ORIGIN=https://kristinali197800-commits.github.io \
pnpm build:github-pages
```

## Business information

- Address: 2110 Marlton Pike East, Cherry Hill, NJ 08003
- Phone: (856) 489-9898
- Instagram: [@bubblelicious_lab](https://www.instagram.com/bubblelicious_lab/)
- Online ordering: [Uber Eats](https://www.ubereats.com/store/bubblelicious-lab/BQBu6StxTiCa3hSJDh299Q)
