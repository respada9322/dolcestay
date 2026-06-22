'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  CheckCircle2,
  Megaphone,
  Calendar,
  MessageCircle,
  Key,
  Sparkles,
  Wrench,
  TrendingUp,
  BarChart3,
  MapPinned,
  Layers,
  Users,
  Shield,
  Star,
  Headphones,
  Handshake,
  Send,
  Loader2,
  type LucideIcon,
} from 'lucide-react';
import { animate, motion, useInView, useReducedMotion } from 'framer-motion';
import { useLanguage } from '@/lib/language-context';
import { HowItWorksSection } from '@/components/sections/how-it-works-section';
import { PremiumCtaCard } from '@/components/sections/premium-cta-card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { useContactForm } from '@/hooks/use-contact-form';
import { FormStatusAlert } from '@/components/contact/form-status-alert';
import {
  OWNERS_PAGE_METRICS,
  type OwnersPageMetricKey,
} from '@/lib/owners-page-metrics';
import {
  OWNERS_CONTACT_SECTION_ID,
  ownersContactSection,
  routes,
} from '@/lib/navigation';

const PAGE_IMAGES = {
  hero: '/images/accommodations/casa-do-dario/casa_do_dario.webp',
} as const;

const INITIAL_OWNER_FORM = {
  name: '',
  email: '',
  phone: '',
  location: '',
  propertyType: 'apartment',
  bedrooms: '',
  message: '',
};

const metricKeys: OwnersPageMetricKey[] = [
  'metric1',
  'metric2',
  'metric3',
  'metric4',
];
const metricIcons: LucideIcon[] = [Shield, Star, Headphones, Handshake];

const serviceKeys = [
  'listing',
  'booking',
  'communication',
  'checkIn',
  'cleaning',
  'maintenance',
  'pricing',
  'reports',
] as const;

const serviceIcons: LucideIcon[] = [
  Megaphone,
  Calendar,
  MessageCircle,
  Key,
  Sparkles,
  Wrench,
  TrendingUp,
  BarChart3,
];

const whyIcons: LucideIcon[] = [
  MapPinned,
  Layers,
  MessageCircle,
  TrendingUp,
  Users,
];

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
        if (type === 'percent') setDisplay(`${Math.round(latest)}%`);
        else if (type === 'percentPlus') setDisplay(`+${Math.round(latest)}%`);
        else setDisplay(latest.toFixed(1));
      },
    });
    return () => controls.stop();
  }, [enabled, type, value, staticDisplay]);

  return <span className="tabular-nums">{display}</span>;
}

