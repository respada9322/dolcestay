'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';

export type PremiumCtaCardProps = {
  title: string;
  description: string;
  pills: string[];
  ctaLabel: string;
  disclaimer: string;
  href?: string;
  className?: string;
};

const containerVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const contentVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function PremiumCtaCard({
  title,
  description,
  pills,
  ctaLabel,
  disclaimer,
  href = '/contactos',
  className = '',
}: PremiumCtaCardProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={shouldReduceMotion ? false : 'hidden'}
      whileInView={shouldReduceMotion ? {} : 'visible'}
      viewport={{ once: true, amount: 0.25 }}
      variants={containerVariants}
      className={`mx-auto w-full max-w-[1320px] px-4 sm:px-6 lg:px-8 ${className}`}
    >
      <div className="relative overflow-hidden rounded-[32px] shadow-[0_24px_64px_-12px_rgba(15,76,92,0.35),0_8px_24px_-8px_rgba(15,76,92,0.2)]">
        {/* Base gradient */}
        <div
          className="absolute inset-0 bg-gradient-to-br from-[#0f4c5c] via-[#145d73] to-[#0f4c5c]"
          aria-hidden
        />

        {/* Radial glow layers */}
        <motion.div
          className="pointer-events-none absolute -right-[10%] top-1/2 h-[140%] w-[55%] -translate-y-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(43,123,145,0.55)_0%,transparent_70%)] blur-2xl"
          aria-hidden
          animate={
            shouldReduceMotion
              ? undefined
              : {
                  opacity: [0.7, 0.9, 0.7],
                  x: [0, 12, 0],
                }
          }
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <div
          className="pointer-events-none absolute -left-[5%] top-0 h-[80%] w-[40%] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(20,93,115,0.4)_0%,transparent_65%)] blur-3xl"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_70%_50%,rgba(43,123,145,0.25)_0%,transparent_55%)]"
          aria-hidden
        />

        {/* Subtle grain texture */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.04] mix-blend-overlay"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          }}
          aria-hidden
        />

        {/* Glass highlight edge */}
        <div
          className="pointer-events-none absolute inset-0 rounded-[32px] ring-1 ring-inset ring-white/10"
          aria-hidden
        />

        <div className="relative flex flex-col items-center gap-10 px-6 py-10 sm:px-10 sm:py-12 lg:flex-row lg:items-center lg:justify-between lg:gap-12 lg:px-14 lg:py-12 xl:px-16">
          {/* Left column */}
          <motion.div
            variants={shouldReduceMotion ? undefined : contentVariants}
            className="flex w-full flex-col items-center text-center lg:max-w-[58%] lg:items-start lg:text-left"
          >
            <motion.h3
              variants={shouldReduceMotion ? undefined : itemVariants}
              className="font-serif text-3xl leading-tight tracking-tight text-white sm:text-4xl lg:text-[2.5rem] lg:leading-[1.15]"
            >
              {title}
            </motion.h3>

            <motion.p
              variants={shouldReduceMotion ? undefined : itemVariants}
              className="mt-4 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg lg:mt-5"
            >
              {description}
            </motion.p>

            <motion.div
              variants={shouldReduceMotion ? undefined : itemVariants}
              className="mt-6 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 lg:mt-7 lg:justify-start"
            >
              {pills.map((pill) => (
                <motion.span
                  key={pill}
                  whileHover={shouldReduceMotion ? undefined : { scale: 1.03, y: -1 }}
                  transition={{ duration: 0.2 }}
                  className="inline-flex items-center rounded-full border border-white/25 bg-white/10 px-3.5 py-1.5 text-xs font-medium text-white/90 backdrop-blur-sm sm:px-4 sm:text-sm"
                >
                  {pill}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>

          {/* Right column */}
          <motion.div
            variants={shouldReduceMotion ? undefined : itemVariants}
            initial={shouldReduceMotion ? false : 'hidden'}
            whileInView={shouldReduceMotion ? {} : 'visible'}
            viewport={{ once: true }}
            className="flex w-full shrink-0 flex-col items-center lg:w-auto lg:min-w-[280px] xl:min-w-[320px]"
          >
            <motion.div whileHover={shouldReduceMotion ? undefined : { y: -3 }} transition={{ duration: 0.25 }}>
              <Link
                href={href}
                className="group grid w-full grid-cols-[1fr_auto_1fr] items-center rounded-full bg-white px-8 py-4 text-base font-bold text-[#0f4c5c] shadow-[0_8px_32px_-4px_rgba(0,0,0,0.2)] transition-shadow duration-300 hover:shadow-[0_12px_40px_-4px_rgba(0,0,0,0.28)] sm:inline-flex sm:w-auto sm:justify-center sm:gap-2 sm:px-10 sm:py-5 sm:text-lg"
              >
                <span className="col-start-2 text-center">{ctaLabel}</span>
                <ArrowRight className="col-start-3 h-5 w-5 justify-self-end transition-transform duration-300 group-hover:translate-x-1 sm:col-start-auto sm:justify-self-auto" />
              </Link>
            </motion.div>

            <p className="mt-4 max-w-[260px] text-center text-xs leading-relaxed text-white/55 sm:text-sm">
              {disclaimer}
            </p>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
