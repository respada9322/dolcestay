'use client';

import Image from 'next/image';
import { useCallback, useEffect, useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { useLanguage } from '@/lib/language-context';
import type { Translations } from '@/lib/translations';
import { getGoogleReviewsUrl } from '@/lib/google-reviews-config';
import { testimonialGalleries } from '@/lib/data';
import { cn } from '@/lib/utils';

type Testimonial = Translations['testimonials']['items'][number];

const AUTOPLAY_INTERVAL = 12000;

const navButtonClass = cn(
  'flex h-9 w-9 shrink-0 items-center justify-center rounded-full sm:h-10 sm:w-10',
  'border border-[#E8EDEA] bg-white text-[#1F4E5F]',
  'shadow-sm transition-all duration-200',
  'hover:border-[#8DBE91]/60 hover:bg-[#F8FAF8] hover:shadow-md',
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8DBE91] focus-visible:ring-offset-2',
  'active:scale-95 disabled:cursor-not-allowed disabled:opacity-40',
);

const imageFrameClass = cn(
  'relative overflow-hidden rounded-xl lg:rounded-2xl',
  'bg-[#F0F4F2] shadow-md shadow-[#1F4E5F]/[0.06]',
  'transition-shadow duration-300 hover:shadow-lg hover:shadow-[#1F4E5F]/10',
);

const fadeVariants = {
  enter: { opacity: 0 },
  center: { opacity: 1 },
  exit: { opacity: 0 },
};

