'use client';

import { MapPin, Star, TrendingUp, Building2 } from 'lucide-react';
import { useLanguage } from '@/lib/language-context';
import { BOOKING_URL } from '@/lib/data';
import { routes } from '@/lib/navigation';

export function HeroSection() {
  const { t } = useLanguage();

  const trustBadges = [
    { icon: MapPin, label: t.hero.trustBadges.local },
    { icon: Star, label: t.hero.trustBadges.personalized },
    { icon: TrendingUp, label: t.hero.trustBadges.support },
  ] as const;

  const mobileTrustBadges = [
    { icon: MapPin, label: t.hero.trustBadges.local },
    { icon: Star, label: t.hero.trustBadges.personalizedShort },
    { icon: TrendingUp, label: t.hero.trustBadges.support },
  ] as const;

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/images/HeroSection.png')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#1F4E5F]/40 via-[#1F4E5F]/20 to-[#1F4E5F]/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 pt-28 lg:pt-32">
        <div className="max-w-5xl mx-auto">
          {/* Main Card - Premium glass morphism */}
          <div className="bg-white/97 backdrop-blur-lg rounded-3xl p-8 md:p-12 lg:p-14 shadow-2xl border border-white/50">
            {/* Location Badge */}
            <div className="flex justify-center mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#CFE8D2] text-[#1F4E5F] text-sm font-medium rounded-full">
                <MapPin className="h-4 w-4 text-[#8DBE91]" />
                Sesimbra, Portugal
              </span>
            </div>

            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-[#1F4E5F] leading-tight mb-6 text-center text-balance">
              {t.hero.headline}
            </h1>
            
            <p className="text-lg md:text-xl text-[#6B7280] mb-10 max-w-3xl mx-auto leading-relaxed text-center text-pretty">
              {t.hero.subheadline}
            </p>

            {/* Primary CTA Buttons - Larger and more prominent */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-4 md:mb-10">
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 px-10 py-5 text-lg font-bold text-white bg-[#8DBE91] hover:bg-[#7AAD7E] rounded-full transition-all shadow-xl hover:shadow-2xl hover:scale-105 ring-4 ring-[#8DBE91]/20"
              >
                {t.hero.bookNow}
              </a>
              <a
                href={routes.owners}
                className="group inline-flex items-center justify-center gap-2 px-10 py-5 text-lg font-bold text-[#1F4E5F] bg-white border-2 border-[#1F4E5F] hover:bg-[#1F4E5F] hover:text-white rounded-full transition-all shadow-lg hover:shadow-xl"
              >
                <Building2 className="h-5 w-5" />
                {t.hero.imOwner}
              </a>
            </div>

            {/* Trust Badges - Mobile: static 2+1 grid */}
            <div className="md:hidden hero-benefits-fade-in max-w-full overflow-visible">
              <div className="grid grid-cols-2 gap-2.5 justify-items-center">
                {mobileTrustBadges.map(({ icon: Icon, label }, index) =>
                  index < 2 ? (
                    <div
                      key={label}
                      className="flex h-11 w-full items-center justify-center gap-1.5 rounded-full border border-[#E5E7EB]/80 bg-[#F7FAF8]/95 px-3 shadow-[0_1px_4px_rgba(31,78,95,0.06)] backdrop-blur-sm"
                    >
                      <Icon className="h-3.5 w-3.5 shrink-0 text-[#1F4E5F]" aria-hidden="true" />
                      <span className="text-xs font-semibold leading-tight text-[#1F4E5F]">
                        {label}
                      </span>
                    </div>
                  ) : (
                    <div key={label} className="col-span-2 flex justify-center">
                      <div className="inline-flex h-11 items-center gap-2 rounded-full border border-[#E5E7EB]/80 bg-[#F7FAF8]/95 px-4 shadow-[0_1px_4px_rgba(31,78,95,0.06)] backdrop-blur-sm">
                        <Icon className="h-3.5 w-3.5 shrink-0 text-[#1F4E5F]" aria-hidden="true" />
                        <span className="text-xs font-semibold leading-tight text-[#1F4E5F]">
                          {label}
                        </span>
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>

            {/* Trust Badges - Desktop/tablet: unchanged */}
            <div className="hidden md:flex flex-wrap justify-center gap-4 lg:gap-8 pt-8 border-t border-[#E5E7EB]">
              {trustBadges.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-3 px-4 py-2 bg-[#F8FAF8] rounded-full"
                >
                  <div className="w-10 h-10 bg-[#CFE8D2] rounded-full flex items-center justify-center">
                    <Icon className="h-5 w-5 text-[#8DBE91]" aria-hidden="true" />
                  </div>
                  <span className="text-sm font-semibold text-[#1F4E5F]">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
        <div className="w-6 h-10 border-2 border-white/60 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-white/80 rounded-full" />
        </div>
      </div>
    </section>
  );
}
