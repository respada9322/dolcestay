'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { MapPin, Users, Bed, Wifi, Car, Waves, TreePine, Building, Sun, Wind, Star, Tv, ArrowLeft, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/lib/language-context';
import { accommodations } from '@/lib/accommodations';
import { AccommodationsCta } from '@/components/sections/accommodations-cta';
import { Carousel, CarouselApi, CarouselContent, CarouselItem } from '@/components/ui/carousel';

const preloadImage = (src: string) => {
  if (!src || typeof window === 'undefined') return;
  const image = new window.Image();
  image.decoding = 'async';
  image.src = src;
};

const COVER_PRELOAD_AHEAD = 5;

const featureIcons: Record<string, React.ReactNode> = {
  seaView: <Waves className="h-4 w-4" />,
  pool: <Waves className="h-4 w-4" />,
  garden: <TreePine className="h-4 w-4" />,
  center: <Building className="h-4 w-4" />,
  terrace: <Sun className="h-4 w-4" />,
  modern: <Building className="h-4 w-4" />,
  beach: <Waves className="h-4 w-4" />,
  wifi: <Wifi className="h-4 w-4" />,
  parking: <Car className="h-4 w-4" />,
  aircon: <Wind className="h-4 w-4" />,
  tv: <Tv className="h-4 w-4" />,
};

function AccommodationImageSlideshow({
  images,
  title,
  bookingUrl,
  eager,
}: {
  images: string[];
  title: string;
  bookingUrl: string;
  eager?: boolean;
}) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const currentImage = images[selectedIndex];

  useEffect(() => {
    if (images.length < 2) return;
    preloadImage(images[(selectedIndex - 1 + images.length) % images.length]);
    preloadImage(images[(selectedIndex + 1) % images.length]);
  }, [images, selectedIndex]);

  if (!currentImage) {
    return (
      <a
        href={bookingUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute inset-0 flex items-center justify-center"
        aria-label={title}
      >
        <span className="text-white/80 text-base font-medium">Sesimbra</span>
      </a>
    );
  }

  const goTo = (direction: 'prev' | 'next') => (event: React.MouseEvent) => {
    event.preventDefault();
    event.stopPropagation();
    setSelectedIndex((index) => {
      if (direction === 'prev') {
        return (index - 1 + images.length) % images.length;
      }
      return (index + 1) % images.length;
    });
  };

  return (
    <div className="absolute inset-0">
      <a
        href={bookingUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="relative block h-full w-full"
        aria-label={title}
      >
        <Image
          src={currentImage}
          alt={`${title} - ${selectedIndex + 1}`}
          fill
          loading={eager || selectedIndex === 0 ? 'eager' : 'lazy'}
          sizes="(max-width: 640px) 92vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </a>
      {images.length > 1 && (
        <div className="absolute inset-x-3 bottom-3 z-20 flex items-center justify-between">
          <button
            type="button"
            onClick={goTo('prev')}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#1F4E5F] shadow-md transition hover:scale-105"
            aria-label={`${title} foto anterior`}
          >
            <ArrowLeft className="h-5 w-5" />
          </button>
          <div className="rounded-full bg-black/55 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
            {selectedIndex + 1} / {images.length}
          </div>
          <button
            type="button"
            onClick={goTo('next')}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#1F4E5F] shadow-md transition hover:scale-105"
            aria-label={`${title} foto seguinte`}
          >
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      )}
    </div>
  );
}

function CarouselNavButton({
  direction,
  onClick,
  disabled,
  label,
  size = 'md',
}: {
  direction: 'prev' | 'next';
  onClick: () => void;
  disabled: boolean;
  label: string;
  size?: 'md' | 'lg';
}) {
  const Icon = direction === 'prev' ? ArrowLeft : ArrowRight;
  const sizeClass = size === 'lg' ? 'h-14 w-14' : 'h-12 w-12';
  const iconClass = size === 'lg' ? 'h-6 w-6' : 'h-5 w-5';

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={label}
      className={`flex ${sizeClass} shrink-0 items-center justify-center rounded-full bg-[#1F4E5F] text-white shadow-lg transition hover:bg-[#163844] disabled:cursor-not-allowed disabled:bg-[#1F4E5F]/40 disabled:shadow-none`}
    >
      <Icon className={iconClass} />
    </button>
  );
}

