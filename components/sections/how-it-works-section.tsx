'use client';

import {
  ClipboardList,
  Home,
  Sparkles,
  Settings,
  LineChart,
  type LucideIcon,
} from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { useLanguage } from '@/lib/language-context';

const stepIcons: LucideIcon[] = [
  ClipboardList,
  Home,
  Sparkles,
  Settings,
  LineChart,
];

const stepKeys = ['step1', 'step2', 'step3', 'step4', 'step5'] as const;

const containerVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' as const },
  },
};

const cardsContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' as const },
  },
};

export function HowItWorksSection() {
  const { t } = useLanguage();
  const shouldReduceMotion = useReducedMotion();
  const { howItWorks } = t;

  return (
    <section
      id="como-funciona"
      className="scroll-mt-20 bg-white py-20 lg:py-28"
      aria-labelledby="how-it-works-heading"
    >
      <div className="container mx-auto max-w-[1400px] px-4">
        <motion.div
          initial={shouldReduceMotion ? false : 'hidden'}
          whileInView={shouldReduceMotion ? {} : 'visible'}
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="mb-14 text-center lg:mb-16"
        >
          <h2
            id="how-it-works-heading"
            className="font-serif text-3xl text-[#1F4E5F] text-balance lg:text-4xl xl:text-5xl"
          >
            {howItWorks.title}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-[#6B7280] lg:text-lg">
            {howItWorks.subtitle}
          </p>
        </motion.div>

        <motion.div
          initial={shouldReduceMotion ? false : 'hidden'}
          whileInView={shouldReduceMotion ? {} : 'visible'}
          viewport={{ once: true, amount: 0.15 }}
          variants={cardsContainerVariants}
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6 xl:grid-cols-5"
        >
          {stepKeys.map((key, index) => {
            const step = howItWorks.steps[key];
            const Icon = stepIcons[index];

            return (
              <motion.article
                key={key}
                variants={cardVariants}
                whileHover={
                  shouldReduceMotion
                    ? {}
                    : {
                        y: -6,
                        transition: { duration: 0.25, ease: 'easeOut' },
                      }
                }
                className="group flex h-full flex-col rounded-[22px] border border-[#D4E5D6] bg-[#F7FBF8] p-6 shadow-[0_4px_24px_rgba(31,78,95,0.06)] transition-[box-shadow,border-color] duration-300 hover:border-[#8DBE91]/55 hover:shadow-[0_12px_40px_rgba(31,78,95,0.12)] lg:p-7"
              >
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-[#D8EDDA] transition-transform duration-300 group-hover:scale-105 group-hover:rotate-3">
                  <Icon className="h-5 w-5 text-[#3D7A52]" strokeWidth={1.75} />
                </div>

                <p className="mb-2 text-[11px] font-semibold tracking-[0.14em] text-[#8DBE91] uppercase">
                  {howItWorks.stepLabel} {index + 1}
                </p>

                <h3 className="mb-3 text-base font-bold leading-snug text-[#1F4E5F] lg:text-[17px]">
                  {step.title}
                </h3>

                <p className="text-sm leading-relaxed text-[#6B7280]">{step.description}</p>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
