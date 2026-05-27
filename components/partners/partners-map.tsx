'use client';

/**
 * Interactive Google Maps — DolceStay partners (/parcerias).
 *
 * API key (Next.js):
 *   process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
 *
 * Set in `.env.local`, then restart the dev server. See README.md → "Google Maps setup".
 * The key is read via `getGoogleMapsApiKey()` in `@/lib/google-maps-config`.
 *
 * If the key is missing or invalid, the map renders a safe fallback (no crash).
 */

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import { MarkerClusterer } from '@googlemaps/markerclusterer';
import { AlertCircle, ExternalLink, MapPin, RefreshCw } from 'lucide-react';
import {
  getGoogleMapsApiKey,
  GOOGLE_MAPS_ENV_VAR,
  hasGoogleMapsApiKey,
} from '@/lib/google-maps-config';
import {
  MAP_PARTNERS,
  SESIMBRA_MAP_CENTER,
  type MapPartner,
  getGoogleMapsDirectionsUrl,
} from '@/lib/partner-map-data';

const MAP_LIBRARIES: never[] = [];

const MAP_CONTAINER_STYLE = { width: '100%', height: '100%' };

const MAP_OPTIONS: google.maps.MapOptions = {
  disableDefaultUI: false,
  zoomControl: true,
  mapTypeControl: false,
  streetViewControl: false,
  fullscreenControl: true,
  gestureHandling: 'cooperative',
  styles: [
    { featureType: 'poi', stylers: [{ visibility: 'off' }] },
    { featureType: 'transit', stylers: [{ visibility: 'off' }] },
  ],
};

