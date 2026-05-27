'use client';

import { ArrowRight, ShieldCheck } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { useLanguage } from '@/lib/language-context';
import { BOOKING_URL } from '@/lib/data';

const fadeUpVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function AccommodationsCta() {
  const { t } = useLanguage();
  const shouldReduceMotion = useReducedMotion();
  const { accommodations } = t;

  return (
    <motion.div
      initial={shouldReduceMotion ? false : 'hidden'}
      whileInView={shouldReduceMotion ? {} : 'visible'}
      viewport={{ once: true, amount: 0.35 }}
      variants={fadeUpVariants}
      className="mx-auto w-full max-w-5xl"
    >
      <div className="relative overflow-hidden rounded-[28px] border border-white/80 bg-gradient-to-br from-white via-white to-[#EEF6EE] shadow-[0_12px_40px_-12px_rgba(31,78,95,0.12),0_4px_16px_-4px_rgba(31,78,95,0.06)] backdrop-blur-sm">
        {/* Subtle inner glow */}
        <div
          className="pointer-events-none absolute -right-8 top-1/2 h-32 w-32 -translate-y-1/2 rounded-full bg-[#8DBE91]/15 blur-2xl"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 rounded-[28px] ring-1 ring-inset ring-[#8DBE91]/10"
          aria-hidden
        />

        <div className="relative flex flex-col items-center gap-6 px-6 py-7 sm:px-8 sm:py-8 lg:flex-row lg:items-center lg:justify-between lg:gap-10 lg:px-10 lg:py-7">
          {/* Left: icon + text */}
          <div className="flex w-full flex-col items-center gap-4 text-center sm:flex-row sm:items-start sm:gap-5 sm:text-left lg:max-w-[62%] lg:items-center">
            <motion.div
              whileHover={shouldReduceMotion ? undefined : { scale: 1.06 }}
              transition={{ duration: 0.2 }}
              className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#8DBE91] shadow-[0_4px_14px_-2px_rgba(141,190,145,0.45)]"
            >
              <ShieldCheck className="h-6 w-6 text-white" strokeWidth={2.25} aria-hidden />
            </motion.div>

            <div className="min-w-0">
              <h3 className="font-serif text-xl leading-snug text-[#1F4E5F] sm:text-2xl">
                {accommodations.ctaTitle}
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-[#6B7280] sm:text-[0.9375rem]">
                {accommodations.bookingNote}
              </p>
            </div>
          </div>

          {/* Right: button + hint */}
          <div className="flex w-full shrink-0 flex-col items-center lg:w-auto lg:items-end">
            <div className="relative w-full sm:w-auto">
              {/* Decorative glow behind button */}
              <div
                className="pointer-events-none absolute -inset-1 rounded-full bg-[#8DBE91]/25 blur-md"
                aria-hidden
              />
              <motion.a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={shouldReduceMotion ? undefined : { y: -2 }}
                transition={{ duration: 0.25 }}
                className="group relative flex w-full items-center justify-center gap-2 rounded-full bg-[#8DBE91] px-7 py-3.5 text-base font-bold text-white shadow-[0_6px_20px_-4px_rgba(141,190,145,0.55)] transition-shadow duration-300 hover:bg-[#7AAD7E] hover:shadow-[0_10px_28px_-4px_rgba(141,190,145,0.65)] sm:w-auto sm:px-8 sm:py-4"
              >
                <span>{accommodations.ctaButton}</span>
                <ArrowRight
                  className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden
                />
              </motion.a>
            </div>
            <p className="mt-2.5 text-center text-xs text-[#9CA3AF] lg:text-right">
              {accommodations.ctaHint}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
