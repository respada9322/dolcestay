'use client';

/**
 * Interactive Google Maps — DolceStay partners (/parcerias).
 *
 * API key (Next.js):
 *   process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
 *
 * Set in `.env` (local) or Vercel env vars, then restart/redeploy. See README.md → "Google Maps setup".
 * The key is read via `getGoogleMapsApiKey()` in `@/lib/google-maps-config`.
 *
 * If the key is missing or invalid, the map renders a safe fallback (no crash).
 */

import { useCallback, useEffect, useRef, useState } from 'react';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import { MarkerClusterer, SuperClusterAlgorithm } from '@googlemaps/markerclusterer';
import { AlertCircle, MapPin, RefreshCw } from 'lucide-react';
import {
  getGoogleMapsApiKey,
  GOOGLE_MAPS_ENV_VAR,
  hasGoogleMapsApiKey,
} from '@/lib/google-maps-config';
import {
  MAP_PARTNERS,
  SESIMBRA_MAP_CENTER,
  SESIMBRA_MAP_DEFAULT_ZOOM,
  type MapPartner,
  getGoogleMapsDirectionsUrl,
  getMapPartnerCategoryLabel,
} from '@/lib/partner-map-data';

const MAP_LIBRARIES: never[] = [];

const MAP_CONTAINER_STYLE = { width: '100%', height: '100%' };

const MAP_FIT_PADDING = { top: 40, right: 40, bottom: 100, left: 40 };

const MAP_MIN_ZOOM = 12;
const MAP_MAX_ZOOM = 15;
const CLUSTER_MAX_ZOOM = 14;

const MAP_OPTIONS: google.maps.MapOptions = {
  disableDefaultUI: false,
  zoomControl: true,
  mapTypeControl: false,
  streetViewControl: false,
  fullscreenControl: true,
  gestureHandling: 'cooperative',
  mapTypeId: 'satellite',
};

const PIN_WIDTH = 28;
const PIN_HEIGHT = 36;

function buildPinIcon(): google.maps.Icon | undefined {
  if (typeof google === 'undefined') return undefined;

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${PIN_WIDTH}" height="${PIN_HEIGHT}" viewBox="0 0 28 36" fill="none">
    <path d="M14 0C7.373 0 2 5.373 2 12c0 8.25 12 24 12 24s12-15.75 12-24C26 5.373 20.627 0 14 0z" fill="#DC2626"/>
    <circle cx="14" cy="12" r="4.5" fill="#FFFFFF"/>
    <circle cx="14" cy="12" r="2" fill="#DC2626"/>
  </svg>`;

  return {
    url: `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`,
    scaledSize: new google.maps.Size(PIN_WIDTH, PIN_HEIGHT),
    anchor: new google.maps.Point(PIN_WIDTH / 2, PIN_HEIGHT),
  };
}

function buildClusterIcon(count: number): google.maps.Icon | undefined {
  if (typeof google === 'undefined') return undefined;

  const size = 30;
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 30 30">
    <circle cx="15" cy="15" r="13" fill="#FFFFFF" stroke="#DC2626" stroke-width="2"/>
    <circle cx="15" cy="15" r="10" fill="#DC2626"/>
    <text x="15" y="19" text-anchor="middle" font-family="system-ui,sans-serif" font-size="11" font-weight="600" fill="#FFFFFF">${count}</text>
  </svg>`;

  return {
    url: `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`,
    scaledSize: new google.maps.Size(size, size),
    anchor: new google.maps.Point(size / 2, size / 2),
  };
}

type PartnersMapLabels = {
  locationLabel: string;
  partnersCountLabel: string;
  openInGoogleMapsLabel: string;
  categoryExperiencesLabel: string;
  categoryRestaurantsLabel: string;
  unavailableTitle: string;
  unavailableDescription: string;
  unavailableRestart: string;
  unavailableLoadError: string;
  unavailableReferrerError: string;
};

declare global {
  interface Window {
    gm_authFailure?: () => void;
  }
}

type MapUnavailableFallbackProps = {
  title: string;
  description: string;
  restartHint: string;
  loadErrorMessage?: string;
  missingKey: boolean;
};

