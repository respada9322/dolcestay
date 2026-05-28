'use client';

import { ClipboardList, LineChart, Settings, type LucideIcon } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';

const CARD_SIZE = 150;
const CARD_HALF = CARD_SIZE / 2;
const ICON_SIZE = 56;
const NUMBER_SIZE = 48;

const steps: {
  title: string;
  description: string;
  icon: LucideIcon;
}[] = [
  {
    title: 'Avaliamos o seu imóvel',
    description:
      'Analisamos o potencial do seu imóvel e apresentamos uma proposta personalizada.',
    icon: ClipboardList,
  },
  {
    title: 'Preparamos a estratégia',
    description:
      'Definimos a melhor estratégia de rentabilização para o seu alojamento.',
    icon: LineChart,
  },
  {
    title: 'Gerimos tudo',
    description:
      'Tratamos de reservas, hóspedes e todas as operações do dia-a-dia.',
    icon: Settings,
  },
];

const headerVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' as const },
  },
};

const stepsContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const stepVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' as const },
  },
};

const numberVariants = {
  hidden: { opacity: 0, scale: 0.75 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, ease: 'easeOut' as const },
  },
};

function ConnectorLine({
  index,
  shouldReduceMotion,
}: {
  index: 0 | 1;
  shouldReduceMotion: boolean | null;
}) {
  const leftPercent = index === 0 ? '16.666%' : '50%';
  const left = `calc(${leftPercent} + ${CARD_HALF}px)`;
  const width = `calc(33.333% - ${CARD_SIZE}px)`;

  return (
    <motion.div
      initial={shouldReduceMotion ? { scaleX: 1, opacity: 1 } : { scaleX: 0, opacity: 0.85 }}
      whileInView={shouldReduceMotion ? { scaleX: 1, opacity: 1 } : { scaleX: 1, opacity: 1 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{
        duration: 0.7,
        ease: 'easeOut',
        delay: shouldReduceMotion ? 0 : 0.25 + index * 0.15,
      }}
      className="absolute z-0 hidden h-[4px] origin-left rounded-full bg-[#A8CFAB] lg:block"
      style={{
        top: CARD_HALF,
        left,
        width,
      }}
      aria-hidden
    />
  );
}

export function HowItWorksSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="como-funciona"
      className="scroll-mt-20 bg-white py-12 md:py-16 lg:py-20"
      aria-labelledby="how-it-works-heading"
    >
      <div className="container mx-auto max-w-[1200px] px-5 sm:px-6">
        <motion.header
          initial={shouldReduceMotion ? false : 'hidden'}
          whileInView={shouldReduceMotion ? {} : 'visible'}
          viewport={{ once: true, amount: 0.3 }}
          variants={headerVariants}
          className="mb-12 text-center md:mb-14 lg:mb-16"
        >
          <h2
            id="how-it-works-heading"
            className="font-serif text-[1.75rem] font-medium text-[#1F4E5F] text-balance sm:text-3xl lg:text-[2.25rem] lg:leading-tight"
          >
            Como funciona
          </h2>
        </motion.header>

        <motion.div
          initial={shouldReduceMotion ? false : 'hidden'}
          whileInView={shouldReduceMotion ? {} : 'visible'}
          viewport={{ once: true, amount: 0.15 }}
          variants={stepsContainerVariants}
          className="relative"
        >
          {/* Connector lines — behind cards, desktop only */}
          <div
            className="pointer-events-none absolute inset-x-0 top-0 hidden lg:block"
            style={{ height: CARD_SIZE }}
            aria-hidden
          >
            <ConnectorLine index={0} shouldReduceMotion={shouldReduceMotion} />
            <ConnectorLine index={1} shouldReduceMotion={shouldReduceMotion} />
          </div>

          <div className="relative z-10 grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-6 lg:justify-between">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.article
                  key={step.title}
                  variants={stepVariants}
                  whileHover={
                    shouldReduceMotion
                      ? {}
                      : {
                          y: -5,
                          transition: { duration: 0.25, ease: 'easeOut' },
                        }
                  }
                  className="group mx-auto flex w-full max-w-[320px] flex-col items-center text-center md:max-w-none"
                >
                  {/* Icon card */}
                  <div className="relative mb-5 md:mb-6">
                    <div
                      className="relative flex items-center justify-center rounded-[16px] border border-[#C5DDC8] bg-white shadow-[0_4px_20px_rgba(31,78,95,0.09)] transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-[0_8px_28px_rgba(31,78,95,0.12)]"
                      style={{ width: CARD_SIZE, height: CARD_SIZE }}
                    >
                      <Icon
                        className="text-[#8DBE91] transition-transform duration-300 group-hover:scale-[1.04]"
                        style={{ width: ICON_SIZE, height: ICON_SIZE }}
                        strokeWidth={1.5}
                      />
                    </div>

                    <motion.div
                      variants={numberVariants}
                      className="absolute -top-3.5 -right-3.5 z-20 flex items-center justify-center rounded-full bg-[#7DB88A] text-lg font-semibold text-white shadow-[0_4px_14px_rgba(125,184,138,0.38)] transition-shadow duration-300 group-hover:shadow-[0_6px_18px_rgba(125,184,138,0.48)]"
                      style={{ width: NUMBER_SIZE, height: NUMBER_SIZE }}
                    >
                      {index + 1}
                    </motion.div>
                  </div>

                  <h3 className="mb-2 max-w-[280px] text-lg font-bold leading-snug text-[#1F4E5F] sm:text-xl lg:max-w-[320px]">
                    {step.title}
                  </h3>

                  <p className="max-w-[280px] text-sm leading-relaxed text-[#6B7280] lg:max-w-[320px] lg:text-[0.95rem]">
                    {step.description}
                  </p>
                </motion.article>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
