'use client';

import dynamic from 'next/dynamic';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { ExternalLink, Instagram, Facebook, Navigation } from 'lucide-react';
import { useLanguage } from '@/lib/language-context';
import { partnerExperiences, partnerRestaurants } from '@/lib/data';
import { Carousel, CarouselApi, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

const PartnersMap = dynamic(
  () => import('@/components/partners/partners-map').then((mod) => mod.PartnersMap),
  {
    ssr: false,
    loading: () => (
      <div className="flex h-[380px] lg:h-[500px] items-center justify-center bg-[#E8F0EA]">
        <div className="h-10 w-10 animate-spin rounded-full border-2 border-[#8DBE91] border-t-transparent" />
      </div>
    ),
  },
);

export function PartnershipsSection() {
  const { t, language } = useLanguage();

  return (
    <section id="partnerships" className="py-20 lg:py-28 bg-white scroll-mt-20">
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

        {/* Interactive partners map */}
        <div className="max-w-5xl mx-auto">
          <h3 className="font-serif text-2xl lg:text-3xl text-[#1F4E5F] mb-8 text-center">
            {t.partnerships.mapTitle}
          </h3>
          <div className="relative h-[380px] lg:h-[500px] overflow-hidden rounded-3xl bg-[#E5E7EB] shadow-[0_20px_50px_rgba(31,78,95,0.12)] ring-1 ring-[#1F4E5F]/5">
            <PartnersMap
              locationLabel={t.partnerships.mapLocation}
              partnersCountLabel={t.partnerships.mapPartnersCount}
              openInGoogleMapsLabel={t.partnerships.openInGoogleMaps}
              unavailableTitle={t.partnerships.mapUnavailableTitle}
              unavailableDescription={t.partnerships.mapUnavailableDescription}
              unavailableRestart={t.partnerships.mapUnavailableRestart}
              unavailableLoadError={t.partnerships.mapUnavailableLoadError}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function PartnerExperienceCard({ partner, t, language }: { partner: typeof partnerExperiences[0]; t: any; language: string }) {
  return (
    <div className="flex flex-col bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all group">
      {/* Image */}
      <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-[#7EBBD3]/30 to-[#1F4E5F]/30">
        {partner.image ? (
          <Image
            src={partner.image}
            alt={partner.name}
            fill
            loading="lazy"
            sizes="(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-white/80 text-sm font-medium">{partner.name}</span>
          </div>
        )}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-6 bg-[#CFE8D2]">
        <h4 className="font-bold text-lg text-[#1F4E5F] mb-4">
          {partner.name}
        </h4>
        
        <ul className="space-y-2 mb-6 flex-1">
          {(partner.description as Record<string, string[]>)[language]?.map((item, index) => (
            <li key={index} className="text-sm text-[#1F4E5F]/80 flex items-start gap-2">
              <span className="text-[#8DBE91] mt-1">&#x2022;</span>
              <span>{item}</span>
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