function MapUnavailableFallback({
  title,
  description,
  restartHint,
  loadErrorMessage,
  missingKey,
}: MapUnavailableFallbackProps) {
  return (
    <div className="flex h-full min-h-[450px] lg:min-h-[620px] items-center justify-center bg-gradient-to-br from-[#E8F0EA] via-[#F8FAF8] to-[#E8F0EA] px-4 py-10">
      <div
        className="w-full max-w-md rounded-2xl border border-[#1F4E5F]/10 bg-white p-8 text-center shadow-[0_12px_40px_rgba(31,78,95,0.1)]"
        role="status"
        aria-live="polite"
      >
        <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#CFE8D2]">
          {missingKey ? (
            <MapPin className="h-7 w-7 text-[#8DBE91]" aria-hidden />
          ) : (
            <AlertCircle className="h-7 w-7 text-[#1F4E5F]" aria-hidden />
          )}
        </div>

        <h4 className="font-serif text-xl text-[#1F4E5F] mb-2">{title}</h4>
        <p className="text-sm text-[#6B7280] leading-relaxed mb-5">{description}</p>

        {missingKey && (
          <div className="mb-5 rounded-xl border border-[#E5E7EB] bg-[#F8FAF8] px-4 py-3 text-left">
            <p className="text-xs font-medium uppercase tracking-wide text-[#6B7280] mb-2">
              .env / Vercel
            </p>
            <code className="block break-all text-left text-xs text-[#1F4E5F] font-mono leading-relaxed">
              {GOOGLE_MAPS_ENV_VAR}=your_google_maps_api_key_here
            </code>
          </div>
        )}

        <div className="flex items-start justify-center gap-2 text-sm text-[#6B7280]">
          <RefreshCw className="h-4 w-4 shrink-0 mt-0.5 text-[#8DBE91]" aria-hidden />
          <p className="text-left leading-relaxed">{restartHint}</p>
        </div>

        {loadErrorMessage && (
          <p className="mt-4 rounded-lg bg-red-50 px-3 py-2 text-left text-xs text-red-700">
            {loadErrorMessage}
          </p>
        )}
      </div>
    </div>
  );
}

export function PartnersMap(labels: PartnersMapLabels) {
  const apiKey = getGoogleMapsApiKey();

  if (!hasGoogleMapsApiKey()) {
    return (
      <MapUnavailableFallback
        title={labels.unavailableTitle}
        description={labels.unavailableDescription}
        restartHint={labels.unavailableRestart}
        missingKey
      />
    );
  }

  return <PartnersMapLoaded apiKey={apiKey} labels={labels} />;
}

function buildInfoWindowContent(
  partner: MapPartner,
  labels: Pick<
    PartnersMapLabels,
    'openInGoogleMapsLabel' | 'categoryExperiencesLabel' | 'categoryRestaurantsLabel'
  >,
): HTMLElement {
  const content = document.createElement('div');
  content.className = 'p-3 max-w-[min(280px,calc(100vw-3rem))] font-sans';

  const category = document.createElement('p');
  category.className =
    'text-[11px] font-semibold uppercase tracking-wide text-[#8DBE91] mb-1.5';
  category.textContent = getMapPartnerCategoryLabel(partner, {
    experiences: labels.categoryExperiencesLabel,
    restaurants: labels.categoryRestaurantsLabel,
  });

  const title = document.createElement('p');
  title.className = 'font-semibold text-[#1F4E5F] text-base mb-1 leading-snug';
  title.textContent = partner.name;

  const address = document.createElement('p');
  address.className = 'text-sm text-[#6B7280] mb-3 leading-relaxed';
  address.textContent = partner.address;

  const link = document.createElement('a');
  link.href = getGoogleMapsDirectionsUrl(partner);
  link.target = '_blank';
  link.rel = 'noopener noreferrer';
  link.className =
    'inline-flex items-center justify-center w-full px-4 py-2.5 bg-[#1F4E5F] text-white text-sm font-semibold rounded-full hover:bg-[#163B48] transition-colors';
  link.textContent = labels.openInGoogleMapsLabel;

  content.append(category, title, address, link);
  return content;
}

