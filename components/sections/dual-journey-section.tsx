'use client';

import { Home, Users, ArrowRight, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '@/lib/language-context';
import { BOOKING_URL } from '@/lib/data';
import { routes } from '@/lib/navigation';

export function DualJourneySection() {
  const { t } = useLanguage();

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="container mx-auto px-4">
        {/* Section intro */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="font-serif text-3xl lg:text-4xl text-[#1F4E5F] mb-4">
            {t.dualJourney.heading}
          </h2>
          <p className="text-[#6B7280] max-w-2xl mx-auto">
            {t.dualJourney.description}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {/* Guest Card - Primary/Highlighted */}
          <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#7EBBD3] to-[#1F4E5F] p-8 lg:p-10 text-white shadow-2xl hover:shadow-3xl transition-all hover:scale-[1.02]">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />
            
            {/* Featured badge */}
            <div className="absolute top-4 right-4">
              <span className="px-3 py-1 bg-white/20 text-white text-xs font-bold rounded-full uppercase tracking-wide">
                {t.dualJourney.guestBadge}
              </span>
            </div>
            
            <div className="relative z-10">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-2xl mb-8">
                <Home className="h-10 w-10" />
              </div>
              
              <h2 className="font-serif text-2xl lg:text-3xl mb-4">
                {t.dualJourney.guest.title}
              </h2>
              
              <p className="text-white/90 mb-6 leading-relaxed text-lg">
                {t.dualJourney.guest.description}
              </p>

              {/* Quick benefits */}
              <ul className="space-y-2 mb-8">
                <li className="flex items-center gap-2 text-white/85">
                  <CheckCircle2 className="h-5 w-5 text-[#CFE8D2]" />
                  <span className="text-sm">{t.dualJourney.guestBenefits.homes}</span>
                </li>
                <li className="flex items-center gap-2 text-white/85">
                  <CheckCircle2 className="h-5 w-5 text-[#CFE8D2]" />
                  <span className="text-sm">{t.dualJourney.guestBenefits.booking}</span>
                </li>
                <li className="flex items-center gap-2 text-white/85">
                  <CheckCircle2 className="h-5 w-5 text-[#CFE8D2]" />
                  <span className="text-sm">{t.dualJourney.guestBenefits.support}</span>
                </li>
              </ul>
              
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group/btn inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-[#1F4E5F] font-bold rounded-full hover:bg-[#CFE8D2] transition-all shadow-lg"
              >
                {t.dualJourney.guest.cta}
                <ArrowRight className="h-5 w-5 group-hover/btn:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* Owner Card - Secondary but prominent */}
          <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#CFE8D2] to-[#8DBE91] p-8 lg:p-10 text-[#1F4E5F] shadow-2xl hover:shadow-3xl transition-all hover:scale-[1.02]">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-white/20 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2" />
            
            {/* Badge */}
            <div className="absolute top-4 right-4">
              <span className="px-3 py-1 bg-[#1F4E5F]/20 text-[#1F4E5F] text-xs font-bold rounded-full uppercase tracking-wide">
                {t.dualJourney.ownerBadge}
              </span>
            </div>
            
            <div className="relative z-10">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-white/50 rounded-2xl mb-8">
                <Users className="h-10 w-10" />
              </div>
              
              <h2 className="font-serif text-2xl lg:text-3xl mb-4">
                {t.dualJourney.owner.title}
              </h2>
              
              <p className="text-[#1F4E5F]/90 mb-6 leading-relaxed text-lg">
                {t.dualJourney.owner.description}
              </p>

              {/* Quick benefits for owners */}
              <ul className="space-y-2 mb-8">
                <li className="flex items-center gap-2 text-[#1F4E5F]/85">
                  <CheckCircle2 className="h-5 w-5 text-[#1F4E5F]" />
                  <span className="text-sm">{t.dualJourney.ownerBenefits.management}</span>
                </li>
                <li className="flex items-center gap-2 text-[#1F4E5F]/85">
                  <CheckCircle2 className="h-5 w-5 text-[#1F4E5F]" />
                  <span className="text-sm">{t.dualJourney.ownerBenefits.profitability}</span>
                </li>
                <li className="flex items-center gap-2 text-[#1F4E5F]/85">
                  <CheckCircle2 className="h-5 w-5 text-[#1F4E5F]" />
                  <span className="text-sm">{t.dualJourney.ownerBenefits.noWorries}</span>
                </li>
              </ul>
              
              <a
                href={routes.owners}
                className="group/btn inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#1F4E5F] text-white font-bold rounded-full hover:bg-[#163B48] transition-all shadow-lg"
              >
                {t.dualJourney.owner.cta}
                <ArrowRight className="h-5 w-5 group-hover/btn:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
