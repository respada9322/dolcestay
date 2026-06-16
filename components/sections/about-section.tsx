'use client';

import Image from 'next/image';
import Link from 'next/link';
import {
  MapPinned,
  MessageCircle,
  Layers,
  Users,
  TrendingUp,
  Sparkles,
  Building2,
  Star,
  Headphones,
  Waves,
  TreePine,
  UtensilsCrossed,
  ArrowRight,
  type LucideIcon,
} from 'lucide-react';
import { animate, motion, useInView, useReducedMotion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { useLanguage } from '@/lib/language-context';
import { PremiumCtaCard } from '@/components/sections/premium-cta-card';
import { homeSection, HOME_SECTION_IDS, routes } from '@/lib/navigation';

const ABOUT_IMAGES = {
  hero: '/hero.webp',
  story: '/images/about/sesimbra-aerial.png',
  sesimbraPanorama: '/images/partners/Sesimbra_SUP_Rentals_photo4.webp',
  sesimbraCards: [
    '/images/partners/Look_Around_Tours_photo1.webp',
    '/images/partners/Cipreia_photo1.webp',
    '/images/partners/O_Batel_photo1.webp',
  ],
} as const;

const statKeys = ['stat1', 'stat2', 'stat3', 'stat4'] as const;
const statIcons: LucideIcon[] = [Building2, Users, Star, Headphones];
const whyIcons: LucideIcon[] = [
  MapPinned,
  MessageCircle,
  Layers,
  Users,
  TrendingUp,
  Sparkles,
];
const sesimbraIcons: LucideIcon[] = [Waves, TreePine, UtensilsCrossed];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.08 } },
};

const cardReveal = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] as const },
  },
};

type CounterType = 'static' | 'decimal' | 'plus';

function AnimatedStatValue({
  type,
  value,
  staticDisplay,
  enabled,
}: {
  type: CounterType;
  value?: number;
  staticDisplay: string;
  enabled: boolean;
}) {
  const [display, setDisplay] = useState(staticDisplay);

  useEffect(() => {
    if (!enabled || type === 'static') {
      setDisplay(staticDisplay);
      return;
    }
    if (value === undefined) return;

    const controls = animate(0, value, {
      duration: 1.4,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (latest) => {
        if (type === 'decimal') {
          setDisplay(`${latest.toFixed(1)}★`);
        } else {
          setDisplay(`+${Math.round(latest)}`);
        }
      },
    });
    return () => controls.stop();
  }, [enabled, type, value, staticDisplay]);

  return <span className="tabular-nums">{display}</span>;
}