export function TestimonialsSection() {
  const { t } = useLanguage();
  const testimonials = t.testimonials.items;
  const shouldReduceMotion = useReducedMotion();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  const total = testimonials.length;

  const goToSlide = useCallback(
    (index: number) => {
      setProgress(0);
      setCurrentIndex(((index % total) + total) % total);
    },
    [total],
  );

  const goToPrev = useCallback(() => {
    goToSlide(currentIndex - 1);
  }, [currentIndex, goToSlide]);

  const goToNext = useCallback(() => {
    goToSlide(currentIndex + 1);
  }, [currentIndex, goToSlide]);

  useEffect(() => {
    const handleVisibility = () => {
      setIsPaused(document.hidden);
    };

    document.addEventListener('visibilitychange', handleVisibility);
    return () => document.removeEventListener('visibilitychange', handleVisibility);
  }, []);

  useEffect(() => {
    if (isPaused || shouldReduceMotion) return;

    const startedAt = Date.now();

    const progressTimer = window.setInterval(() => {
      const elapsed = Date.now() - startedAt;
      setProgress(Math.min(elapsed / AUTOPLAY_INTERVAL, 1));
    }, 50);

    const advanceTimer = window.setTimeout(() => {
      setProgress(0);
      setCurrentIndex((prev) => (prev + 1) % total);
    }, AUTOPLAY_INTERVAL);

    return () => {
      window.clearInterval(progressTimer);
      window.clearTimeout(advanceTimer);
    };
  }, [currentIndex, isPaused, shouldReduceMotion, total]);

  const pauseHandlers = {
    onMouseEnter: () => setIsPaused(true),
    onMouseLeave: () => setIsPaused(false),
    onFocusCapture: () => setIsPaused(true),
    onBlurCapture: (event: React.FocusEvent<HTMLDivElement>) => {
      if (!event.currentTarget.contains(event.relatedTarget)) {
        setIsPaused(false);
      }
    },
  };

  const currentTestimonial = testimonials[currentIndex];
  const currentGallery = testimonialGalleries[currentIndex] ?? testimonialGalleries[0];
  const transition = shouldReduceMotion
    ? { duration: 0 }
    : { duration: 0.55, ease: 'easeInOut' as const };

  return (
    <section
      className="relative overflow-hidden bg-white py-14 lg:py-20"
      aria-labelledby="testimonials-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#F8FAF8]/70 via-white to-white"
        aria-hidden="true"
      />

      <div className="container relative mx-auto px-4">
        <header className="mx-auto mb-10 max-w-2xl text-center lg:mb-14">
          <h2
            id="testimonials-heading"
            className="font-serif text-3xl text-[#1F4E5F] sm:text-4xl lg:text-[2.5rem] lg:leading-tight"
          >
            {t.testimonials.title}
          </h2>
          <p className="mt-3 text-base text-[#6B7280]">{t.testimonials.subtitle}</p>
        </header>

        <div className="mx-auto max-w-[1240px]" {...pauseHandlers}>
          <div className="flex flex-col gap-8 lg:grid lg:grid-cols-[55fr_45fr] lg:items-stretch lg:gap-10 xl:gap-12">
            <TestimonialGallery
              images={currentGallery}
              galleryKey={currentIndex}
              author={currentTestimonial.author}
              shouldReduceMotion={shouldReduceMotion}
              transition={transition}
            />

            <div className="flex min-h-[420px] flex-col sm:min-h-[440px] lg:min-h-[520px]">
              <div className="relative flex min-h-0 flex-1 flex-col">
                <AnimatePresence mode="wait" initial={false}>
                  <motion.div
                    key={currentIndex}
                    initial={shouldReduceMotion ? false : { opacity: 0, x: 16 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={shouldReduceMotion ? undefined : { opacity: 0, x: -16 }}
                    transition={transition}
                    className="flex h-full min-h-[380px] flex-1 sm:min-h-[400px] lg:min-h-[460px]"
                  >
                    <TestimonialPanel testimonial={currentTestimonial} t={t} />
                  </motion.div>
                </AnimatePresence>
              </div>

              <div className="mt-6 shrink-0 space-y-4">
                {!shouldReduceMotion && (
                  <div
                    className="h-0.5 overflow-hidden rounded-full bg-[#E8EDEA]"
                    role="progressbar"
                    aria-valuenow={Math.round(progress * 100)}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    aria-label={t.testimonials.indicatorsLabel}
                  >
                    <div
                      className="h-full rounded-full bg-[#8DBE91]/70 transition-[width] duration-100 ease-linear"
                      style={{ width: `${progress * 100}%` }}
                    />
                  </div>
                )}

                <div className="flex items-center justify-between gap-4">
                  <button
                    type="button"
                    onClick={goToPrev}
                    className={navButtonClass}
                    aria-label={t.testimonials.prevLabel}
                  >
                    <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" />
                  </button>

                  <div
                    className="flex flex-1 justify-center gap-2"
                    role="tablist"
                    aria-label={t.testimonials.indicatorsLabel}
                  >
                    {testimonials.map((_, index) => (
                      <button
                        key={index}
                        type="button"
                        onClick={() => goToSlide(index)}
                        className={cn(
                          'h-1.5 rounded-full transition-all duration-300',
                          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8DBE91] focus-visible:ring-offset-2',
                          index === currentIndex
                            ? 'w-7 bg-[#8DBE91]'
                            : 'w-1.5 bg-[#1F4E5F]/15 hover:bg-[#8DBE91]/40',
                        )}
                        role="tab"
                        aria-selected={index === currentIndex}
                        aria-label={`${t.testimonials.testimonialLabel} ${index + 1}`}
                      />
                    ))}
                  </div>

                  <button
                    type="button"
                    onClick={goToNext}
                    className={navButtonClass}
                    aria-label={t.testimonials.nextLabel}
                  >
                    <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <ReviewCta t={t} />
      </div>
    </section>
  );
}

function TestimonialGallery({
  images,
  galleryKey,
  author,
  shouldReduceMotion,
  transition,
}: {
  images: readonly string[];
  galleryKey: number;
  author: string;
  shouldReduceMotion: boolean | null;
  transition: { duration: number; ease?: 'easeInOut' };
}) {
  const [hero, ...secondary] = images;
  const thumbImages = secondary.slice(0, 4);

  return (
    <div className="relative min-h-[320px] sm:min-h-[380px] lg:min-h-[520px]">
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={galleryKey}
          variants={shouldReduceMotion ? undefined : fadeVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={transition}
          className="h-full"
        >
          {/* Desktop & tablet masonry grid */}
          <div className="hidden h-full min-h-[380px] sm:grid sm:min-h-[420px] sm:grid-cols-12 sm:grid-rows-5 sm:gap-3 lg:min-h-[520px] lg:gap-3.5">
            <GalleryImage
              src={hero}
              alt={`${author} — 1`}
              className={cn(
                imageFrameClass,
                'col-span-8 col-start-5 row-span-5 row-start-1',
              )}
              sizes="(min-width: 1024px) 32vw, 45vw"
              priority
            />
            {thumbImages.map((src, index) => (
              <GalleryImage
                key={src}
                src={src}
                alt={`${author} — ${index + 2}`}
                className={cn(
                  imageFrameClass,
                  index === 0 && 'col-span-4 row-span-2 row-start-1',
                  index === 1 && 'col-span-4 row-span-2 row-start-3',
                  index === 2 && 'col-span-2 row-span-1 row-start-5',
                  index === 3 && 'col-span-2 col-start-3 row-span-1 row-start-5',
                )}
                sizes="(min-width: 1024px) 12vw, 18vw"
              />
            ))}
          </div>

          {/* Mobile: hero + horizontal scroll */}
          <div className="sm:hidden">
            <GalleryImage
              src={hero}
              alt={`${author} — 1`}
              className={cn(imageFrameClass, 'aspect-[4/3] w-full')}
              sizes="100vw"
              priority
            />
            {thumbImages.length > 0 && (
              <div className="mt-3 flex gap-2.5 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                {thumbImages.map((src, index) => (
                  <div
                    key={src}
                    className={cn(imageFrameClass, 'h-20 w-28 shrink-0 sm:h-24 sm:w-32')}
                  >
                    <Image
                      src={src}
                      alt={`${author} — ${index + 2}`}
                      fill
                      className="object-cover"
                      sizes="120px"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

function GalleryImage({
  src,
  alt,
  className,
  sizes,
  priority = false,
}: {
  src: string;
  alt: string;
  className?: string;
  sizes: string;
  priority?: boolean;
}) {
  return (
    <div className={cn('group relative min-h-0', className)}>
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
        sizes={sizes}
        priority={priority}
      />
    </div>
  );
}

function TestimonialPanel({
  testimonial,
  t,
}: {
  testimonial: Testimonial;
  t: Translations;
}) {
  const typeLabel = testimonial.type === 'guest' ? t.testimonials.guest : t.testimonials.owner;

  return (
    <article
      className={cn(
        'flex h-full w-full flex-col rounded-2xl border border-[#E8EDEA] bg-white',
        'px-5 py-6 shadow-lg shadow-[#1F4E5F]/[0.05] sm:px-7 sm:py-7',
        'lg:rounded-3xl lg:px-8 lg:py-8',
      )}
      aria-live="polite"
    >
      <div className="mb-5 flex shrink-0 items-start justify-between gap-4 lg:mb-6">
        <div
          className="flex gap-0.5"
          role="img"
          aria-label={`${testimonial.rating} ${t.testimonials.starsLabel}`}
        >
          {Array.from({ length: testimonial.rating }).map((_, i) => (
            <Star key={i} className="h-4 w-4 text-[#F59E0B] fill-[#F59E0B]" aria-hidden="true" />
          ))}
        </div>
        <Quote className="h-7 w-7 shrink-0 text-[#CFE8D2] lg:h-8 lg:w-8" aria-hidden="true" />
      </div>

      <blockquote
        className={cn(
          'min-h-0 flex-1 overflow-y-auto pr-1 text-[15px] leading-[1.7] text-[#4B5563]',
          'sm:text-base sm:leading-relaxed',
          '[scrollbar-width:thin] [scrollbar-color:#CFE8D2_transparent]',
          '[&::-webkit-scrollbar]:w-1',
          '[&::-webkit-scrollbar-track]:bg-transparent',
          '[&::-webkit-scrollbar-thumb]:rounded-full',
          '[&::-webkit-scrollbar-thumb]:bg-[#CFE8D2]',
        )}
      >
        &ldquo;{testimonial.text}&rdquo;
      </blockquote>

      <footer className="mt-6 flex shrink-0 items-end justify-between gap-3 border-t border-[#E8EDEA] pt-5 sm:gap-4">
        <div className="min-w-0 flex-1">
          <cite className="block truncate text-sm font-semibold text-[#1F4E5F] not-italic sm:text-base">
            {testimonial.author}
          </cite>
          <p className="mt-0.5 truncate text-xs text-[#8DBE91] sm:text-sm">{testimonial.location}</p>
        </div>
        <span
          className={cn(
            'shrink-0 rounded-full px-3 py-1 text-[11px] font-medium tracking-wide sm:text-xs',
            testimonial.type === 'guest'
              ? 'bg-[#7EBBD3]/15 text-[#1F4E5F]'
              : 'bg-[#CFE8D2]/80 text-[#1F4E5F]',
          )}
        >
          {typeLabel}
        </span>
      </footer>
    </article>
  );
}

function ReviewCta({ t }: { t: Translations }) {
  const reviewUrl = getGoogleReviewsUrl();
  const cta = t.testimonials.reviewCta;

  return (
    <aside
      className="mx-auto mt-12 max-w-[900px] rounded-2xl border border-[#E8EDEA] bg-[#F8FAF8] px-6 py-8 text-center lg:flex lg:items-center lg:justify-between lg:gap-8 lg:px-10 lg:py-9 lg:text-left"
      aria-labelledby="review-cta-heading"
    >
      <div className="min-w-0 flex-1">
        <h3
          id="review-cta-heading"
          className="font-serif text-2xl font-semibold text-[#1F4E5F] lg:text-[1.75rem]"
        >
          {cta.title}
        </h3>

        <p
          className="mt-2 text-sm text-[#6B7280]"
          role="img"
          aria-label={cta.socialProofAria}
        >
          <span className="mr-1.5 tracking-wider text-[#F59E0B]" aria-hidden="true">
            ★★★★★
          </span>
          {cta.socialProof}
        </p>

        <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-[#6B7280] lg:mx-0">
          {cta.description}
        </p>
      </div>

      <a
        href={reviewUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-flex h-11 w-full shrink-0 items-center justify-center rounded-full bg-[#1F4E5F] px-8 text-sm font-semibold text-white transition-colors hover:bg-[#163B48] lg:mt-0 lg:w-auto"
      >
        {cta.button}
      </a>
    </aside>
  );
}
