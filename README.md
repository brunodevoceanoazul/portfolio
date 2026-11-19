# Bruno Bisogni · Senior Software Developer

Complete source code for my bilingual portfolio. The site introduces my product engineering experience, technical case studies, résumé, data analysis sample, and team awards.

[Português](https://brunodevoceanoazul.github.io/portfolio/pt/) · [English](https://brunodevoceanoazul.github.io/portfolio/en/) · [Résumé](https://brunodevoceanoazul.github.io/portfolio/en/resume/) · [LinkedIn](https://www.linkedin.com/in/brunobisogni/)

## Review the implementation

| Area | Source |
| --- | --- |
| Portuguese and English content | [app/content.js](app/content.js) |
| Static routes, locale metadata, page components | [app/[[...route]]/page.js](app/%5B%5B...route%5D%5D/page.js) |
| Document language and shared stylesheet | [app/[[...route]]/layout.js](app/%5B%5B...route%5D%5D/layout.js) |
| Print action and on-demand video | [app/controls.js](app/controls.js) |
| Responsive layout and print styles | [app/site.css](app/site.css) |
| GitHub Pages build and deployment | [.github/workflows/pages.yml](.github/workflows/pages.yml) |

## Run locally

Use Node.js 22 or newer.

```sh
npm ci
npm run dev
```

Open the URL printed by Next.js. To build the static site:

```sh
npm run build
```

The export is written to `out/`. For GitHub Pages, select **GitHub Actions** as the publishing source. The workflow uses the repository base path during the build.

## Add a project

Edit both languages in `app/content.js`, add a link in `projectLinks`, and classify the case in the Projects component. Include your role, the implemented scope, technologies, and a suitable public reference. Runnable personal projects should include setup instructions and links to implementation commits.

Professional product cases use public descriptions. The data analysis sample is explicitly labeled synthetic.
