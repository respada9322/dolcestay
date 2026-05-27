'use client';

import dynamic from 'next/dynamic';
import { ExternalLink, Instagram, Facebook, Navigation } from 'lucide-react';
import { useLanguage } from '@/lib/language-context';
import { partnerExperiences, partnerRestaurants } from '@/lib/data';

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
    <section id="partnerships" className="py-20 lg:py-28 bg-[#F8FAF8] scroll-mt-20">
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
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {partnerRestaurants.map((partner) => (
              <PartnerRestaurantCard key={partner.id} partner={partner} t={t} />
            ))}
          </div>
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
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-white/80 text-sm font-medium">{partner.name}</span>
        </div>
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
      className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all group hover:-translate-y-1"
    >
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-[#7EBBD3]/20 to-[#1F4E5F]/20">
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-[#1F4E5F]/50 text-xs font-medium">{partner.name}</span>
        </div>
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
      </div>

      {/* Content */}
      <div className="p-4 bg-gradient-to-b from-[#CFE8D2]/80 to-[#CFE8D2]/50">
        <h4 className="font-semibold text-[#1F4E5F] mb-0.5 group-hover:text-[#8DBE91] transition-colors line-clamp-1">{partner.name}</h4>
        <p className="text-sm text-[#1F4E5F]/70">{t.partnerships.typeLabels[partner.type as keyof typeof t.partnerships.typeLabels]}</p>
      </div>
    </a>
  );
}
