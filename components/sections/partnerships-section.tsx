'use client';

import dynamic from 'next/dynamic';
import Image from 'next/image';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { ExternalLink, Instagram, Facebook, Navigation } from 'lucide-react';
import { useLanguage } from '@/lib/language-context';
import { partnerExperiences, partnerRestaurants } from '@/lib/data';
import { Carousel, CarouselApi, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

const PARTNER_AUTOPLAY_INTERVAL = 4500;

const PartnersMap = dynamic(
  () => import('@/components/partners/partners-map').then((mod) => mod.PartnersMap),
  {
    ssr: false,
    loading: () => (
      <div className="flex h-[min(70vh,720px)] min-h-[420px] items-center justify-center bg-[#E8F0EA] sm:min-h-[520px] md:min-h-[600px]">
        <div className="h-10 w-10 animate-spin rounded-full border-2 border-[#8DBE91] border-t-transparent" />
      </div>
    ),
  },
);

export function PartnershipsSection() {
  const { t, language } = useLanguage();

  return (
    <section id="partnerships" className="pt-20 pb-0 lg:pt-28 bg-white scroll-mt-20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-14 lg:mb-20">
          <span className="inline-block px-4 py-1.5 bg-[#CFE8D2] text-[#1F4E5F] text-sm font-semibold rounded-full mb-4">
            {t.partnerships.subtitle}
          </span>
          <h1 className="font-serif text-3xl lg:text-4xl xl:text-5xl text-[#1F4E5F] mb-6">
            {t.partnerships.title}
          </h1>
          <p className="text-[#6B7280] max-w-3xl mx-auto text-lg leading-relaxed text-pretty">
            {t.partnerships.description}
          </p>
        </div>

        {/* Value proposition for guests */}
        <div className="bg-white rounded-2xl p-6 lg:p-8 mb-16 max-w-4xl mx-auto shadow-md border border-[#E5E7EB]">
          <div className="flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
            <div className="w-16 h-16 bg-[#CFE8D2] rounded-2xl flex items-center justify-center flex-shrink-0">
              <Navigation className="h-8 w-8 text-[#8DBE91]" />
            </div>
            <div>
              <h3 className="font-semibold text-lg text-[#1F4E5F] mb-2">
                {t.partnerships.exclusiveTitle}
              </h3>
              <p className="text-[#6B7280]">
                {t.partnerships.exclusiveDescription}
              </p>
            </div>
          </div>
        </div>

        {/* Tourist Experiences */}
        <div className="mb-20">
          <h3 className="font-serif text-2xl lg:text-3xl text-[#1F4E5F] mb-10 text-center">
            {t.partnerships.categories.experiences}
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {partnerExperiences.map((partner) => (
              <PartnerExperienceCard key={partner.id} partner={partner} t={t} language={language} />
            ))}
          </div>
        </div>

        {/* Restaurants & Bars */}
        <div className="mb-20">
          <h3 className="font-serif text-2xl lg:text-3xl text-[#1F4E5F] mb-10 text-center">
            {t.partnerships.categories.restaurants}
          </h3>
          <PartnerRestaurantsCarousel partners={partnerRestaurants} t={t} />
        </div>

        {/* Map title */}
        <h3 className="font-serif text-2xl lg:text-3xl text-[#1F4E5F] mb-8 text-center">
          {t.partnerships.mapTitle}
        </h3>
      </div>

      {/* Full-width partners map */}
      <div className="relative w-full overflow-hidden">
        <div className="relative h-[min(70vh,720px)] min-h-[420px] w-full bg-[#E5E7EB] sm:min-h-[520px] md:min-h-[600px]">
          <PartnersMap
            locationLabel={t.partnerships.mapLocation}
            partnersCountLabel={t.partnerships.mapPartnersCount}
            openInGoogleMapsLabel={t.partnerships.openInGoogleMaps}
            categoryExperiencesLabel={t.partnerships.categories.experiences}
            categoryRestaurantsLabel={t.partnerships.categories.restaurants}
            unavailableTitle={t.partnerships.mapUnavailableTitle}
            unavailableDescription={t.partnerships.mapUnavailableDescription}
            unavailableRestart={t.partnerships.mapUnavailableRestart}
            unavailableLoadError={t.partnerships.mapUnavailableLoadError}
            unavailableReferrerError={t.partnerships.mapUnavailableReferrerError}
          />
        </div>
      </div>
    </section>
  );
}

function PartnerImageGallery({ images, name }: { images: string[]; name: string }) {
  const [api, setApi] = useState<CarouselApi>();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

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

  useEffect(() => {
    if (!api || images.length <= 1 || isPaused) return;

    const timer = window.setInterval(() => {
      api.scrollNext();
    }, PARTNER_AUTOPLAY_INTERVAL);

    return () => window.clearInterval(timer);
  }, [api, images.length, isPaused, selectedIndex]);

  const handleSlideControl = useCallback(
    (direction: 'prev' | 'next') => (event: React.MouseEvent) => {
      event.preventDefault();
      event.stopPropagation();
      if (direction === 'prev') {
        api?.scrollPrev();
      } else {
        api?.scrollNext();
      }
    },
    [api],
  );

  if (images.length === 0) {
    return (
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-white/80 text-sm font-medium">{name}</span>
      </div>
    );
  }

  if (images.length === 1) {
    return (
      <Image
        src={images[0]}
        alt={name}
        fill
        loading="lazy"
        sizes="(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 33vw"
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />
    );
  }

  return (
    <div
      className="absolute inset-0"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocusCapture={() => setIsPaused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) {
          setIsPaused(false);
        }
      }}
    >
      <Carousel setApi={setApi} opts={{ loop: true }} className="h-full w-full">
        <CarouselContent className="ml-0 h-full">
          {images.map((image, imageIndex) => (
            <CarouselItem key={image} className="basis-full pl-0">
              <div className="relative aspect-[16/10] w-full">
                <Image
                  src={image}
                  alt={`${name} - ${imageIndex + 1}`}
                  fill
                  loading={imageIndex === 0 ? 'eager' : 'lazy'}
                  sizes="(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious
          type="button"
          variant="ghost"
          disabled={false}
          className="left-2 top-1/2 z-20 h-10 w-10 -translate-y-1/2 rounded-none border-0 bg-transparent p-0 text-white shadow-none hover:bg-transparent hover:text-white/85 [&_svg]:size-7 [&_svg]:drop-shadow-[0_1px_4px_rgba(0,0,0,0.65)]"
          onClick={handleSlideControl('prev')}
        />
        <CarouselNext
          type="button"
          variant="ghost"
          disabled={false}
          className="right-2 top-1/2 z-20 h-10 w-10 -translate-y-1/2 rounded-none border-0 bg-transparent p-0 text-white shadow-none hover:bg-transparent hover:text-white/85 [&_svg]:size-7 [&_svg]:drop-shadow-[0_1px_4px_rgba(0,0,0,0.65)]"
          onClick={handleSlideControl('next')}
        />
        <div className="pointer-events-none absolute bottom-3 left-1/2 z-20 flex -translate-x-1/2 items-center gap-1.5 rounded-full bg-[#1F4E5F]/55 px-2.5 py-1 backdrop-blur-sm">
          {images.map((image, index) => (
            <span
              key={image}
              className={`h-1.5 rounded-full transition-all ${
                selectedIndex === index ? 'w-4 bg-white' : 'w-1.5 bg-white/45'
              }`}
            />
          ))}
        </div>
      </Carousel>
    </div>
  );
}

function PartnerExperienceCard({ partner, t, language }: { partner: typeof partnerExperiences[0]; t: any; language: string }) {
  const galleryImages = useMemo(() => {
    const photos = partner.images.filter((image) => /photo/i.test(image));
    return photos.length > 0 ? photos : partner.image ? [partner.image] : [];
  }, [partner.image, partner.images]);

  return (
    <div className="flex flex-col bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all group">
      {/* Image */}
      <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-[#7EBBD3]/30 to-[#1F4E5F]/30">
        <PartnerImageGallery images={galleryImages} name={partner.name} />
        <div className="pointer-events-none absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-6 bg-[#CFE8D2]">
        <h4 className="font-bold text-lg text-[#1F4E5F] mb-4">
          {partner.name}
        </h4>
        
        <ul className="list-disc space-y-2 mb-6 flex-1 pl-5 marker:text-[#8DBE91]">
          {(partner.description as Record<string, string[]>)[language]?.map((item, index) => (
            <li key={index} className="text-sm text-[#1F4E5F]/80">
              {item}
            </li>
          ))}
        </ul>

        {/* Actions */}
        <div className="flex items-center justify-between pt-4 border-t border-[#8DBE91]/30">
          <div className="flex gap-1">
            {partner.instagram && (
              <a
                href={partner.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-[#1F4E5F] hover:text-[#8DBE91] hover:bg-white/50 rounded-lg transition-all"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            )}
            {partner.facebook && (
              <a
                href={partner.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-[#1F4E5F] hover:text-[#8DBE91] hover:bg-white/50 rounded-lg transition-all"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
            )}
          </div>
          <a
            href={partner.website}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-[#1F4E5F] text-white text-sm font-semibold rounded-full hover:bg-[#163B48] transition-colors shadow-md"
          >
            {t.partnerships.learnMore}
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </div>
    </div>
  );
}

function PartnerRestaurantCard({ partner, t }: { partner: typeof partnerRestaurants[0]; t: any }) {
  return (
    <a
      href={partner.website}
      target="_blank"
      rel="noopener noreferrer"
      className="group block h-full overflow-hidden rounded-[28px] border border-[#1F4E5F]/8 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-[#1F4E5F]/15 hover:shadow-[0_8px_24px_rgba(31,78,95,0.1)]"
    >
      {/* Image */}
      <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-[#D8E6EC] to-[#BCD4DC]">
        <Image
          src={partner.image}
          alt={partner.name}
          fill
          loading="lazy"
          sizes="(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 25vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1F4E5F]/20 via-transparent to-transparent opacity-70 transition-opacity duration-300 group-hover:opacity-90" />
      </div>

      {/* Content */}
      <div className="bg-gradient-to-b from-[#E5F2E8] to-[#DDEDE1] px-5 py-4">
        <h4 className="mb-1 line-clamp-1 text-base font-bold text-[#1F4E5F] transition-colors group-hover:text-[#18404F]">{partner.name}</h4>
        <p className="text-sm text-[#1F4E5F]/70">
          {t.partnerships.typeLabels[partner.type as keyof typeof t.partnerships.typeLabels]}
        </p>
      </div>
    </a>
  );
}

function PartnerRestaurantsCarousel({ partners, t }: { partners: typeof partnerRestaurants; t: any }) {
  const [api, setApi] = useState<CarouselApi>();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [snapCount, setSnapCount] = useState(0);

  useEffect(() => {
    if (!api) return;

    const updateState = () => {
      setSelectedIndex(api.selectedScrollSnap());
      setSnapCount(api.scrollSnapList().length);
    };

    updateState();
    api.on('select', updateState);
    api.on('reInit', updateState);

    return () => {
      api.off('select', updateState);
      api.off('reInit', updateState);
    };
  }, [api]);

  return (
    <div className="relative mx-auto w-full max-w-6xl px-1 sm:px-10">
      <Carousel
        setApi={setApi}
        opts={{
          align: 'start',
          loop: true,
          slidesToScroll: 'auto',
        }}
        className="w-full overflow-hidden"
      >
        <CarouselContent className="-ml-5">
          {partners.map((partner) => (
            <CarouselItem key={partner.id} className="basis-full pl-5 md:basis-1/2 xl:basis-1/4">
              <PartnerRestaurantCard partner={partner} t={t} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-0 top-1/2 z-10 hidden h-11 w-11 -translate-y-1/2 rounded-full border border-[#1F4E5F]/10 bg-white/95 text-[#1F4E5F] shadow-lg backdrop-blur-sm transition-all hover:bg-white hover:text-[#18404F] md:flex" />
        <CarouselNext className="right-0 top-1/2 z-10 hidden h-11 w-11 -translate-y-1/2 rounded-full border border-[#1F4E5F]/10 bg-white/95 text-[#1F4E5F] shadow-lg backdrop-blur-sm transition-all hover:bg-white hover:text-[#18404F] md:flex" />
      </Carousel>

      {snapCount > 1 && (
        <div className="mt-6 flex items-center justify-center gap-2">
          {Array.from({ length: snapCount }).map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => api?.scrollTo(index)}
              className={`h-2 rounded-full transition-all ${
                selectedIndex === index ? 'w-6 bg-[#1F4E5F]' : 'w-2 bg-[#1F4E5F]/20 hover:bg-[#1F4E5F]/40'
              }`}
              aria-label={`${t.partnerships.categories.restaurants} ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
