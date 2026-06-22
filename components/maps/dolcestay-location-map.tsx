'use client';

import { useCallback, useEffect, useState } from 'react';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import {
  getGoogleMapsApiKey,
  hasGoogleMapsApiKey,
} from '@/lib/google-maps-config';
import {
  attachTransitLayer,
  DOLCESTAY_OFFICE,
  HYBRID_MAP_OPTIONS,
} from '@/lib/google-maps-shared';

const MAP_CONTAINER_STYLE = { width: '100%', height: '100%' };
const MAP_LIBRARIES: never[] = [];

const OFFICE_POSITION = { lat: DOLCESTAY_OFFICE.lat, lng: DOLCESTAY_OFFICE.lng };

type DolceStayLocationMapLabels = {
  unavailableDescription: string;
  unavailableLoadError: string;
  unavailableReferrerError: string;
};

function MapFallback({ message }: { message: string }) {
  return (
    <div className="flex h-full min-h-[420px] items-center justify-center bg-[#E8F0EA] px-4 sm:min-h-[520px] md:min-h-[600px]">
      <p className="text-center text-sm text-[#6B7280]">{message}</p>
    </div>
  );
}

export function DolceStayLocationMap(labels: DolceStayLocationMapLabels) {
  const apiKey = getGoogleMapsApiKey();

  if (!hasGoogleMapsApiKey()) {
    return <MapFallback message={labels.unavailableDescription} />;
  }

  return <DolceStayLocationMapLoaded apiKey={apiKey} labels={labels} />;
}

function DolceStayLocationMapLoaded({
  apiKey,
  labels,
}: {
  apiKey: string;
  labels: DolceStayLocationMapLabels;
}) {
  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: apiKey,
    libraries: MAP_LIBRARIES,
  });

  const [authFailure, setAuthFailure] = useState(false);
  const [map, setMap] = useState<google.maps.Map | null>(null);

  const onMapLoad = useCallback((loadedMap: google.maps.Map) => {
    setMap(loadedMap);
  }, []);

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

    const transitLayer = attachTransitLayer(map);

    const officeMarker = new google.maps.Marker({
      position: OFFICE_POSITION,
      map,
      title: 'DolceStay',
    });

    return () => {
      transitLayer.setMap(null);
      officeMarker.setMap(null);
    };
  }, [map, isLoaded]);

  if (loadError || authFailure) {
    return (
      <MapFallback
        message={authFailure ? labels.unavailableReferrerError : labels.unavailableLoadError}
      />
    );
  }

  if (!isLoaded) {
    return (
      <div className="flex h-full min-h-[420px] items-center justify-center bg-[#E8F0EA] sm:min-h-[520px] md:min-h-[600px]">
        <div
          className="h-10 w-10 animate-spin rounded-full border-2 border-[#8DBE91] border-t-transparent"
          role="status"
          aria-label="Loading map"
        />
      </div>
    );
  }

  return (
    <GoogleMap
      mapContainerStyle={MAP_CONTAINER_STYLE}
      center={OFFICE_POSITION}
      zoom={DOLCESTAY_OFFICE.zoom}
      onLoad={onMapLoad}
      options={HYBRID_MAP_OPTIONS}
    />
  );
}

export { DOLCESTAY_OFFICE };