function buildMarkerIcon(): google.maps.Icon | undefined {
  if (typeof google === 'undefined') return undefined;

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="36" height="44" viewBox="0 0 36 44" fill="none">
    <path d="M18 0C9.716 0 3 6.716 3 15c0 10.5 15 29 15 29s15-18.5 15-29C33 6.716 26.284 0 18 0z" fill="#8DBE91"/>
    <circle cx="18" cy="15" r="7" fill="#1F4E5F"/>
    <circle cx="18" cy="15" r="3" fill="#CFE8D2"/>
  </svg>`;

  return {
    url: `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`,
    scaledSize: new google.maps.Size(36, 44),
    anchor: new google.maps.Point(18, 44),
  };
}

type PartnersMapLabels = {
  locationLabel: string;
  partnersCountLabel: string;
  openInGoogleMapsLabel: string;
  unavailableTitle: string;
  unavailableDescription: string;
  unavailableRestart: string;
  unavailableLoadError: string;
};

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
    <div className="flex h-full min-h-[380px] lg:min-h-[500px] items-center justify-center bg-gradient-to-br from-[#E8F0EA] via-[#F8FAF8] to-[#E8F0EA] px-4 py-10">
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
              .env.local
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

  const [map, setMap] = useState<google.maps.Map | null>(null);
  const [selectedPartner, setSelectedPartner] = useState<MapPartner | null>(null);
  const [activePartnerId, setActivePartnerId] = useState<string | null>(null);
  const clustererRef = useRef<MarkerClusterer | null>(null);
  const markersRef = useRef<google.maps.Marker[]>([]);
  const infoWindowRef = useRef<google.maps.InfoWindow | null>(null);

  const sortedPartners = useMemo(
    () => [...MAP_PARTNERS].sort((a, b) => a.name.localeCompare(b.name, 'pt')),
    [],
  );

  const fitAllPartners = useCallback((targetMap: google.maps.Map) => {
    const bounds = new google.maps.LatLngBounds();
    MAP_PARTNERS.forEach((partner) => {
      bounds.extend({ lat: partner.lat, lng: partner.lng });
    });
    targetMap.fitBounds(bounds, { top: 56, right: 56, bottom: 88, left: 56 });
  }, []);

  const openPartner = useCallback(
    (partner: MapPartner, targetMap: google.maps.Map) => {
      setSelectedPartner(partner);
      setActivePartnerId(partner.id);
      targetMap.panTo({ lat: partner.lat, lng: partner.lng });
      const currentZoom = targetMap.getZoom() ?? 14;
      if (currentZoom < 15) {
        targetMap.setZoom(15);
      }

      if (!infoWindowRef.current) {
        infoWindowRef.current = new google.maps.InfoWindow();
      }

      const content = document.createElement('div');
      content.className = 'p-1 max-w-[260px] font-sans';

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
        'inline-flex items-center justify-center gap-2 w-full px-4 py-2.5 bg-[#1F4E5F] text-white text-sm font-semibold rounded-full hover:bg-[#163B48] transition-colors';
      link.textContent = labels.openInGoogleMapsLabel;

      content.append(title, address, link);
      infoWindowRef.current.setContent(content);

      const anchor = markersRef.current.find((m) => m.getTitle() === partner.name);
      if (anchor) {
        infoWindowRef.current.open({ map: targetMap, anchor });
      } else {
        infoWindowRef.current.setPosition({ lat: partner.lat, lng: partner.lng });
        infoWindowRef.current.open(targetMap);
      }
    },
    [labels.openInGoogleMapsLabel],
  );

  const onMapLoad = useCallback(
    (loadedMap: google.maps.Map) => {
      setMap(loadedMap);
      fitAllPartners(loadedMap);
    },
    [fitAllPartners],
  );

  useEffect(() => {
    if (!map || !isLoaded) return;

    markersRef.current.forEach((marker) => marker.setMap(null));
    markersRef.current = [];
    clustererRef.current?.clearMarkers();

    const icon = buildMarkerIcon();
    const markers = MAP_PARTNERS.map((partner) => {
      const marker = new google.maps.Marker({
        position: { lat: partner.lat, lng: partner.lng },
        title: partner.name,
        icon,
      });

      marker.addListener('click', () => openPartner(partner, map));
      return marker;
    });

    markersRef.current = markers;

    clustererRef.current = new MarkerClusterer({
      map,
      markers,
      renderer: {
        render: ({ count, position }) => {
          const clusterSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48">
            <circle cx="24" cy="24" r="22" fill="#1F4E5F" fill-opacity="0.92"/>
            <circle cx="24" cy="24" r="18" fill="#8DBE91"/>
            <text x="24" y="29" text-anchor="middle" font-family="system-ui,sans-serif" font-size="14" font-weight="700" fill="#1F4E5F">${count}</text>
          </svg>`;

          return new google.maps.Marker({
            position,
            icon: {
              url: `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(clusterSvg)}`,
              scaledSize: new google.maps.Size(48, 48),
              anchor: new google.maps.Point(24, 24),
            },
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

  const handlePartnerSelect = (partner: MapPartner) => {
    if (!map) return;
    openPartner(partner, map);
  };

  if (loadError) {
    return (
      <MapUnavailableFallback
        title={labels.unavailableTitle}
        description={labels.unavailableDescription}
        restartHint={labels.unavailableRestart}
        loadErrorMessage={labels.unavailableLoadError}
        missingKey={false}
      />
    );
  }

  if (!isLoaded) {
    return (
      <div className="flex h-full min-h-[380px] lg:min-h-[500px] items-center justify-center bg-[#E8F0EA]">
        <div
          className="h-10 w-10 animate-spin rounded-full border-2 border-[#8DBE91] border-t-transparent"
          role="status"
          aria-label="Loading map"
        />
      </div>
    );
  }

  return (
    <div className="relative h-full w-full">
      <GoogleMap
        mapContainerStyle={MAP_CONTAINER_STYLE}
        center={SESIMBRA_MAP_CENTER}
        zoom={14}
        onLoad={onMapLoad}
        options={MAP_OPTIONS}
      />

      <div className="pointer-events-none absolute inset-x-0 top-0 z-10 bg-gradient-to-b from-white via-white/90 to-transparent px-3 pb-6 pt-3 sm:px-4">
        <div className="pointer-events-auto flex gap-2 overflow-x-auto pb-1">
          {sortedPartners.map((partner) => (
            <button
              key={partner.id}
              type="button"
              onClick={() => handlePartnerSelect(partner)}
              className={`shrink-0 rounded-full border px-3.5 py-1.5 text-xs font-medium transition-all sm:text-sm ${
                activePartnerId === partner.id
                  ? 'border-[#8DBE91] bg-[#1F4E5F] text-white shadow-md'
                  : 'border-[#E5E7EB] bg-white/95 text-[#1F4E5F] shadow-sm hover:border-[#8DBE91]/60 hover:bg-white'
              }`}
            >
              {partner.name}
            </button>
          ))}
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-5 left-5 z-10">
        <div className="pointer-events-auto rounded-xl bg-white px-5 py-3 shadow-xl">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#CFE8D2]">
              <MapPin className="h-5 w-5 text-[#8DBE91]" />
            </div>
            <div>
              <span className="block font-bold text-[#1F4E5F]">{labels.locationLabel}</span>
              <span className="text-sm text-[#6B7280]">{labels.partnersCountLabel}</span>
            </div>
          </div>
        </div>
      </div>

      {selectedPartner && (
        <a
          href={getGoogleMapsDirectionsUrl(selectedPartner)}
          target="_blank"
          rel="noopener noreferrer"
          className="sr-only"
        >
          {labels.openInGoogleMapsLabel}
          <ExternalLink className="h-4 w-4" />
        </a>
      )}
    </div>
  );
}
