'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { MapPin, Users, Bed, Wifi, Car, Waves, TreePine, Building, Sun, Wind, Star, Tv } from 'lucide-react';
import { useLanguage } from '@/lib/language-context';
import { featuredAccommodations } from '@/lib/data';
import { AccommodationsCta } from '@/components/sections/accommodations-cta';
import { Carousel, CarouselApi, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

const featureIcons: Record<string, React.ReactNode> = {
  seaView: <Waves className="h-3.5 w-3.5" />,
  pool: <Waves className="h-3.5 w-3.5" />,
  garden: <TreePine className="h-3.5 w-3.5" />,
  center: <Building className="h-3.5 w-3.5" />,
  terrace: <Sun className="h-3.5 w-3.5" />,
  modern: <Building className="h-3.5 w-3.5" />,
  beach: <Waves className="h-3.5 w-3.5" />,
  wifi: <Wifi className="h-3.5 w-3.5" />,
  parking: <Car className="h-3.5 w-3.5" />,
  aircon: <Wind className="h-3.5 w-3.5" />,
  tv: <Tv className="h-3.5 w-3.5" />,
};

function AccommodationImageSlideshow({
  images,
  title,
  bookingUrl,
}: {
  images: string[];
  title: string;
  bookingUrl: string;
}) {
  const [api, setApi] = useState<CarouselApi>();
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    if (!api) return;

    const updateState = () => {
      setSelectedIndex(api.selectedScrollSnap());
    };

    updateState();
    api.on('select', updateState);
    api.on('reInit', updateState);

    return () => {
      api.off('select', updateState);
      api.off('reInit', updateState);
    };
  }, [api]);

  const handleSlideControl = (direction: 'prev' | 'next') => (event: React.MouseEvent) => {
    event.preventDefault();
    event.stopPropagation();
    if (direction === 'prev') {
      api?.scrollPrev();
    } else {
      api?.scrollNext();
    }
  };

  return (
    <div className="absolute inset-0">
      <Carousel
        setApi={setApi}
        opts={{ loop: true }}
        className="h-full w-full"
      >
        <CarouselContent className="ml-0">
          {images.map((image, imageIndex) => (
            <CarouselItem key={image} className="basis-full pl-0">
              <a
                href={bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="relative block aspect-[4/3] w-full"
                aria-label={title}
              >
                <Image
                  src={image}
                  alt={`${title} - ${imageIndex + 1}`}
                  fill
                  loading={imageIndex === 0 ? 'eager' : 'lazy'}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </a>
            </CarouselItem>
          ))}
        </CarouselContent>
        {images.length > 1 && (
          <>
            <CarouselPrevious
              type="button"
              disabled={false}
              className="left-2 top-1/2 z-20 h-8 w-8 -translate-y-1/2 border-0 bg-white/95 text-[#1F4E5F] opacity-90 shadow-md backdrop-blur-sm hover:bg-white sm:opacity-100"
              onClick={handleSlideControl('prev')}
            />
            <CarouselNext
              type="button"
              disabled={false}
              className="right-2 top-1/2 z-20 h-8 w-8 -translate-y-1/2 border-0 bg-white/95 text-[#1F4E5F] opacity-90 shadow-md backdrop-blur-sm hover:bg-white sm:opacity-100"
              onClick={handleSlideControl('next')}
            />
            <div className="pointer-events-none absolute bottom-3 left-1/2 z-20 -translate-x-1/2 rounded-full bg-black/45 px-2.5 py-0.5 text-[10px] font-medium text-white backdrop-blur-sm">
              {selectedIndex + 1} / {images.length}
            </div>
          </>
        )}
      </Carousel>
    </div>
  );
}

