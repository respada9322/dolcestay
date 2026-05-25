'use client';

import { useState, useEffect, useMemo } from 'react';
import { ExternalLink, Instagram, Facebook, MapPin, Navigation, ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '@/lib/language-context';
import { partnerExperiences, partnerRestaurants } from '@/lib/data';

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
          <h2 className="font-serif text-3xl lg:text-4xl xl:text-5xl text-[#1F4E5F] mb-6">
            {t.partnerships.title}
          </h2>
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
            {partnerExperiences.slice(0, 6).map((partner) => (
              <PartnerExperienceCard key={partner.id} partner={partner} t={t} language={language} />
            ))}
          </div>
        </div>

        {/* Restaurants & Bars */}
        <div className="mb-20">
          <h3 className="font-serif text-2xl lg:text-3xl text-[#1F4E5F] mb-10 text-center">
            {t.partnerships.categories.restaurants}
          </h3>
          <RestaurantCarousel partners={partnerRestaurants} t={t} />
        </div>

        {/* Interactive Map Placeholder */}
        <div className="max-w-5xl mx-auto">
          <h3 className="font-serif text-2xl lg:text-3xl text-[#1F4E5F] mb-8 text-center">
            {t.partnerships.mapTitle}
          </h3>
          <div className="relative rounded-3xl overflow-hidden h-72 lg:h-96 bg-[#E5E7EB] shadow-xl">
            {/* Map background image */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/print_parcerias6-zuVwxaL9GqqScv8a7xqeMWgRAhqKY3.png')`,
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1F4E5F]/40 to-transparent" />
            
            {/* Location badge */}
            <div className="absolute bottom-6 left-6 bg-white rounded-xl px-5 py-3 shadow-xl">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#CFE8D2] rounded-full flex items-center justify-center">
                  <MapPin className="h-5 w-5 text-[#8DBE91]" />
                </div>
                <div>
                  <span className="font-bold text-[#1F4E5F] block">Sesimbra, Portugal</span>
                  <span className="text-sm text-[#6B7280]">{partnerExperiences.length + partnerRestaurants.length} {t.partnerships.partners}</span>
                </div>
              </div>
            </div>

            {/* Map controls placeholder */}
            <div className="absolute top-4 right-4 flex flex-col gap-2">
              <button 
                className="w-10 h-10 bg-white rounded-lg shadow-lg flex items-center justify-center text-[#1F4E5F] hover:bg-[#F8FAF8] transition-colors"
                aria-label={t.partnerships.zoomIn}
              >
                <span className="text-xl font-bold" aria-hidden="true">+</span>
              </button>
              <button 
                className="w-10 h-10 bg-white rounded-lg shadow-lg flex items-center justify-center text-[#1F4E5F] hover:bg-[#F8FAF8] transition-colors"
                aria-label={t.partnerships.zoomOut}
              >
                <span className="text-xl font-bold" aria-hidden="true">-</span>
              </button>
            </div>
          </div>
          
          <p className="text-center text-sm text-[#6B7280] mt-4">
            {t.partnerships.mapComingSoon}
          </p>
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

function RestaurantCarousel({ partners, t }: { partners: typeof partnerRestaurants; t: any }) {
  const VISIBLE = 4;

  // Pad to nearest multiple of VISIBLE so every page is full
  const padded = useMemo(() => {
    const arr = [...partners];
    while (arr.length % VISIBLE !== 0) arr.push(arr[arr.length % partners.length]);
    return arr;
  }, [partners]);

  // Cloned array: [last-page … real items … first-page] for seamless wrap
  const cloned = useMemo(() => [
    ...padded.slice(-VISIBLE),
    ...padded,
    ...padded.slice(0, VISIBLE),
  ], [padded]);

  const OFFSET = VISIBLE;
  const totalReal = padded.length;
  const totalPages = totalReal / VISIBLE;

  const [pos, setPos] = useState(OFFSET);
  const [animated, setAnimated] = useState(true);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [prevHovered, setPrevHovered] = useState(false);
  const [nextHovered, setNextHovered] = useState(false);

  const rawPage = Math.floor((pos - OFFSET) / VISIBLE);
  const currentPage = ((rawPage % totalPages) + totalPages) % totalPages;

  // Re-enable CSS transition one paint after a silent teleport
  useEffect(() => {
    if (!animated) {
      const id = requestAnimationFrame(() => requestAnimationFrame(() => setAnimated(true)));
      return () => cancelAnimationFrame(id);
    }
  }, [animated]);

  const goTo = (newPos: number) => { setAnimated(true); setPos(newPos); };
  const goNext = () => goTo(pos + VISIBLE);
  const goPrev = () => goTo(pos - VISIBLE);

  // After slide ends, silently teleport if we entered a clone zone
  const handleTransitionEnd = () => {
    if (pos >= OFFSET + totalReal) {
      setAnimated(false);
      setPos(OFFSET + ((pos - OFFSET) % totalReal));
    } else if (pos < OFFSET) {
      setAnimated(false);
      setPos(OFFSET + (((pos - OFFSET) % totalReal) + totalReal) % totalReal);
    }
  };

  const onTouchStart = (e: React.TouchEvent) => setTouchStartX(e.touches[0].clientX);
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null) return;
    const delta = touchStartX - e.changedTouches[0].clientX;
    if (delta > 50) goNext();
    else if (delta < -50) goPrev();
    setTouchStartX(null);
  };

  return (
    <div className="relative px-8 lg:px-10">
      <style>{`
        @keyframes cr-ring {
          0%   { transform: scale(1);    opacity: 0.55; }
          100% { transform: scale(1.85); opacity: 0;    }
        }
        @keyframes cr-nudge-left  { 0%,65%,100% { transform: translateX(0);     } 82% { transform: translateX(-3px); } }
        @keyframes cr-nudge-right { 0%,65%,100% { transform: translateX(0);     } 82% { transform: translateX( 3px); } }
      `}</style>
      {/* Edge gradients hint that content continues */}
      <div className="absolute left-8 lg:left-10 top-0 bottom-10 w-14 bg-gradient-to-r from-[#F8FAF8] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-8 lg:right-10 top-0 bottom-10 w-14 bg-gradient-to-l from-[#F8FAF8] to-transparent z-10 pointer-events-none" />

      {/* Prev button */}
      <button
        onClick={goPrev}
        onMouseEnter={() => setPrevHovered(true)}
        onMouseLeave={() => setPrevHovered(false)}
        className="absolute left-0 top-[42%] -translate-y-1/2 z-20 w-11 h-11 bg-white rounded-full border border-[#E5E7EB] shadow-md flex items-center justify-center text-[#1F4E5F] transition-all duration-200 hover:bg-[#1F4E5F] hover:text-white hover:scale-110 hover:shadow-[0_6px_20px_rgba(31,78,95,0.28)] hover:border-transparent group"
        aria-label="Previous"
      >
        {!prevHovered && (
          <span className="absolute inset-0 rounded-full border-2 border-[#8DBE91]" style={{ animation: 'cr-ring 2.2s ease-out infinite' }} />
        )}
        <ChevronLeft
          className="h-5 w-5 transition-transform duration-200 group-hover:-translate-x-0.5"
          style={!prevHovered ? { animation: 'cr-nudge-left 3s ease-in-out infinite' } : undefined}
        />
      </button>

      {/* Sliding track */}
      <div
        className="overflow-hidden cursor-grab active:cursor-grabbing"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <div
          className={`flex ${animated ? 'transition-transform duration-500 ease-in-out' : ''}`}
          style={{ transform: `translateX(-${(pos / VISIBLE) * 100}%)` }}
          onTransitionEnd={handleTransitionEnd}
        >
          {cloned.map((partner, idx) => (
            <div key={idx} style={{ width: `${100 / VISIBLE}%` }} className="flex-shrink-0 px-2">
              <PartnerRestaurantCard partner={partner} t={t} />
            </div>
          ))}
        </div>
      </div>

      {/* Next button */}
      <button
        onClick={goNext}
        onMouseEnter={() => setNextHovered(true)}
        onMouseLeave={() => setNextHovered(false)}
        className="absolute right-0 top-[42%] -translate-y-1/2 z-20 w-11 h-11 bg-white rounded-full border border-[#E5E7EB] shadow-md flex items-center justify-center text-[#1F4E5F] transition-all duration-200 hover:bg-[#1F4E5F] hover:text-white hover:scale-110 hover:shadow-[0_6px_20px_rgba(31,78,95,0.28)] hover:border-transparent group"
        aria-label="Next"
      >
        {!nextHovered && (
          <span className="absolute inset-0 rounded-full border-2 border-[#8DBE91]" style={{ animation: 'cr-ring 2.2s ease-out infinite' }} />
        )}
        <ChevronRight
          className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-0.5"
          style={!nextHovered ? { animation: 'cr-nudge-right 3s ease-in-out infinite' } : undefined}
        />
      </button>

      {/* Page dots */}
      <div className="flex justify-center gap-2 mt-7">
        {Array.from({ length: totalPages }).map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(OFFSET + i * VISIBLE)}
            className={`rounded-full transition-all duration-300 ${
              currentPage === i
                ? 'w-7 h-2.5 bg-[#1F4E5F]'
                : 'w-2.5 h-2.5 bg-[#1F4E5F]/20 hover:bg-[#1F4E5F]/50'
            }`}
            aria-label={`Page ${i + 1}`}
          />
        ))}
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
