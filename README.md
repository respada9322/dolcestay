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
5. Copy `.env.example` to `.env.local` and set your key:

   ```bash
   cp .env.example .env.local
   ```

   ```env
   NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_google_maps_api_key_here
   ```

6. **Restart the dev server** after adding or changing `.env.local` (`npm run dev`).

Never commit `.env.local` or hardcode API keys in source code.

## Build

```bash
npm run build
npm start
```
