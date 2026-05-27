'use client';

import { useEffect, useRef, useState } from 'react';
import { Shield, Star, TrendingUp, Handshake, type LucideIcon } from 'lucide-react';
import { animate, motion, useInView, useReducedMotion } from 'framer-motion';
import { useLanguage } from '@/lib/language-context';

const metricIcons: LucideIcon[] = [Shield, Star, TrendingUp, Handshake];
const metricKeys = ['metric1', 'metric2', 'metric3', 'metric4'] as const;

const headerVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: 'easeOut' as const },
  },
};

const cardsContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.14,
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

type CounterType = 'percent' | 'decimal' | 'percentPlus' | 'static';

function AnimatedMetricValue({
  type,
  value,
  staticDisplay,
  enabled,
}: {
  type: CounterType;
  value?: number;
  staticDisplay?: string;
  enabled: boolean;
}) {
  const [display, setDisplay] = useState(() => {
    if (type === 'static') return staticDisplay ?? '';
    if (type === 'percentPlus') return '+0%';
    if (type === 'decimal') return '0.0';
    return '0%';
  });

  useEffect(() => {
    if (!enabled || type === 'static') {
      if (type === 'static' && staticDisplay) setDisplay(staticDisplay);
      return;
    }

    if (value === undefined) return;

    const controls = animate(0, value, {
      duration: 1.5,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (latest) => {
        if (type === 'percent') {
          setDisplay(`${Math.round(latest)}%`);
        } else if (type === 'percentPlus') {
          setDisplay(`+${Math.round(latest)}%`);
        } else {
          setDisplay(latest.toFixed(1));
        }
      },
    });

    return () => controls.stop();
  }, [enabled, type, value, staticDisplay]);

  return <span className="tabular-nums">{display}</span>;
}

export function TrustMetricsSection() {
  const { t } = useLanguage();
  const shouldReduceMotion = useReducedMotion();
  const { trustMetrics } = t;
  const sectionRef = useRef<HTMLElement>(null);
  const countersInView = useInView(sectionRef, { once: true, amount: 0.35 });
  const animateCounters = countersInView && !shouldReduceMotion;

  return (
    <section
      ref={sectionRef}
      id="confianca-dolcestay"
      className="relative scroll-mt-20 overflow-hidden bg-ds-light pt-20 pb-10 lg:pt-28 lg:pb-12"
      aria-labelledby="trust-metrics-heading"
    >
      <motion.div
        aria-hidden
        animate={
          shouldReduceMotion
            ? {}
            : { x: [0, 18, 0], y: [0, -14, 0], scale: [1, 1.05, 1] }
        }
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
        className="pointer-events-none absolute -left-20 -top-16 h-72 w-72 rounded-full bg-[#CFE8D2]/45 blur-3xl"
      />
      <motion.div
        aria-hidden
        animate={shouldReduceMotion ? {} : { x: [0, -12, 0], y: [0, 10, 0] }}
        transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut' }}
        className="pointer-events-none absolute right-0 top-1/3 h-48 w-48 rounded-full bg-[#E8F4EA]/60 blur-3xl"
      />

      <div className="container relative z-10 mx-auto max-w-[1200px] px-4">
        <motion.div
          initial={shouldReduceMotion ? false : 'hidden'}
          whileInView={shouldReduceMotion ? {} : 'visible'}
          viewport={{ once: true, amount: 0.35 }}
          variants={headerVariants}
          className="mx-auto mb-14 max-w-3xl text-center lg:mb-16"
        >
          <p className="mb-4 text-[11px] font-semibold tracking-[0.2em] text-[#1F4E5F]/80 uppercase">
            {trustMetrics.badge}
          </p>
          <h2
            id="trust-metrics-heading"
            className="font-serif text-3xl leading-tight text-[#1F4E5F] text-balance lg:text-4xl xl:text-[2.75rem]"
          >
            {trustMetrics.title}
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-[#6B7280] lg:text-lg">
            {trustMetrics.subtitle}
          </p>
        </motion.div>

        <motion.div
          initial={shouldReduceMotion ? false : 'hidden'}
          whileInView={shouldReduceMotion ? {} : 'visible'}
          viewport={{ once: true, amount: 0.2 }}
          variants={cardsContainerVariants}
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:gap-6 xl:grid-cols-4"
        >
          {metricKeys.map((key, index) => {
            const metric = trustMetrics.metrics[key];
            const Icon = metricIcons[index];

            return (
              <motion.article
                key={key}
                variants={cardVariants}
                whileHover={
                  shouldReduceMotion
                    ? {}
                    : { y: -5, transition: { duration: 0.25, ease: 'easeOut' } }
                }
                className="group rounded-[24px] border border-[#E8EDEA] bg-white p-7 shadow-[0_4px_28px_rgba(31,78,95,0.05)] transition-[box-shadow,border-color] duration-300 hover:border-[#CFE8D2] hover:shadow-[0_14px_44px_rgba(31,78,95,0.1)] lg:p-8"
              >
                <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-xl bg-[#E8F4EA] transition-transform duration-300 group-hover:scale-105">
                  <Icon className="h-5 w-5 text-[#1F4E5F]" strokeWidth={1.75} />
                </div>

                <p className="text-3xl font-bold tracking-tight text-[#1F4E5F] lg:text-[2rem]">
                  {shouldReduceMotion || metric.counterType === 'static' ? (
                    <span className="tabular-nums">{metric.value}</span>
                  ) : (
                    <AnimatedMetricValue
                      type={metric.counterType}
                      value={metric.counterValue}
                      staticDisplay={metric.value}
                      enabled={animateCounters}
                    />
                  )}
                </p>

                <p className="mt-2 text-sm leading-relaxed text-[#6B7280]">{metric.label}</p>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
