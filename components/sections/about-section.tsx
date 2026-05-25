'use client';

import { MapPin, Award, Heart } from 'lucide-react';
import { useLanguage } from '@/lib/language-context';

export function AboutSection() {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-20 lg:py-28 bg-white scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-14">
            <span className="inline-block px-4 py-1.5 bg-[#CFE8D2] text-[#1F4E5F] text-sm font-semibold rounded-full mb-4">
              {t.about.subtitle}
            </span>
            <h2 className="font-serif text-3xl lg:text-4xl xl:text-5xl text-[#1F4E5F] mb-4">
              {t.about.title}
            </h2>
          </div>

          {/* Content with visual hierarchy */}
          <div className="grid lg:grid-cols-3 gap-8 mb-14">
            <div className="lg:col-span-2 space-y-6">
              <p className="text-[#6B7280] leading-relaxed text-lg">
                {t.about.description1}
              </p>
              <p className="text-[#6B7280] leading-relaxed text-lg">
                {t.about.description2}
              </p>
              <p className="text-[#6B7280] leading-relaxed text-lg">
                {t.about.description3}
              </p>
            </div>

            {/* Side stats/values */}
            <div className="space-y-4">
              <div className="bg-[#F8FAF8] rounded-2xl p-6 border border-[#E5E7EB]">
                <div className="w-12 h-12 bg-[#CFE8D2] rounded-xl flex items-center justify-center mb-4">
                  <MapPin className="h-6 w-6 text-[#8DBE91]" />
                </div>
                <h4 className="font-semibold text-[#1F4E5F] mb-2">
                  {t.about.stats.location.title}
                </h4>
                <p className="text-sm text-[#6B7280]">
                  {t.about.stats.location.description}
                </p>
              </div>

              <div className="bg-[#F8FAF8] rounded-2xl p-6 border border-[#E5E7EB]">
                <div className="w-12 h-12 bg-[#CFE8D2] rounded-xl flex items-center justify-center mb-4">
                  <Award className="h-6 w-6 text-[#8DBE91]" />
                </div>
                <h4 className="font-semibold text-[#1F4E5F] mb-2">
                  {t.about.stats.experience.title}
                </h4>
                <p className="text-sm text-[#6B7280]">
                  {t.about.stats.experience.description}
                </p>
              </div>

              <div className="bg-[#F8FAF8] rounded-2xl p-6 border border-[#E5E7EB]">
                <div className="w-12 h-12 bg-[#CFE8D2] rounded-xl flex items-center justify-center mb-4">
                  <Heart className="h-6 w-6 text-[#8DBE91]" />
                </div>
                <h4 className="font-semibold text-[#1F4E5F] mb-2">
                  {t.about.stats.dedication.title}
                </h4>
                <p className="text-sm text-[#6B7280]">
                  {t.about.stats.dedication.description}
                </p>
              </div>
            </div>
          </div>

          {/* Image Section with overlay text */}
          <div className="relative rounded-3xl overflow-hidden h-72 lg:h-[28rem]">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/print_quem_somos-BplHquDj6uxuVvkkjW2FggFznnaKBj.png')`,
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1F4E5F]/60 to-transparent" />
            
            {/* Overlay text */}
            <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-12">
              <div className="max-w-2xl">
                <h3 className="font-serif text-2xl lg:text-3xl text-white mb-2">
                  Sesimbra, Portugal
                </h3>
                <p className="text-white/90 text-lg">
                  {t.about.overlayDescription}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