function scrollToContact() {
  const el = document.getElementById(OWNERS_CONTACT_SECTION_ID);
  el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

export function OwnersPageSection() {
  const { t } = useLanguage();
  const page = t.ownersPage;
  const shouldReduceMotion = useReducedMotion();
  const metricsRef = useRef<HTMLDivElement>(null);
  const metricsInView = useInView(metricsRef, { once: true, amount: 0.35 });
  const animateMetrics = metricsInView && !shouldReduceMotion;

  const [formData, setFormData] = useState(INITIAL_OWNER_FORM);

  const buildPayload = useCallback(() => {
    const propertyTypeLabel =
      page.form.propertyTypes[
        formData.propertyType as keyof typeof page.form.propertyTypes
      ] ?? formData.propertyType;

    return {
      name: formData.name.trim(),
      email: formData.email.trim(),
      phone: formData.phone.trim() || undefined,
      contactType: 'Proprietário',
      propertyLocation: formData.location.trim(),
      propertyType: propertyTypeLabel,
      bedrooms: formData.bedrooms.trim(),
      message: formData.message.trim() || undefined,
      formType: 'property-evaluation' as const,
    };
  }, [formData, page.form.propertyTypes]);

  const { errorMessage, submit, isSubmitting, isSuccess } =
    useContactForm({
      buildPayload,
      onSuccess: () => setFormData(INITIAL_OWNER_FORM),
    });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <>
      {/* Hero */}
      <section className="overflow-hidden bg-gradient-to-b from-[#F8FAF8] via-white to-white pt-8 pb-16 lg:pt-12 lg:pb-24">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-20">
            <motion.div
              initial={shouldReduceMotion ? false : 'hidden'}
              animate="visible"
              variants={fadeUp}
              className="order-2 lg:order-1"
            >
              <span className="mb-5 inline-block rounded-full bg-[#CFE8D2] px-4 py-1.5 text-sm font-semibold text-[#1F4E5F]">
                {page.hero.badge}
              </span>
              <h1 className="font-serif text-3xl leading-[1.12] tracking-tight text-[#1F4E5F] text-balance sm:text-4xl lg:text-5xl xl:text-[3.25rem]">
                {page.hero.title}
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-[#6B7280] text-pretty">
                {page.hero.subtitle}
              </p>
              <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
                <button
                  type="button"
                  onClick={scrollToContact}
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#8DBE91] px-8 py-4 text-base font-bold text-white shadow-[0_8px_28px_-6px_rgba(141,190,145,0.55)] transition-all hover:bg-[#7AAD7E] hover:shadow-[0_12px_36px_-6px_rgba(141,190,145,0.65)]"
                >
                  {page.hero.ctaPrimary}
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5" />
                </button>
                <Link
                  href={routes.contact}
                  className="inline-flex items-center justify-center rounded-full border-2 border-[#1F4E5F] px-8 py-4 text-base font-bold text-[#1F4E5F] transition-colors hover:bg-[#1F4E5F] hover:text-white"
                >
                  {page.hero.ctaSecondary}
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
                  src={PAGE_IMAGES.hero}
                  alt={page.hero.imageAlt}
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>

              <motion.div
                initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="absolute -bottom-4 -left-2 z-10 hidden w-[min(100%,280px)] rounded-2xl border border-white/60 bg-white/95 p-5 shadow-[0_16px_48px_-12px_rgba(31,78,95,0.25)] backdrop-blur-sm sm:-bottom-6 sm:-left-6 sm:block lg:-left-8"
              >
                <p className="mb-3 text-sm font-bold text-[#1F4E5F]">
                  {page.hero.floatingCard.title}
                </p>
                <ul className="space-y-2">
                  {page.hero.floatingCard.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-[#6B7280]">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-[#8DBE91]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>

              <div
                aria-hidden
                className="pointer-events-none absolute -bottom-6 -right-6 h-32 w-32 rounded-full bg-[#CFE8D2]/50 blur-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust metrics */}
      <section className="border-y border-[#E8EDEA] bg-[#F8FAF8] py-10 sm:py-14 lg:py-20">
        <div ref={metricsRef} className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={shouldReduceMotion ? false : 'hidden'}
            whileInView={shouldReduceMotion ? {} : 'visible'}
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            className="mx-auto mb-6 max-w-3xl text-center sm:mb-12"
          >
            <p className="mb-3 text-[11px] font-semibold tracking-[0.2em] text-[#1F4E5F]/80 uppercase">
              {page.trustMetrics.badge}
            </p>
            <h2 className="font-serif text-3xl leading-tight text-[#1F4E5F] text-balance lg:text-4xl">
              {page.trustMetrics.title}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-[#6B7280]">
              {page.trustMetrics.subtitle}
            </p>
          </motion.div>

          <motion.div
            initial={shouldReduceMotion ? false : 'hidden'}
            whileInView={shouldReduceMotion ? {} : 'visible'}
            viewport={{ once: true, amount: 0.2 }}
            variants={stagger}
            className="grid grid-cols-2 gap-2.5 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4 lg:gap-6"
          >
            {metricKeys.map((key, index) => {
              const metric = OWNERS_PAGE_METRICS[key];
              const Icon = metricIcons[index];
              const label = page.trustMetrics.labels[key];

              return (
                <motion.article
                  key={key}
                  variants={cardReveal}
                  whileHover={
                    shouldReduceMotion
                      ? {}
                      : { y: -5, transition: { duration: 0.25 } }
                  }
                  className="group rounded-2xl border border-[#E8EDEA] bg-white p-3.5 text-center shadow-[0_4px_28px_rgba(31,78,95,0.05)] transition-[box-shadow,border-color] duration-300 hover:border-[#CFE8D2] hover:shadow-[0_14px_44px_rgba(31,78,95,0.1)] sm:rounded-[24px] sm:p-7 sm:text-left lg:p-8"
                >
                  <div className="mx-auto mb-2 flex h-8 w-8 items-center justify-center rounded-lg bg-[#E8F4EA] transition-transform duration-300 group-hover:scale-105 sm:mx-0 sm:mb-6 sm:h-11 sm:w-11 sm:rounded-xl">
                    <Icon className="h-4 w-4 text-[#1F4E5F] sm:h-5 sm:w-5" strokeWidth={1.75} />
                  </div>
                  <p className="text-xl font-bold tracking-tight text-[#1F4E5F] sm:text-3xl lg:text-[2rem]">
                    {shouldReduceMotion || metric.counterType === 'static' ? (
                      <span className="tabular-nums">{metric.value}</span>
                    ) : (
                      <AnimatedMetricValue
                        type={metric.counterType}
                        value={'counterValue' in metric ? metric.counterValue : undefined}
                        staticDisplay={metric.value}
                        enabled={animateMetrics}
                      />
                    )}
                  </p>
                  <p className="mt-1 text-[11px] leading-snug text-[#6B7280] sm:mt-2 sm:text-sm sm:leading-relaxed">
                    {label}
                  </p>
                </motion.article>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Why us */}
      <section className="bg-white py-16 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-serif text-2xl leading-tight text-[#1F4E5F] sm:text-3xl lg:text-4xl xl:text-[2.75rem]">
              {page.whyUs.title}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#6B7280] sm:mt-6 sm:text-lg">
              {page.whyUs.description}
            </p>
          </div>

          <motion.div
            initial={shouldReduceMotion ? false : 'hidden'}
            whileInView={shouldReduceMotion ? {} : 'visible'}
            viewport={{ once: true, amount: 0.2 }}
            variants={stagger}
            className="mx-auto mt-10 grid max-w-5xl gap-3 sm:mt-14 sm:grid-cols-4 sm:gap-4 lg:grid-cols-6 lg:gap-6"
          >
            {page.whyUs.points.map((point, index) => {
              const Icon = whyIcons[index];
              const total = page.whyUs.points.length;
              const isLastAloneOnSm = index === total - 1 && total % 2 === 1;
              const isLastPairStartOnLg = index === total - 2 && total % 3 === 2;

              return (
                <motion.div
                  key={point}
                  variants={cardReveal}
                  className={[
                    'group flex items-start gap-3 rounded-2xl border border-[#E8EDEA] bg-[#F8FAF8] p-4 transition-all hover:border-[#CFE8D2] hover:bg-white hover:shadow-[0_8px_32px_rgba(31,78,95,0.08)] sm:col-span-2 sm:gap-4 sm:p-5 lg:col-span-2 lg:p-6',
                    isLastAloneOnSm && 'sm:col-start-2',
                    isLastPairStartOnLg && 'lg:col-start-2',
                  ]
                    .filter(Boolean)
                    .join(' ')}
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#CFE8D2] transition-colors group-hover:bg-[#8DBE91] sm:h-12 sm:w-12">
                    <Icon className="h-5 w-5 text-[#1F4E5F] transition-colors group-hover:text-white sm:h-6 sm:w-6" />
                  </div>
                  <span className="pt-1.5 text-sm font-semibold text-[#1F4E5F] sm:pt-2 sm:text-base">
                    {point}
                  </span>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-gradient-to-b from-[#F8FAF8] to-white py-20 lg:py-28">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-14 max-w-3xl text-center lg:mb-16">
            <span className="mb-4 inline-block rounded-full bg-[#1F4E5F] px-4 py-1.5 text-sm font-semibold text-white">
              {page.services.badge}
            </span>
            <h2 className="font-serif text-3xl leading-tight text-[#1F4E5F] lg:text-4xl xl:text-[2.75rem]">
              {page.services.title}
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-[#6B7280]">
              {page.services.subtitle}
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {serviceKeys.map((key, index) => {
              const service = page.services.items[key];
              const Icon = serviceIcons[index];
              const isHighlighted = index < 4;

              return (
                <div
                  key={key}
                  className={`group relative rounded-2xl p-6 transition-all hover:-translate-y-1 lg:p-8 ${
                    isHighlighted
                      ? 'border border-[#CFE8D2] bg-gradient-to-br from-[#F8FAF8] to-[#CFE8D2]/30 shadow-md hover:shadow-xl'
                      : 'bg-white shadow-sm hover:shadow-lg border border-[#E8EDEA]'
                  }`}
                >
                  <div
                    className={`mb-5 inline-flex h-16 w-16 items-center justify-center rounded-2xl shadow-sm transition-all ${
                      isHighlighted
                        ? 'bg-[#8DBE91] text-white group-hover:scale-110'
                        : 'bg-[#E8F4EA] text-[#8DBE91] group-hover:bg-[#8DBE91] group-hover:text-white'
                    }`}
                  >
                    <Icon className="h-7 w-7" strokeWidth={1.5} />
                  </div>
                  <h3 className="mb-3 text-lg font-bold text-[#1F4E5F]">{service.title}</h3>
                  <p className="text-sm leading-relaxed text-[#6B7280]">{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How it works — reuses homepage component */}
      <HowItWorksSection />

      {/* Benefits */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 className="font-serif text-3xl leading-tight text-[#1F4E5F] lg:text-4xl xl:text-[2.75rem]">
                {page.benefits.title}
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-[#6B7280]">
                {page.benefits.subtitle}
              </p>
              <button
                type="button"
                onClick={scrollToContact}
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#1F4E5F] px-8 py-4 text-base font-bold text-white transition-colors hover:bg-[#163B48]"
              >
                {page.hero.ctaPrimary}
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>

            <ul className="grid gap-4 sm:grid-cols-2">
              {page.benefits.items.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 rounded-xl border border-[#E8EDEA] bg-[#F8FAF8] p-5"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#8DBE91]" />
                  <span className="text-sm font-semibold text-[#1F4E5F]">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#F8FAF8] py-20 lg:py-28">
        <div className="mx-auto max-w-[900px] px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="font-serif text-3xl leading-tight text-[#1F4E5F] lg:text-4xl">
              {page.faq.title}
            </h2>
            <p className="mt-4 text-lg text-[#6B7280]">{page.faq.subtitle}</p>
          </div>

          <Accordion type="single" collapsible className="space-y-3">
            {page.faq.items.map((item, index) => (
              <AccordionItem
                key={item.question}
                value={`faq-${index}`}
                className="overflow-hidden rounded-2xl border border-[#E8EDEA] bg-white px-6 shadow-sm"
              >
                <AccordionTrigger className="py-5 text-left text-base font-semibold text-[#1F4E5F] hover:no-underline lg:text-lg">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="pb-5 text-base leading-relaxed text-[#6B7280]">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Lead form */}
      <section
        id={OWNERS_CONTACT_SECTION_ID}
        className="scroll-mt-24 bg-white py-20 lg:py-28"
      >
        <div className="mx-auto max-w-[720px] px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <h2 className="font-serif text-3xl leading-tight text-[#1F4E5F] lg:text-4xl">
              {page.form.title}
            </h2>
            <p className="mt-4 text-lg text-[#6B7280]">{page.form.subtitle}</p>
          </div>

          <div className="rounded-[28px] border border-[#E8EDEA] bg-[#F8FAF8] p-8 shadow-[0_8px_40px_rgba(31,78,95,0.08)] lg:p-10">
            {isSuccess ? (
              <div className="py-12 text-center">
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#CFE8D2]">
                  <CheckCircle2 className="h-8 w-8 text-[#1F4E5F]" />
                </div>
                <h3 className="font-serif text-2xl text-[#1F4E5F]">{page.form.successTitle}</h3>
                <p className="mt-3 text-[#6B7280]">{page.form.successMessage}</p>
              </div>
            ) : (
              <form onSubmit={submit} className="relative space-y-5" noValidate>
                {errorMessage && <FormStatusAlert message={errorMessage} />}
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="owner-name" className="mb-2 block text-sm font-medium text-[#1F4E5F]">
                      {page.form.fields.name} *
                    </label>
                    <input
                      id="owner-name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      className="w-full rounded-xl border border-[#E5E7EB] bg-white px-4 py-3 text-[#111111] outline-none transition-colors focus:border-[#8DBE91] focus:ring-2 focus:ring-[#8DBE91]/20 disabled:opacity-60"
                    />
                  </div>
                  <div>
                    <label htmlFor="owner-email" className="mb-2 block text-sm font-medium text-[#1F4E5F]">
                      {page.form.fields.email} *
                    </label>
                    <input
                      id="owner-email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      className="w-full rounded-xl border border-[#E5E7EB] bg-white px-4 py-3 text-[#111111] outline-none transition-colors focus:border-[#8DBE91] focus:ring-2 focus:ring-[#8DBE91]/20 disabled:opacity-60"
                    />
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="owner-phone" className="mb-2 block text-sm font-medium text-[#1F4E5F]">
                      {page.form.fields.phone}
                    </label>
                    <input
                      id="owner-phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      className="w-full rounded-xl border border-[#E5E7EB] bg-white px-4 py-3 text-[#111111] outline-none transition-colors focus:border-[#8DBE91] focus:ring-2 focus:ring-[#8DBE91]/20 disabled:opacity-60"
                    />
                  </div>
                  <div>
                    <label htmlFor="owner-location" className="mb-2 block text-sm font-medium text-[#1F4E5F]">
                      {page.form.fields.location} *
                    </label>
                    <input
                      id="owner-location"
                      name="location"
                      type="text"
                      required
                      value={formData.location}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      className="w-full rounded-xl border border-[#E5E7EB] bg-white px-4 py-3 text-[#111111] outline-none transition-colors focus:border-[#8DBE91] focus:ring-2 focus:ring-[#8DBE91]/20 disabled:opacity-60"
                    />
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="owner-type" className="mb-2 block text-sm font-medium text-[#1F4E5F]">
                      {page.form.fields.propertyType}
                    </label>
                    <select
                      id="owner-type"
                      name="propertyType"
                      value={formData.propertyType}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      className="w-full rounded-xl border border-[#E5E7EB] bg-white px-4 py-3 text-[#111111] outline-none transition-colors focus:border-[#8DBE91] focus:ring-2 focus:ring-[#8DBE91]/20 disabled:opacity-60"
                    >
                      {Object.entries(page.form.propertyTypes).map(([value, label]) => (
                        <option key={value} value={value}>
                          {label}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="owner-bedrooms" className="mb-2 block text-sm font-medium text-[#1F4E5F]">
                      {page.form.fields.bedrooms} *
                    </label>
                    <input
                      id="owner-bedrooms"
                      name="bedrooms"
                      type="number"
                      min={0}
                      required
                      value={formData.bedrooms}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      className="w-full rounded-xl border border-[#E5E7EB] bg-white px-4 py-3 text-[#111111] outline-none transition-colors focus:border-[#8DBE91] focus:ring-2 focus:ring-[#8DBE91]/20 disabled:opacity-60"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="owner-message" className="mb-2 block text-sm font-medium text-[#1F4E5F]">
                    {page.form.fields.message}
                  </label>
                  <textarea
                    id="owner-message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    className="w-full resize-none rounded-xl border border-[#E5E7EB] bg-white px-4 py-3 text-[#111111] outline-none transition-colors focus:border-[#8DBE91] focus:ring-2 focus:ring-[#8DBE91]/20 disabled:opacity-60"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  aria-busy={isSubmitting}
                  className="w-full rounded-full bg-[#8DBE91] py-6 text-base font-bold text-white hover:bg-[#7AAD7E] sm:w-auto sm:px-10 disabled:opacity-60"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" aria-hidden />
                      {page.form.submitting}
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-5 w-5" />
                      {page.form.submit}
                    </>
                  )}
                </Button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="pb-20 lg:pb-28">
        <PremiumCtaCard
          title={page.finalCta.title}
          description={page.finalCta.description}
          pills={page.finalCta.pills}
          ctaLabel={page.finalCta.button}
          disclaimer={page.finalCta.disclaimer}
          href={ownersContactSection()}
        />
      </section>
    </>
  );
}
