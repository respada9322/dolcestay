'use client';

import { useCallback, useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { getLegalSectionId, type LegalSection } from '@/lib/legal';
import { cn } from '@/lib/utils';

type LegalDocumentProps = {
  sections: LegalSection[];
};

export function LegalDocument({ sections }: LegalDocumentProps) {
  const shouldReduceMotion = useReducedMotion();
  const [activeId, setActiveId] = useState(getLegalSectionId(sections[0]?.title ?? ''));
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(docHeight > 0 ? Math.min(scrollTop / docHeight, 1) : 0);
      setShowBackToTop(scrollTop > 480);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    sections.forEach((section) => {
      const id = getLegalSectionId(section.title);
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveId(id);
        },
        { rootMargin: '-20% 0px -55% 0px', threshold: 0 }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [sections]);

  const scrollToSection = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, []);

  return (
    <>
      <div
        className="pointer-events-none fixed inset-x-0 top-16 z-30 h-0.5 origin-left bg-[#8DBE91] transition-transform duration-150 lg:top-20"
        style={{ transform: `scaleX(${scrollProgress})` }}
        role="progressbar"
        aria-valuenow={Math.round(scrollProgress * 100)}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label="Progresso de leitura"
      />

      <div className="container mx-auto px-4 py-12 lg:py-16">
        <div className="mx-auto flex max-w-6xl flex-col gap-12 lg:flex-row lg:gap-16">
          <aside className="lg:w-64 lg:flex-shrink-0">
            <nav
              aria-label="Índice dos termos"
              className="lg:sticky lg:top-28 lg:max-h-[calc(100vh-8rem)] lg:overflow-y-auto"
            >
              <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-[#8DBE91]">
                Nesta página
              </p>
              <ul className="space-y-1 rounded-2xl border border-[#E5E7EB]/80 bg-white/80 p-3 shadow-[0_8px_30px_rgba(31,78,95,0.06)] backdrop-blur-sm">
                {sections.map((section) => {
                  const id = getLegalSectionId(section.title);
                  const isActive = activeId === id;

                  return (
                    <li key={id}>
                      <button
                        type="button"
                        onClick={() => scrollToSection(id)}
                        className={cn(
                          'w-full rounded-xl px-3 py-2.5 text-left text-sm leading-snug transition-all duration-200',
                          isActive
                            ? 'bg-[#CFE8D2]/70 font-medium text-[#1F4E5F]'
                            : 'text-[#6B7280] hover:bg-[#F8FAF8] hover:text-[#1F4E5F]'
                        )}
                        aria-current={isActive ? 'true' : undefined}
                      >
                        {section.title}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </aside>

          <div className="min-w-0 flex-1">
            <div className="mx-auto max-w-3xl space-y-0">
              {sections.map((section, index) => {
                const id = getLegalSectionId(section.title);

                return (
                  <motion.section
                    key={id}
                    id={id}
                    initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
                    whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.12 }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                    className={cn(
                      'scroll-mt-28 py-10 first:pt-0',
                      index < sections.length - 1 && 'border-b border-[#E5E7EB]/90'
                    )}
                  >
                    <h2 className="font-serif text-2xl text-[#1F4E5F] sm:text-3xl">
                      {section.title}
                    </h2>

                    <div className="mt-6 space-y-5 text-[#5B6573] text-[1.0625rem] leading-[1.75]">
                      {section.paragraphs.map((paragraph) => (
                        <p key={paragraph.slice(0, 48)}>{paragraph}</p>
                      ))}

                      {section.listItems && section.listItems.length > 0 && (
                        <ul className="list-disc space-y-3 pl-6 marker:text-[#8DBE91]">
                          {section.listItems.map((item) => (
                            <li key={item.slice(0, 48)}>{item}</li>
                          ))}
                        </ul>
                      )}

                      {section.paragraphsAfterList?.map((paragraph) => (
                        <p key={paragraph.slice(0, 48)}>{paragraph}</p>
                      ))}
                    </div>
                  </motion.section>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <motion.button
        type="button"
        initial={false}
        animate={{
          opacity: showBackToTop ? 1 : 0,
          y: showBackToTop ? 0 : 12,
          pointerEvents: showBackToTop ? 'auto' : 'none',
        }}
        transition={{ duration: 0.25 }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-24 right-5 z-40 flex h-12 w-12 items-center justify-center rounded-full border border-[#1F4E5F]/10 bg-white/90 text-[#1F4E5F] shadow-[0_8px_32px_rgba(31,78,95,0.12)] backdrop-blur-md transition-colors hover:border-[#8DBE91]/40 hover:bg-white hover:text-[#8DBE91] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8DBE91] focus-visible:ring-offset-2 sm:bottom-8 sm:right-6 lg:right-10"
        aria-label="Voltar ao topo"
      >
        <ArrowUp className="h-5 w-5" aria-hidden />
      </motion.button>
    </>
  );
}
