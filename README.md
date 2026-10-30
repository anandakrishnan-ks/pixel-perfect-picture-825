# SAN MEDIA COMPANY — Website

The official website of **SAN MEDIA COMPANY**, a creative media and production company based in Thiruvananthapuram (Trivandrum), working across Kerala and beyond.

- **Live site:** https://sanmedia.lovable.app
- **Contact:** contact@sanmediacompany.in

---

## 1. Overview and purpose

A cinematic, monochrome, editorial-style multi-page site that presents the company's work, services, process, founder and team, and gives prospective clients a structured way to start a project.

Content rule: nothing is invented. Clients, credits, awards, statistics and biographies only appear when real information exists; empty fields are hidden, not filled with placeholders.

## 2. Tech stack and languages

| Area | Technology |
| --- | --- |
| Language | TypeScript (TSX), CSS |
| Framework | React 19 + TanStack Start v1 (SSR, file-based routing via TanStack Router) |
| Build tool | Vite (via `@lovable.dev/vite-tanstack-config`) |
| Styling | Tailwind CSS v4 (configured in `src/styles.css`), `tw-animate-css` |
| Server runtime | Cloudflare Workers (edge), built with Nitro |
| Package manager | Bun (`bun.lock`); npm also works |
| Testing | Vitest + Testing Library + jsdom |
| Linting / formatting | ESLint 9, Prettier |

## 3. Major libraries

- **GSAP + ScrollTrigger** — scroll reveals, image reveals and hero animations (`src/components/sanmedia/anim.ts`).
- **Lenis** — smooth scrolling.
- **TanStack Query** — data layer wired into the router context.
- **shadcn/ui on Radix UI** — accessible UI primitives in `src/components/ui/`.
- **lucide-react** — icons. **sonner** — toasts. **zod / react-hook-form** — available for form validation.
- Others installed from the template (recharts, embla-carousel, date-fns, vaul, cmdk, etc.) are available but not central to the site.

## 4. Design system and responsiveness

- Dark, monochrome editorial look with film-grain overlay (`GrainOverlay.tsx`) and hairline borders.
- All colours are semantic tokens (`--background`, `--foreground`, `--hairline`, …) defined in `src/styles.css` in `oklch`; components never hard-code colours.
- Utilities such as `display`, `meta`, `lead`, `subhead`, `pull`, `grain`, `wordmark-outline` and `mono-reveal` (grayscale image that reveals colour on hover).
- **Fonts (Google Fonts, loaded in `src/routes/__root.tsx`):** Anton (display headlines), Space Grotesk (minimalist grotesque — sub-headings `.subhead`, lead/body copy `.lead`, pull quotes `.pull`; strong and flat, deliberately no curved or italic serif), Hanken Grotesk (UI/body fallback, form fields), Space Mono (meta labels).
- Mobile-first Tailwind breakpoints; fluid `vw` typography for headlines; checked at desktop (1280px) and mobile (390px) widths.

## 5. Project structure

```text
src/
  routes/                 File-based pages (TanStack Router)
    __root.tsx            HTML shell, fonts, global head, Nav/Footer providers
    index.tsx             /           Home
    about.tsx             /about      About, founder, Kerala presence
    services.tsx          /services   Six service groups
    work.tsx              /work       Layout for portfolio
    work.index.tsx        /work       Filterable portfolio grid
    work.$slug.tsx        /work/:slug Project detail
    process.tsx           /process    Six-stage process
    team.tsx              /team       Founder + production roles
    contact.tsx           /contact    Project enquiry form
  components/sanmedia/    Site sections (Hero, Nav, Footer, PageHero, WorkCard, FounderSection, …)
  components/ui/          shadcn/ui primitives
  data/
    projects.ts           Portfolio entries (from Behance)
    services.ts           Service groups
    founder.ts            Founder details + team roles
  assets/                 *.asset.json pointers to CDN-hosted images
  router.tsx              Router setup (+ auto-reload on stale chunk after publish)
  server.ts / start.ts    SSR entry and Start config
  styles.css              Tailwind v4 + design tokens
  test/                   Vitest tests (routing, brand rules)
public/                   Static files
```

## 6. Key features

- Eight pages with shared navigation, footer, smooth scroll and animations; each inner page has its own hero layout (`PageHero` variants).
- Filterable portfolio (All, Films, Advertising, Brand Films, Corporate, Product, Social Media, Campaigns, Photography) and individual project pages.
- Monochrome previews that reveal full colour on hover.
- Founder section for Ajmal Niaz (portrait, title, quote and message — text renders when supplied in `src/data/founder.ts`).
- Contact form (name, company, email, phone, service, details, budget, timeline) that opens the visitor's email app with a pre-filled brief to `contact@sanmediacompany.in`. No backend stores submissions.
- SEO: per-page title, description, Open Graph and canonical URL; Organization / LocalBusiness JSON-LD.
- Auto-reload once when a published update makes old script files unavailable.

## 7. Portfolio / Behance integration

Projects are a **static import** of the Behance profile https://www.behance.net/sanmediacompany1 — there is no live Behance API call. Each entry in `src/data/projects.ts` holds title, client, category, cover image (uploaded to the Lovable CDN) and its Behance URL; project pages link out with "View on Behance". To add a project, add an entry and its cover asset.

## 8. Social media

Plain outbound links (new tab, `rel="noopener noreferrer"`) in the footer and in JSON-LD `sameAs`:

- Instagram — https://www.instagram.com/sanmediacompany/
- YouTube — https://www.youtube.com/@sanmediacompany
- Behance — https://www.behance.net/sanmediacompany1

No embeds, SDKs or tracking pixels are used.

## 9. Running locally

Requires Node.js 20+ (or Bun).

```sh
git clone <this-repository-url>
cd <repository-name>
bun install        # or: npm install
bun run dev        # or: npm run dev
```

Other scripts: `build`, `build:dev`, `preview`, `test`, `test:watch`, `lint`, `format`.

## 10. Environment variables

None are required. The site has no backend, database or API keys. The canonical site URL (`https://sanmedia.lovable.app`) is set as a constant in the route files.

## 11. Build and deployment

- `bun run build` produces a Cloudflare Workers–compatible SSR bundle via Nitro.
- Hosting and deployment are handled by **Lovable**: publishing from the Lovable editor deploys to https://sanmedia.lovable.app. A custom domain (e.g. sanmediacompany.in) can be connected in project settings.
- Commits pushed to the connected GitHub branch sync back to Lovable.

## 12. External services and third-party tools

- Lovable (editor, hosting, asset CDN at `/__l5e/assets-v1/…`)
- Google Fonts
- Behance, Instagram, YouTube (outbound links only)
- Visitor's email client (`mailto:` for the contact form)

## 13. Development notes

- Never edit `src/routeTree.gen.ts` — it is generated.
- Use the brand name **SAN MEDIA COMPANY**; never "SANMEDIA". Tests in `src/test/brand.test.ts` enforce brand and email rules.
- Use semantic colour tokens only.
- Do not add placeholder text; leave data fields empty until real content arrives.

## 14. Future improvements

- Add the founder's message, biography and vision text.
- Add real team names and portraits.
- Add project years, credits and descriptions from Behance.
- Replace generated Process/hero images with behind-the-scenes photos.
- Store contact enquiries in a backend with email notifications.
- Connect the sanmediacompany.in custom domain and update canonical URLs.
