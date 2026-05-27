'use client';

import { Calendar, FileText } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { LegalBackNav } from '@/components/legal/legal-back-nav';
import { cn } from '@/lib/utils';

type LegalPageHeroProps = {
  badge?: string;
  title: string;
  description: string;
  lastUpdated?: string;
  metadataNote?: string;
  currentPageLabel?: string;
  className?: string;
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.15 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function LegalPageHero({
  badge = 'Legal',
  title,
  description,
  lastUpdated = 'Maio 2026',
  metadataNote = 'Política aplicável a reservas e estadias',
  currentPageLabel,
  className,
}: LegalPageHeroProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <header
      className={cn(
        'relative overflow-hidden border-b border-[#E5E7EB]/80 bg-gradient-to-b from-[#F8FAF8] via-[#F4F9F5] to-white',
        className
      )}
    >
      <motion.div
        aria-hidden
        animate={shouldReduceMotion ? {} : { x: [0, 18, 0], y: [0, -10, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
        className="pointer-events-none absolute -left-20 top-8 h-72 w-72 rounded-full bg-[#CFE8D2]/50 blur-3xl"
      />
      <motion.div
        aria-hidden
        animate={shouldReduceMotion ? {} : { x: [0, -14, 0], y: [0, 12, 0] }}
        transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut' }}
        className="pointer-events-none absolute -right-16 top-24 h-64 w-64 rounded-full bg-[#7EBBD3]/25 blur-3xl"
      />
      <motion.div
        aria-hidden
        animate={shouldReduceMotion ? {} : { opacity: [0.25, 0.4, 0.25] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            'radial-gradient(circle at 50% 0%, rgba(141,190,145,0.12), transparent 55%), radial-gradient(rgba(31,78,95,0.04) 1px, transparent 1px)',
          backgroundSize: 'auto, 24px 24px',
        }}
      />

      <div className="container relative z-10 mx-auto px-4 pb-14 pt-8 lg:pb-20 lg:pt-10">
        <LegalBackNav
          currentLabel={currentPageLabel ?? title}
          className="mb-10 lg:mb-14"
        />

        <motion.div
          variants={shouldReduceMotion ? undefined : staggerContainer}
          initial={shouldReduceMotion ? false : 'hidden'}
          animate={shouldReduceMotion ? undefined : 'visible'}
          className="mx-auto max-w-3xl text-center"
        >
          <motion.span
            variants={shouldReduceMotion ? undefined : fadeUp}
            className="mb-5 inline-block rounded-full border border-[#CFE8D2] bg-[#CFE8D2]/60 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#1F4E5F]"
          >
            {badge}
          </motion.span>

          <motion.h1
            variants={shouldReduceMotion ? undefined : fadeUp}
            className="font-serif text-4xl text-balance text-[#1F4E5F] sm:text-5xl lg:text-[3.25rem] lg:leading-tight"
          >
            {title}
          </motion.h1>

          <motion.p
            variants={shouldReduceMotion ? undefined : fadeUp}
            className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-pretty text-[#6B7280]"
          >
            {description}
          </motion.p>

          <motion.div
            variants={shouldReduceMotion ? undefined : fadeUp}
            className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-8"
          >
            <p className="inline-flex items-center gap-2 text-sm text-[#6B7280]">
              <Calendar className="h-4 w-4 text-[#8DBE91]" aria-hidden />
              <span>
                <span className="font-medium text-[#1F4E5F]">Última atualização:</span>{' '}
                {lastUpdated}
              </span>
            </p>
            <span
              className="hidden h-4 w-px bg-[#E5E7EB] sm:block"
              aria-hidden
            />
            <p className="inline-flex items-center gap-2 text-sm text-[#6B7280]">
              <FileText className="h-4 w-4 text-[#8DBE91]" aria-hidden />
              <span>{metadataNote}</span>
            </p>
          </motion.div>

          <motion.div
            variants={shouldReduceMotion ? undefined : fadeUp}
            className="mx-auto mt-10 h-px w-24 bg-gradient-to-r from-transparent via-[#8DBE91]/60 to-transparent"
            aria-hidden
          />
        </motion.div>
      </div>
    </header>
  );
}
