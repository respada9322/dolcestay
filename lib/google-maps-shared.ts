/** Shared Google Maps settings — hybrid view shows street labels over satellite imagery. */
export const HYBRID_MAP_OPTIONS: google.maps.MapOptions = {
  disableDefaultUI: false,
  zoomControl: true,
  mapTypeControl: false,
  streetViewControl: false,
  fullscreenControl: true,
  gestureHandling: 'cooperative',
  mapTypeId: 'hybrid',
};

export const DOLCESTAY_OFFICE = {
  lat: 38.4444,
  lng: -9.1015,
  zoom: 16,
  mapsSearchUrl:
    'https://www.google.com/maps/search/?api=1&query=Av.+da+Liberdade+58%2F60%2C+2970-635+Sesimbra%2C+Portugal',
  mapTitle: 'Mapa de DolceStay em Sesimbra',
} as const;

export function attachTransitLayer(map: google.maps.Map): google.maps.TransitLayer {
  const transitLayer = new google.maps.TransitLayer();
  transitLayer.setMap(map);
  return transitLayer;
}