function PartnersMapLoaded({
  apiKey,
  labels,
}: {
  apiKey: string;
  labels: PartnersMapLabels;
}) {
  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: apiKey,
    libraries: MAP_LIBRARIES,
  });

  const [authFailure, setAuthFailure] = useState(false);
  const [map, setMap] = useState<google.maps.Map | null>(null);
  const clustererRef = useRef<MarkerClusterer | null>(null);
  const markersRef = useRef<google.maps.Marker[]>([]);
  const infoWindowRef = useRef<google.maps.InfoWindow | null>(null);

  const fitMapToPartners = useCallback((targetMap: google.maps.Map) => {
    const bounds = new google.maps.LatLngBounds();
    MAP_PARTNERS.forEach((partner) => {
      bounds.extend({ lat: partner.lat, lng: partner.lng });
    });

    targetMap.fitBounds(bounds, MAP_FIT_PADDING);

    const listener = google.maps.event.addListenerOnce(targetMap, 'idle', () => {
      const zoom = targetMap.getZoom();
      if (zoom == null) return;

      if (zoom < MAP_MIN_ZOOM) {
        targetMap.setCenter(SESIMBRA_MAP_CENTER);
        targetMap.setZoom(SESIMBRA_MAP_DEFAULT_ZOOM);
      } else if (zoom > MAP_MAX_ZOOM) {
        targetMap.setZoom(MAP_MAX_ZOOM);
      }
    });

    return () => {
      google.maps.event.removeListener(listener);
    };
  }, []);

  const openPartner = useCallback(
    (partner: MapPartner, targetMap: google.maps.Map) => {
      if (!infoWindowRef.current) {
        infoWindowRef.current = new google.maps.InfoWindow({
          maxWidth: 300,
        });
      }

      infoWindowRef.current.setContent(
        buildInfoWindowContent(partner, {
          openInGoogleMapsLabel: labels.openInGoogleMapsLabel,
          categoryExperiencesLabel: labels.categoryExperiencesLabel,
          categoryRestaurantsLabel: labels.categoryRestaurantsLabel,
        }),
      );

      const anchor = markersRef.current.find((m) => m.getTitle() === partner.name);
      if (anchor) {
        infoWindowRef.current.open({ map: targetMap, anchor });
      } else {
        infoWindowRef.current.setPosition({ lat: partner.lat, lng: partner.lng });
        infoWindowRef.current.open(targetMap);
      }
    },
    [
      labels.openInGoogleMapsLabel,
      labels.categoryExperiencesLabel,
      labels.categoryRestaurantsLabel,
    ],
  );

  const onMapLoad = useCallback(
    (loadedMap: google.maps.Map) => {
      setMap(loadedMap);
      fitMapToPartners(loadedMap);
    },
    [fitMapToPartners],
  );

  useEffect(() => {
    const previousAuthFailure = window.gm_authFailure;
    window.gm_authFailure = () => {
      setAuthFailure(true);
    };

    return () => {
      window.gm_authFailure = previousAuthFailure;
    };
  }, []);

  useEffect(() => {
    if (!map || !isLoaded) return;

    markersRef.current.forEach((marker) => marker.setMap(null));
    markersRef.current = [];
    clustererRef.current?.clearMarkers();

    const icon = buildPinIcon();
    const markers = MAP_PARTNERS.map((partner) => {
      const marker = new google.maps.Marker({
        position: { lat: partner.lat, lng: partner.lng },
        title: partner.name,
        icon,
        optimized: true,
      });

      marker.addListener('click', () => openPartner(partner, map));
      return marker;
    });

    markersRef.current = markers;

    clustererRef.current = new MarkerClusterer({
      map,
      markers,
      algorithm: new SuperClusterAlgorithm({
        maxZoom: CLUSTER_MAX_ZOOM,
        radius: 50,
      }),
      renderer: {
        render: ({ count, position }) => {
          const clusterIcon = buildClusterIcon(count);
          return new google.maps.Marker({
            position,
            icon: clusterIcon,
            zIndex: Number(google.maps.Marker.MAX_ZINDEX) + count,
          });
        },
      },
    });

    return () => {
      markersRef.current.forEach((marker) => marker.setMap(null));
      clustererRef.current?.clearMarkers();
      infoWindowRef.current?.close();
    };
  }, [map, isLoaded, openPartner]);

  if (loadError || authFailure) {
    return (
      <MapUnavailableFallback
        title={labels.unavailableTitle}
        description={labels.unavailableDescription}
        restartHint={labels.unavailableRestart}
        loadErrorMessage={authFailure ? labels.unavailableReferrerError : labels.unavailableLoadError}
        missingKey={false}
      />
    );
  }

  if (!isLoaded) {
    return (
      <div className="flex h-full min-h-[450px] lg:min-h-[620px] items-center justify-center bg-[#E8F0EA]">
        <div
          className="h-10 w-10 animate-spin rounded-full border-2 border-[#8DBE91] border-t-transparent"
          role="status"
          aria-label="Loading map"
        />
      </div>
    );
  }

  return (
    <div className="relative h-full w-full overflow-hidden">
      <GoogleMap
        mapContainerStyle={MAP_CONTAINER_STYLE}
        center={SESIMBRA_MAP_CENTER}
        zoom={SESIMBRA_MAP_DEFAULT_ZOOM}
        onLoad={onMapLoad}
        options={MAP_OPTIONS}
      />

      <div className="pointer-events-none absolute bottom-4 left-4 z-10 sm:bottom-5 sm:left-5">
        <div className="pointer-events-none rounded-xl bg-white/95 px-4 py-2.5 shadow-lg ring-1 ring-[#1F4E5F]/5 backdrop-blur-sm sm:px-5 sm:py-3">
          <div className="flex items-center gap-2.5 sm:gap-3">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#FEE2E2] sm:h-10 sm:w-10">
              <MapPin className="h-4 w-4 text-[#DC2626] sm:h-5 sm:w-5" aria-hidden />
            </div>
            <div className="min-w-0">
              <span className="block text-sm font-bold text-[#1F4E5F] sm:text-base">
                {labels.locationLabel}
              </span>
              <span className="text-xs text-[#6B7280] sm:text-sm">{labels.partnersCountLabel}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