export function AboutSection() {
  const { t } = useLanguage();
  const { about } = t;
  const shouldReduceMotion = useReducedMotion();
  const statsRef = useRef<HTMLDivElement>(null);
  const statsInView = useInView(statsRef, { once: true, amount: 0.4 });
  const animateStats = statsInView && !shouldReduceMotion;

  return (
    <>
      {/* Hero */}
      <section className="overflow-hidden bg-white pt-8 pb-16 lg:pt-12 lg:pb-24">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-20">
            <motion.div
              initial={shouldReduceMotion ? false : 'hidden'}
              animate="visible"
              variants={fadeUp}
              className="order-2 lg:order-1"
            >
              <span className="mb-5 inline-block rounded-full bg-[#CFE8D2] px-4 py-1.5 text-sm font-semibold text-[#1F4E5F]">
                {about.hero.badge}
              </span>
              <h1 className="font-serif text-3xl leading-[1.12] tracking-tight text-[#1F4E5F] text-balance sm:text-4xl lg:text-5xl xl:text-[3.25rem]">
                {about.hero.title}
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-[#6B7280] text-pretty">
                {about.hero.description}
              </p>
              <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
                <Link
                  href={routes.contact}
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#8DBE91] px-8 py-4 text-base font-bold text-white shadow-[0_8px_28px_-6px_rgba(141,190,145,0.55)] transition-all hover:bg-[#7AAD7E] hover:shadow-[0_12px_36px_-6px_rgba(141,190,145,0.65)]"
                >
                  {about.hero.ctaPrimary}
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5" />
                </Link>
                <Link
                  href={homeSection(HOME_SECTION_IDS.services)}
                  className="inline-flex items-center justify-center rounded-full border-2 border-[#1F4E5F] px-8 py-4 text-base font-bold text-[#1F4E5F] transition-colors hover:bg-[#1F4E5F] hover:text-white"
                >
                  {about.hero.ctaSecondary}
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="relative order-1 lg:order-2"
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-[24px] shadow-[0_20px_60px_-16px_rgba(31,78,95,0.22)] sm:aspect-[5/4] lg:aspect-[4/5] xl:aspect-[5/6]">
                <Image
                  src={ABOUT_IMAGES.hero}
                  alt={about.hero.imageAlt}
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div
                aria-hidden
                className="pointer-events-none absolute -bottom-6 -left-6 h-32 w-32 rounded-full bg-[#CFE8D2]/50 blur-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-[#E8EDEA] bg-white py-10 lg:py-14">
        <div ref={statsRef} className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={shouldReduceMotion ? false : 'hidden'}
            whileInView={shouldReduceMotion ? {} : 'visible'}
            viewport={{ once: true, amount: 0.3 }}
            variants={stagger}
            className="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-6"
          >
            {statKeys.map((key, index) => {
              const stat = about.stats[key];
              const Icon = statIcons[index];
              return (
                <motion.article
                  key={key}
                  variants={cardReveal}
                  whileHover={
                    shouldReduceMotion
                      ? {}
                      : { y: -4, transition: { duration: 0.22 } }
                  }
                  className="group rounded-[20px] border border-[#E8EDEA] bg-white p-6 text-center shadow-[0_4px_24px_rgba(31,78,95,0.04)] transition-[box-shadow,border-color] duration-300 hover:border-[#CFE8D2] hover:shadow-[0_12px_40px_rgba(31,78,95,0.09)] lg:p-8"
                >
                  <div className="mx-auto mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-[#E8F4EA] transition-transform duration-300 group-hover:scale-105">
                    <Icon className="h-5 w-5 text-[#1F4E5F]" strokeWidth={1.75} />
                  </div>
                  <p className="text-2xl font-bold tracking-tight text-[#1F4E5F] lg:text-3xl">
                    {shouldReduceMotion || stat.counterType === 'static' ? (
                      <span className="tabular-nums">{stat.value}</span>
                    ) : (
                      <AnimatedStatValue
                        type={stat.counterType}
                        value={stat.counterValue}
                        staticDisplay={stat.value}
                        enabled={animateStats}
                      />
                    )}
                  </p>
                  <p className="mt-2 text-sm leading-snug text-[#6B7280]">{stat.label}</p>
                </motion.article>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-24">
            <motion.div
              initial={shouldReduceMotion ? false : 'hidden'}
              whileInView={shouldReduceMotion ? {} : 'visible'}
              viewport={{ once: true, amount: 0.25 }}
              variants={fadeUp}
              className="relative aspect-[4/3] overflow-hidden rounded-[24px] shadow-[0_16px_48px_-12px_rgba(31,78,95,0.18)] lg:aspect-[5/4]"
            >
              <Image
                src={ABOUT_IMAGES.story}
                alt={about.story.imageAlt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </motion.div>

            <motion.div
              initial={shouldReduceMotion ? false : 'hidden'}
              whileInView={shouldReduceMotion ? {} : 'visible'}
              viewport={{ once: true, amount: 0.25 }}
              variants={fadeUp}
            >
              <h2 className="font-serif text-3xl leading-tight text-[#1F4E5F] lg:text-4xl xl:text-[2.75rem]">
                {about.story.title}
              </h2>
              <div className="mt-8 space-y-5">
                {about.story.paragraphs.map((paragraph) => (
                  <p key={paragraph.slice(0, 24)} className="text-base leading-relaxed text-[#6B7280] lg:text-lg">
                    {paragraph}
                  </p>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why choose */}
      <section className="bg-[#F8FAF8] py-20 lg:py-28">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={shouldReduceMotion ? false : 'hidden'}
            whileInView={shouldReduceMotion ? {} : 'visible'}
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            className="mx-auto mb-14 max-w-2xl text-center lg:mb-16"
          >
            <h2 className="font-serif text-3xl text-[#1F4E5F] lg:text-4xl">{about.whyUs.title}</h2>
            <p className="mt-4 text-base leading-relaxed text-[#6B7280] lg:text-lg">
              {about.whyUs.subtitle}
            </p>
          </motion.div>

          <motion.div
            initial={shouldReduceMotion ? false : 'hidden'}
            whileInView={shouldReduceMotion ? {} : 'visible'}
            viewport={{ once: true, amount: 0.15 }}
            variants={stagger}
            className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6"
          >
            {about.whyUs.items.map((item, index) => {
              const Icon = whyIcons[index];
              return (
                <motion.article
                  key={item.title}
                  variants={cardReveal}
                  whileHover={
                    shouldReduceMotion
                      ? {}
                      : { y: -5, transition: { duration: 0.25 } }
                  }
                  className="group rounded-[24px] border border-[#E8EDEA] bg-white p-7 shadow-[0_4px_28px_rgba(31,78,95,0.05)] transition-[box-shadow,border-color] duration-300 hover:border-[#CFE8D2] hover:shadow-[0_16px_48px_rgba(31,78,95,0.1)] lg:p-8"
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#E8F4EA] transition-colors duration-300 group-hover:bg-[#CFE8D2]">
                    <Icon className="h-6 w-6 text-[#1F4E5F]" strokeWidth={1.75} />
                  </div>
                  <h3 className="font-semibold text-lg text-[#1F4E5F]">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#6B7280] lg:text-base">
                    {item.description}
                  </p>
                </motion.article>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Mission & values */}
      <section className="bg-[#EEF6EE] py-20 lg:py-24">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={shouldReduceMotion ? false : 'hidden'}
            whileInView={shouldReduceMotion ? {} : 'visible'}
            viewport={{ once: true, amount: 0.3 }}
            variants={stagger}
            className="grid gap-10 lg:grid-cols-2 lg:gap-16"
          >
            <motion.div
              variants={cardReveal}
              className="rounded-[28px] border border-[#CFE8D2]/80 bg-white/80 p-8 backdrop-blur-sm lg:p-10"
            >
              <p className="mb-3 text-[11px] font-semibold tracking-[0.2em] text-[#1F4E5F]/70 uppercase">
                {about.mission.missionTitle}
              </p>
              <p className="font-serif text-2xl leading-snug text-[#1F4E5F] text-balance lg:text-3xl">
                {about.mission.missionText}
              </p>
            </motion.div>

            <motion.div
              variants={cardReveal}
              className="rounded-[28px] border border-[#CFE8D2]/80 bg-white/80 p-8 backdrop-blur-sm lg:p-10"
            >
              <p className="mb-6 text-[11px] font-semibold tracking-[0.2em] text-[#1F4E5F]/70 uppercase">
                {about.mission.valuesTitle}
              </p>
              <ul className="grid gap-4 sm:grid-cols-2">
                {about.mission.values.map((value) => (
                  <li
                    key={value}
                    className="flex items-center gap-3 rounded-2xl border border-[#E8EDEA] bg-white px-5 py-4 shadow-sm"
                  >
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#8DBE91] text-sm font-bold text-white">
                      ✓
                    </span>
                    <span className="font-semibold text-[#1F4E5F]">{value}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Sesimbra */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={shouldReduceMotion ? false : 'hidden'}
            whileInView={shouldReduceMotion ? {} : 'visible'}
            viewport={{ once: true }}
            variants={fadeUp}
            className="mb-10 text-center font-serif text-3xl text-[#1F4E5F] lg:mb-12 lg:text-4xl"
          >
            {about.sesimbra.title}
          </motion.h2>

          <motion.div
            initial={shouldReduceMotion ? false : 'hidden'}
            whileInView={shouldReduceMotion ? {} : 'visible'}
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            className="relative mb-10 aspect-[21/9] overflow-hidden rounded-[24px] shadow-[0_20px_60px_-16px_rgba(31,78,95,0.2)] lg:mb-12"
          >
            <Image
              src={ABOUT_IMAGES.sesimbraPanorama}
              alt={about.sesimbra.panoramicAlt}
              fill
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1F4E5F]/50 via-transparent to-transparent" />
            <p className="absolute bottom-6 left-6 right-6 max-w-lg font-serif text-xl text-white sm:text-2xl lg:bottom-8 lg:left-10">
              {about.sesimbra.panoramicCaption}
            </p>
          </motion.div>

          <motion.div
            initial={shouldReduceMotion ? false : 'hidden'}
            whileInView={shouldReduceMotion ? {} : 'visible'}
            viewport={{ once: true, amount: 0.15 }}
            variants={stagger}
            className="grid gap-6 md:grid-cols-3"
          >
            {about.sesimbra.cards.map((card, index) => {
              const Icon = sesimbraIcons[index];
              return (
                <motion.article
                  key={card.title}
                  variants={cardReveal}
                  whileHover={
                    shouldReduceMotion
                      ? {}
                      : { y: -6, transition: { duration: 0.25 } }
                  }
                  className="group overflow-hidden rounded-[24px] border border-[#E8EDEA] bg-white shadow-[0_8px_32px_rgba(31,78,95,0.06)] transition-shadow duration-300 hover:shadow-[0_20px_48px_rgba(31,78,95,0.12)]"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={ABOUT_IMAGES.sesimbraCards[index]}
                      alt={card.imageAlt}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1F4E5F]/40 to-transparent" />
                    <div className="absolute bottom-4 left-4 flex h-10 w-10 items-center justify-center rounded-xl bg-white/90 backdrop-blur-sm">
                      <Icon className="h-5 w-5 text-[#1F4E5F]" strokeWidth={1.75} />
                    </div>
                  </div>
                  <div className="p-6 lg:p-7">
                    <h3 className="font-semibold text-lg text-[#1F4E5F]">{card.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-[#6B7280] lg:text-base">
                      {card.description}
                    </p>
                  </div>
                </motion.article>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white pb-20 pt-4 lg:pb-28">
        <PremiumCtaCard
          title={about.cta.title}
          description={about.cta.description}
          pills={about.cta.pills}
          ctaLabel={about.cta.button}
          disclaimer={about.cta.disclaimer}
          href={routes.contact}
        />
      </section>
    </>
  );
}
