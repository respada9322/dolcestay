'use client';

import { Calendar, Key, Sparkles, TrendingUp, Headphones, Megaphone, Wrench, Home } from 'lucide-react';
import { useLanguage } from '@/lib/language-context';
import { services } from '@/lib/data';

const iconComponents: Record<string, React.ReactNode> = {
  Calendar: <Calendar className="h-7 w-7" />,
  Key: <Key className="h-7 w-7" />,
  Sparkles: <Sparkles className="h-7 w-7" />,
  TrendingUp: <TrendingUp className="h-7 w-7" />,
  Headphones: <Headphones className="h-7 w-7" />,
  Megaphone: <Megaphone className="h-7 w-7" />,
  Wrench: <Wrench className="h-7 w-7" />,
  Home: <Home className="h-7 w-7" />,
};

// Group services into categories for better scanning
const serviceGroups = [
  {
    category: 'operations',
    ids: ['bookingManagement', 'checkInOut', 'guestSupport'],
  },
  {
    category: 'property',
    ids: ['cleaning', 'maintenance', 'preparation'],
  },
  {
    category: 'growth',
    ids: ['pricing', 'marketing'],
  },
];

export function ServicesSection() {
  const { t } = useLanguage();

  return (
    <section id="services" className="py-20 lg:py-28 bg-white scroll-mt-20">
      <div className="container mx-auto px-4">
        {/* Section Header - SEO optimized */}
        <div className="text-center mb-14 lg:mb-20">
          <span className="inline-block px-4 py-1.5 bg-[#CFE8D2] text-[#1F4E5F] text-sm font-semibold rounded-full mb-4">
            {t.services.badge}
          </span>
          <h2 className="font-serif text-3xl lg:text-4xl xl:text-5xl text-[#1F4E5F] mb-4">
            {t.services.title}
          </h2>
          <p className="text-[#6B7280] max-w-2xl mx-auto text-lg">
            {t.services.subtitle}
          </p>
        </div>

        {/* Services Grid - Improved structure */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const serviceData = t.services.items[service.id as keyof typeof t.services.items];
            const isHighlighted = index < 4; // Highlight first 4 services
            
            return (
              <div
                key={service.id}
                className={`group relative p-6 lg:p-8 rounded-2xl transition-all hover:-translate-y-1 ${
                  isHighlighted 
                    ? 'bg-gradient-to-br from-[#F8FAF8] to-[#CFE8D2]/30 hover:shadow-xl border border-[#CFE8D2]' 
                    : 'bg-[#F8FAF8] hover:bg-[#CFE8D2]/40 hover:shadow-lg'
                }`}
              >
                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-5 shadow-sm transition-all ${
                  isHighlighted
                    ? 'bg-[#8DBE91] text-white group-hover:scale-110'
                    : 'bg-white text-[#8DBE91] group-hover:bg-[#8DBE91] group-hover:text-white'
                }`}>
                  {iconComponents[service.icon]}
                </div>

                {/* Content */}
                <h3 className="font-bold text-lg text-[#1F4E5F] mb-3">
                  {serviceData.title}
                </h3>
                <p className="text-[#6B7280] leading-relaxed text-sm">
                  {serviceData.description}
                </p>

                {/* Decorative corner for highlighted */}
                {isHighlighted && (
                  <div className="absolute top-0 right-0 w-16 h-16 bg-[#8DBE91]/5 rounded-bl-3xl" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
