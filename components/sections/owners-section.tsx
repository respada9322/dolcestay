'use client';

import { Check, ClipboardList, LineChart, Settings, ArrowRight, Shield, TrendingUp, Users2, Sparkles, Calendar, MessageCircle, Banknote } from 'lucide-react';
import { useLanguage } from '@/lib/language-context';

export function OwnersSection() {
  const { t } = useLanguage();

  const benefits = [
    { icon: Shield, text: t.owners.benefits.fullManagement },
    { icon: TrendingUp, text: t.owners.benefits.visibility },
    { icon: Users2, text: t.owners.benefits.localSupport },
    { icon: MessageCircle, text: t.owners.benefits.guestComm },
    { icon: Sparkles, text: t.owners.benefits.cleaningMaint },
    { icon: Banknote, text: t.owners.benefits.pricingOpt },
    { icon: Calendar, text: t.owners.benefits.bookingMgmt },
    { icon: Check, text: t.owners.benefits.personalized },
  ];

  const steps = [
    { icon: ClipboardList, ...t.owners.steps.step1 },
    { icon: LineChart, ...t.owners.steps.step2 },
    { icon: Settings, ...t.owners.steps.step3 },
  ];

  return (
    <section id="owners" className="py-20 lg:py-28 bg-gradient-to-b from-[#F8FAF8] to-white scroll-mt-20">
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

        {/* Value Proposition Banner */}
        <div className="bg-gradient-to-r from-[#1F4E5F] to-[#2D6A7A] rounded-3xl p-8 lg:p-12 mb-16 text-white text-center shadow-2xl">
          <h3 className="font-serif text-2xl lg:text-3xl mb-4">
            {t.owners.whyTitle}
          </h3>
          <p className="text-white/90 max-w-3xl mx-auto text-lg leading-relaxed">
            {t.owners.whyDescription}
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

        {/* How It Works - Enhanced steps */}
        <div className="max-w-5xl mx-auto mb-16">
          <h3 className="font-serif text-2xl lg:text-3xl text-[#1F4E5F] text-center mb-12">
            {t.owners.steps.title}
          </h3>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-16 left-[60%] w-[80%] h-1 bg-gradient-to-r from-[#CFE8D2] to-[#8DBE91] rounded-full" />
                )}
                
                <div className="text-center">
                  <div className="relative inline-flex mb-6">
                    <div className="w-28 h-28 bg-white rounded-3xl shadow-xl flex items-center justify-center border-2 border-[#CFE8D2]">
                      <step.icon className="h-12 w-12 text-[#8DBE91]" />
                    </div>
                    <span className="absolute -top-3 -right-3 w-10 h-10 bg-[#8DBE91] text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
                      {index + 1}
                    </span>
                  </div>
                  <h4 className="font-bold text-xl text-[#1F4E5F] mb-3">
                    {step.title}
                  </h4>
                  <p className="text-[#6B7280] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Strong CTA */}
        <div className="text-center bg-[#CFE8D2] rounded-3xl p-10 lg:p-14 max-w-3xl mx-auto shadow-lg">
          <h3 className="font-serif text-2xl lg:text-3xl text-[#1F4E5F] mb-4">
            {t.owners.ctaTitle}
          </h3>
          <p className="text-[#1F4E5F]/80 mb-8 max-w-xl mx-auto">
            {t.owners.ctaDescription}
          </p>
          <a
            href="#contact"
            className="group inline-flex items-center justify-center gap-2 px-10 py-5 text-lg font-bold text-white bg-[#1F4E5F] hover:bg-[#163B48] rounded-full transition-all shadow-xl hover:shadow-2xl hover:scale-105"
          >
            {t.owners.cta}
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}
