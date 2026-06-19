# Parenthèse78

Website for Faustine Pichon — perinatal wellness home visits in Versailles and surrounding areas.

**Production URL**: [parenthese78.fr](https://www.parenthese78.fr)

---

## Stack

- **Next.js 16** (App Router) + **TypeScript**
- **Tailwind CSS v4** — configured via `globals.css`, no `tailwind.config` file
- **Framer Motion** — scroll animations
- **Nodemailer** — email delivery via OVH SMTP
- **Cal.com** (`@calcom/embed-react`) — booking widget (EU server: `cal.eu`)
- **React Leaflet** — service area map
- **Embla Carousel** — testimonials carousel
- **Vercel** — hosting and continuous deployment

---

## Local setup

```bash
npm install
```

Create a `.env` file at the root (see Environment Variables below), then:

```bash
npm run dev
```

The site runs at [http://localhost:3000](http://localhost:3000).

---

## Environment variables

| Variable | Description |
|---|---|
| `SMTP_USER` | OVH email address (`contact@parenthese78.fr`) |
| `SMTP_PASSWORD` | OVH Zimbra mailbox password |

Server-side only (API routes). In production, set these in the Vercel project settings.

---

## Project structure

```
app/
├── _components/          # Shared components
│   ├── home-page/        # Home page sections
│   ├── services/         # Service page components
│   ├── testimonials/     # Testimonials data and component
│   ├── header.tsx
│   ├── footer.tsx
│   ├── cookie-banner.tsx
│   ├── google-analytics.tsx
│   ├── zone-map.tsx      # Leaflet map (SSR-safe)
│   ├── action-button.tsx # Reusable CTA button
│   └── navItems.ts       # Navigation links
├── api/
│   ├── contact/route.ts  # Contact form email
│   ├── gift-card/route.ts# Gift card PDF generation
│   ├── formule/route.ts  # Package inquiry email
│   └── guide/route.ts    # "Which treatment?" guide email
├── lib/
│   ├── rate-limit.ts     # In-memory rate limiting (5 req / 10 min per IP)
│   ├── escape-html.ts    # HTML escaping for email content
│   └── booking.ts        # Cal.com helpers
├── parentheses/          # Services catalogue page
├── offrir/               # Gift card page
├── quel-accompagnement/  # Treatment guide page
├── formules/             # Packages page
├── rdv/                  # Booking page
├── about/
├── contact/
├── cgv/                  # Terms and conditions
├── mentions-legales/     # Legal notices (noindex)
├── politique-confidentialite/
├── services/             # Redirect → /parentheses
├── layout.tsx            # Root layout (fonts, GA, schema.org, CSP consent)
├── globals.css           # Full design system (CSS variables, typography)
├── robots.ts             # Dynamic robots.txt
├── sitemap.ts            # Dynamic XML sitemap
└── opengraph-image.tsx   # Dynamically generated OG image

proxy.ts                  # Middleware: CSP header injection
next.config.ts
```

---

## Pages

| Route | Description |
|---|---|
| `/` | Home |
| `/parentheses` | Services catalogue |
| `/quel-accompagnement` | Treatment selection guide |
| `/formules` | Multi-session packages |
| `/offrir` | Gift card |
| `/rdv` | Book an appointment |
| `/about` | About Faustine |
| `/contact` | Contact form |
| `/cgv` | Terms and conditions |
| `/mentions-legales` | Legal notices (noindex) |
| `/politique-confidentialite` | Privacy policy |
| `/services` | Redirect to `/parentheses` |

---

## API routes

### `POST /api/contact`
Validates the contact form, applies rate limiting (5 requests / 10 min per IP), and sends an HTML email via OVH SMTP to `contact@parenthese78.fr`.

### `POST /api/gift-card`
Generates a gift card PDF using `@react-pdf/renderer` and returns it as a stream.

### `POST /api/formule`
Sends a custom package inquiry by email.

### `POST /api/guide`
Sends the result of the "Which treatment?" guide by email.

---

## Security

- **CSP** — defined in `proxy.ts` (Next.js middleware). Allows: `self`, `cal.eu`, `*.cal.eu`, Google Tag Manager, Google Analytics. Blocks everything else.
- **Rate limiting** — in-memory, 5 requests per 10 minutes per IP across all API routes.
- **Input validation** — required fields, max lengths, email format check.
- **HTML escaping** — all user-supplied values are passed through `esc()` before being injected into email templates.

---

## Design system

Everything is defined as CSS variables in `app/globals.css`. Tailwind v4 reads them directly — no separate config file needed.

**Fonts**:
- `--font-dancing-script` — logo and decorative accents
- `--font-cormorant` — headings (elegant serif)
- System sans-serif — body text

**Core palette**:
- `--rose`: `#D4A0A0` — accents, primary buttons
- `--rose-dark`: `#B88A8A` — hover states, email headers
- `--cream`: `#F4ECDF` — background
- `--text`: `#3D3530` — body text

---

## Analytics & GDPR

Google Analytics is set up with **Consent Mode v2**. All storage is denied by default. The cookie banner (`cookie-banner.tsx`) updates consent; `google-analytics.tsx` fires `page_view` only after the user accepts.

GA Measurement ID: `G-0BV0R9XZD0` (hardcoded in `layout.tsx`).

---

## Deployment

Deployed on **Vercel** with continuous deployment from the `main` branch.

- **Domain**: `parenthese78.fr` (OVH) — DNS A/CNAME records pointing to Vercel
- **Environment variables**: set `SMTP_USER` and `SMTP_PASSWORD` in the Vercel project settings
- **Build**: `npm run build` — no special configuration required

```bash
npm run build   # production build
npm run start   # run production build locally
npm run lint    # ESLint
```
