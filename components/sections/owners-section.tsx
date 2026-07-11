'use client';

import { Check, Shield, TrendingUp, Wrench, Sparkles, Camera, Banknote, Gift } from 'lucide-react';
import { useLanguage } from '@/lib/language-context';
import { PremiumCtaCard } from '@/components/sections/premium-cta-card';
import { ownersContactSection } from '@/lib/navigation';

export function OwnersSection() {
  const { t } = useLanguage();

  const benefits = [
    { icon: Shield, text: t.owners.benefits.fullManagement },
    { icon: TrendingUp, text: t.owners.benefits.visibility },
    { icon: Banknote, text: t.owners.benefits.pricingOpt },
    { icon: Sparkles, text: t.owners.benefits.cleaningMaint },
    { icon: Wrench, text: t.owners.benefits.localSupport },
    { icon: Camera, text: t.owners.benefits.guestComm },
    { icon: Gift, text: t.owners.benefits.bookingMgmt },
    { icon: Check, text: t.owners.benefits.personalized },
  ];

  return (
    <section
      id="owners"
      className="scroll-mt-20 bg-ds-light bg-gradient-to-b from-ds-light from-75% to-white pt-10 pb-20 lg:pt-12 lg:pb-28"
    >
      <div className="container mx-auto px-4">
        {/* Section Header - SEO optimized */}
        <div className="text-center mb-14 lg:mb-20">
          <span className="inline-block px-4 py-1.5 bg-[#1F4E5F] text-white text-sm font-semibold rounded-full mb-4">
            {t.owners.badge}
          </span>
          <h2 className="font-serif text-3xl lg:text-4xl xl:text-5xl text-[#1F4E5F] mb-6 text-balance max-w-4xl mx-auto">
            {t.owners.title}
          </h2>
          <p className="text-[#6B7280] max-w-3xl mx-auto text-lg leading-relaxed text-pretty">
            {t.owners.subtitle}
          </p>
        </div>

        {/* Benefits Grid - Improved visual hierarchy */}
        <div className="max-w-5xl mx-auto mb-20">
          <h3 className="font-serif text-2xl text-[#1F4E5F] text-center mb-10">
            {t.owners.offersTitle}
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="group flex items-center gap-4 p-5 bg-white rounded-xl shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5 border border-[#E5E7EB]"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-[#CFE8D2] rounded-xl flex items-center justify-center group-hover:bg-[#8DBE91] transition-colors">
                  <benefit.icon className="h-6 w-6 text-[#1F4E5F] group-hover:text-white transition-colors" />
                </div>
                <span className="text-sm font-semibold text-[#1F4E5F]">{benefit.text}</span>
              </div>
            ))}
          </div>
        </div>

        <PremiumCtaCard
          title={t.owners.ctaTitle}
          description={t.owners.ctaDescription}
          pills={[
            t.owners.ctaPills.fastSetup,
            t.owners.ctaPills.dedicatedTeam,
            t.owners.ctaPills.premiumManagement,
          ]}
          ctaLabel={t.owners.cta}
          disclaimer={t.owners.ctaDisclaimer}
          href={ownersContactSection()}
        />
      </div>
    </section>
  );
}
