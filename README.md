# DolceStay

Website for DolceStay local accommodation management in Sesimbra, Portugal.

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Google Maps setup

The partners map on `/parcerias` uses the **Google Maps JavaScript API** via `@react-google-maps/api`.

1. Create an API key in [Google Cloud Console](https://console.cloud.google.com/google/maps-apis).
2. Enable **Maps JavaScript API** for the project.
3. (Optional) Enable **Places API** if you add place search later.
4. (Optional) Enable **Geocoding API** only if you geocode addresses in the browser. Partner coordinates are stored in `lib/partner-map-data.ts`, so Geocoding is not required for the current map.
5. Copy `.env.example` to `.env` and set your key:

   ```bash
   cp .env.example .env
   ```

   ```env
   NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_google_maps_api_key_here
   ```

6. **Restart the dev server** after changing `.env` (`npm run dev`).

Never commit `.env` with real keys or hardcode API keys in source code.

## Resend (contact forms)

Contact and owner lead forms send email through [Resend](https://resend.com) via the server route `POST /api/contact`. The API key is **never** exposed to the browser.

1. Create an account at [resend.com](https://resend.com).
2. Verify your sending domain.
3. Create an API key.
4. Add to `.env` (copy from `.env.example`):

   ```env
   RESEND_API_KEY=re_xxxxxxxx
   RESEND_FROM_EMAIL=DolceStay <noreply@your-verified-domain.com>
   RESEND_TO_EMAIL=geral@dolcestay.com
   ```

5. Restart the dev server (`npm run dev`).
6. Submit a form on `/contactos` or `/proprietarios` to test.

### Vercel (Resend)

Add these **server** environment variables (not `NEXT_PUBLIC_`):

| Name | Value |
|------|--------|
| `RESEND_API_KEY` | Your Resend API key |
| `RESEND_FROM_EMAIL` | e.g. `DolceStay <noreply@your-domain.com>` |
| `RESEND_TO_EMAIL` | Inbox that receives form submissions |

Redeploy after adding variables.

### Vercel (Google Maps)

1. Open your project on [Vercel](https://vercel.com) → **Settings** → **Environment Variables**.
2. Add:

   | Name | Value |
   |------|--------|
   | `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY` | Your Google Maps API key |

3. Enable it for **Production** (and **Preview** if you use preview deployments).
4. **Redeploy** the project so the build picks up the new variable (`NEXT_PUBLIC_*` values are inlined at build time).

In Google Cloud, restrict the key’s HTTP referrers to your Vercel domain(s), e.g. `https://your-site.vercel.app/*` and your custom domain.

## Build

```bash
npm run build
npm start
```