export function AccommodationsPreview() {
  const { t } = useLanguage();
  const [api, setApi] = useState<CarouselApi>();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);

  useEffect(() => {
    if (!api) return;

    const updateState = () => {
      setSelectedIndex(api.selectedScrollSnap());
      setCanScrollPrev(api.canScrollPrev());
      setCanScrollNext(api.canScrollNext());
    };

    updateState();
    api.on('select', updateState);
    api.on('reInit', updateState);

    return () => {
      api.off('select', updateState);
      api.off('reInit', updateState);
    };
  }, [api]);

  useEffect(() => {
    for (let offset = -1; offset <= COVER_PRELOAD_AHEAD; offset += 1) {
      const house = accommodations[selectedIndex + offset];
      if (!house) continue;
      preloadImage(house.images[0]);
      preloadImage(house.images[1]);
    }
  }, [selectedIndex]);

  return (
    <section id="accommodations" className="py-20 lg:py-28 bg-[#F8FAF8] scroll-mt-20">
      <div className="container mx-auto px-4">
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

        <div className="mb-12">
          <div className="flex items-center gap-3 sm:gap-4">
            <div className="hidden md:block">
              <CarouselNavButton
                direction="prev"
                size="lg"
                onClick={() => api?.scrollPrev()}
                disabled={!canScrollPrev}
                label={t.accommodations.prev}
              />
            </div>

            <Carousel
              setApi={setApi}
              opts={{
                align: 'start',
                loop: false,
                slidesToScroll: 1,
              }}
              className="min-w-0 flex-1"
            >
            <CarouselContent className="-ml-6">
              {accommodations.map((accommodation, index) => (
                <CarouselItem
                  key={accommodation.slug}
                  className="basis-[85%] pl-6 sm:basis-[75%] md:basis-1/2 xl:basis-1/3"
                >
                  <div className="group h-full bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
                    <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-[#7EBBD3]/40 to-[#1F4E5F]/40">
                      <AccommodationImageSlideshow
                        images={accommodation.images}
                        title={accommodation.title}
                        bookingUrl={accommodation.bookingUrl}
                        eager={index <= selectedIndex + 3 && index >= selectedIndex - 1}
                      />
                      <div className="pointer-events-none absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/10" />

                      <div className="pointer-events-none absolute top-4 right-4 z-10 bg-white/95 backdrop-blur-sm px-3.5 py-2 rounded-full shadow-lg">
                        <span className="text-xs text-[#6B7280]">{t.accommodations.from}</span>
                        <span className="block text-xl font-bold leading-tight text-[#1F4E5F]">
                          &euro;{accommodation.price}
                          <span className="text-sm font-normal text-[#6B7280]">{t.accommodations.perNight}</span>
                        </span>
                      </div>
                    </div>

                    <a
                      href={accommodation.bookingUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block p-6"
                    >
                      <h3 className="font-semibold text-[#1F4E5F] text-xl mb-1.5 line-clamp-1 group-hover:text-[#8DBE91] transition-colors">
                        {accommodation.title}
                      </h3>
                      <p className="text-base text-[#6B7280] mb-4 line-clamp-2 min-h-[3rem]">
                        {accommodation.subtitle}
                      </p>

                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-1.5 text-[#8DBE91] text-sm">
                          <MapPin className="h-4 w-4" />
                          <span>{accommodation.location}</span>
                        </div>
                        <div className="flex items-center gap-1 text-[#F59E0B]">
                          <Star className="h-4 w-4 fill-current" />
                          <span className="text-sm font-medium text-[#1F4E5F]">4.9</span>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-5">
                        {accommodation.features.slice(0, 3).map((feature) => (
                          <span
                            key={feature}
                            className="inline-flex items-center gap-1.5 px-2.5 py-1.5 bg-[#F8FAF8] text-[#1F4E5F] text-sm rounded-lg"
                          >
                            {featureIcons[feature]}
                            {t.accommodations.features[feature]}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center gap-5 pt-4 border-t border-[#E5E7EB]">
                        <span className="flex items-center gap-1.5 text-[#6B7280] text-sm">
                          <Users className="h-5 w-5" />
                          {accommodation.guests} {t.accommodations.guests}
                        </span>
                        <span className="flex items-center gap-1.5 text-[#6B7280] text-sm">
                          <Bed className="h-5 w-5" />
                          {accommodation.bedrooms} {t.accommodations.bedrooms}
                        </span>
                      </div>
                    </a>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            </Carousel>

            <div className="hidden md:block">
              <CarouselNavButton
                direction="next"
                size="lg"
                onClick={() => api?.scrollNext()}
                disabled={!canScrollNext}
                label={t.accommodations.next}
              />
            </div>
          </div>

          <div className="mt-8 flex items-center justify-center gap-5">
            <div className="lg:hidden">
              <CarouselNavButton
                direction="prev"
                onClick={() => api?.scrollPrev()}
                disabled={!canScrollPrev}
                label={t.accommodations.prev}
              />
            </div>
            <p className="min-w-[5rem] text-center text-lg font-semibold text-[#1F4E5F]">
              {selectedIndex + 1} / {accommodations.length}
            </p>
            <div className="lg:hidden">
              <CarouselNavButton
                direction="next"
                onClick={() => api?.scrollNext()}
                disabled={!canScrollNext}
                label={t.accommodations.next}
              />
            </div>
          </div>
        </div>

        <AccommodationsCta />
      </div>
    </section>
  );
}