export function AccommodationsPreview() {
  const { t } = useLanguage();
  const subtitleById = Object.fromEntries(
    t.accommodations.items.map((item) => [item.id, item.subtitle])
  ) as Record<number, string>;

  return (
    <section id="accommodations" className="py-20 lg:py-28 bg-[#F8FAF8] scroll-mt-20">
      <div className="container mx-auto px-4">
        {/* Section Header - SEO optimized */}
        <div className="text-center mb-14">
          <span className="inline-block px-4 py-1.5 bg-[#CFE8D2] text-[#1F4E5F] text-sm font-semibold rounded-full mb-4">
            {t.accommodations.badge}
          </span>
          <h2 className="font-serif text-3xl lg:text-4xl xl:text-5xl text-[#1F4E5F] mb-4">
            {t.accommodations.title}
          </h2>
          <p className="text-[#6B7280] max-w-2xl mx-auto text-lg">
            {t.accommodations.subtitle}
          </p>
        </div>

        {/* Accommodation Grid - Improved cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-12">
          {featuredAccommodations.map((accommodation, index) => (
            <div
              key={accommodation.id}
              className={`group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 ${
                index === 0 ? 'ring-2 ring-[#8DBE91] ring-offset-2' : ''
              }`}
            >
              {/* Image with overlay */}
              <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-[#7EBBD3]/40 to-[#1F4E5F]/40">
                {'images' in accommodation && accommodation.images?.length ? (
                  <AccommodationImageSlideshow
                    images={accommodation.images}
                    title={accommodation.title}
                    bookingUrl={accommodation.bookingUrl}
                  />
                ) : (
                  <a
                    href={accommodation.bookingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute inset-0 flex items-center justify-center"
                    aria-label={accommodation.title}
                  >
                    <span className="text-white/80 text-sm font-medium">Sesimbra</span>
                  </a>
                )}
                <div className="pointer-events-none absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/10" />
                
                {/* Price badge */}
                <div className="pointer-events-none absolute top-3 right-3 z-10 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-lg">
                  <span className="text-xs text-[#6B7280]">{t.accommodations.from}</span>
                  <span className="block text-lg font-bold text-[#1F4E5F]">
                    &euro;{accommodation.price}
                    <span className="text-xs font-normal text-[#6B7280]">{t.accommodations.perNight}</span>
                  </span>
                </div>

                {/* Featured badge for first item */}
                {index === 0 && (
                  <div className="pointer-events-none absolute top-3 left-3 z-10 bg-[#8DBE91] text-white px-3 py-1 rounded-full text-xs font-bold">
                    {t.accommodations.featured}
                  </div>
                )}
              </div>

              {/* Content */}
              <a
                href={accommodation.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-5"
              >
                <h3 className="font-semibold text-[#1F4E5F] text-lg mb-1 line-clamp-1 group-hover:text-[#8DBE91] transition-colors">
                  {accommodation.title}
                </h3>
                <p className="text-sm text-[#6B7280] mb-3 line-clamp-1">
                  {subtitleById[accommodation.id]}
                </p>

                {/* Location with rating */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-[#8DBE91] text-sm">
                    <MapPin className="h-4 w-4" />
                    <span>{accommodation.location}</span>
                  </div>
                  <div className="flex items-center gap-1 text-[#F59E0B]">
                    <Star className="h-4 w-4 fill-current" />
                    <span className="text-sm font-medium text-[#1F4E5F]">4.9</span>
                  </div>
                </div>

                {/* Features */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {accommodation.features.slice(0, 3).map((feature) => (
                    <span
                      key={feature}
                      className="inline-flex items-center gap-1 px-2 py-1 bg-[#F8FAF8] text-[#1F4E5F] text-xs rounded-lg"
                    >
                      {featureIcons[feature]}
                      {t.accommodations.features[feature]}
                    </span>
                  ))}
                </div>

                {/* Capacity */}
                <div className="flex items-center gap-4 pt-4 border-t border-[#E5E7EB]">
                  <span className="flex items-center gap-1.5 text-[#6B7280] text-sm">
                    <Users className="h-4 w-4" />
                    {accommodation.guests} {t.accommodations.guests}
                  </span>
                  <span className="flex items-center gap-1.5 text-[#6B7280] text-sm">
                    <Bed className="h-4 w-4" />
                    {accommodation.bedrooms} {t.accommodations.bedrooms}
                  </span>
                </div>
              </a>
            </div>
          ))}
        </div>

        <AccommodationsCta />
      </div>
    </section>
  );
}
