'use client';

import { useCallback, useEffect, useLayoutEffect, useRef, useState, type Ref } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { useLanguage } from '@/lib/language-context';
import type { Translations } from '@/lib/translations';
import { getGoogleReviewsUrl } from '@/lib/google-reviews-config';
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import { cn } from '@/lib/utils';

type Testimonial = Translations['testimonials']['items'][number];

const AUTOPLAY_INTERVAL = 3500;

export function TestimonialsSection() {
  const { t } = useLanguage();
  const testimonials = t.testimonials.items;
  const [api, setApi] = useState<CarouselApi>();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [cardHeight, setCardHeight] = useState<number>();
  const cardRefs = useRef<(HTMLElement | null)[]>([]);

  const measureCardHeights = useCallback(() => {
    const heights = cardRefs.current
      .filter((element): element is HTMLElement => element !== null)
      .map((element) => element.offsetHeight);

    if (heights.length > 0) {
      setCardHeight(Math.max(...heights));
    }
  }, []);

  useLayoutEffect(() => {
    setCardHeight(undefined);
  }, [testimonials]);

  useLayoutEffect(() => {
    if (cardHeight !== undefined) return;
    measureCardHeights();
  }, [cardHeight, measureCardHeights, testimonials]);

  useEffect(() => {
    window.addEventListener('resize', measureCardHeights);
    return () => window.removeEventListener('resize', measureCardHeights);
  }, [measureCardHeights]);

  useEffect(() => {
    if (!api) return;

    const onSelect = () => setCurrentIndex(api.selectedScrollSnap());

    onSelect();
    api.on('select', onSelect);
    api.on('reInit', onSelect);

    return () => {
      api.off('select', onSelect);
      api.off('reInit', onSelect);
    };
  }, [api]);

  useEffect(() => {
    if (!api || isPaused) return;

    const timer = setInterval(() => {
      api.scrollNext();
    }, AUTOPLAY_INTERVAL);

    return () => clearInterval(timer);
  }, [api, isPaused, currentIndex]);

  const goToSlide = useCallback(
    (index: number) => {
      api?.scrollTo(index);
    },
    [api],
  );

  const goToPrev = useCallback(() => {
    api?.scrollPrev();
  }, [api]);

  const goToNext = useCallback(() => {
    api?.scrollNext();
  }, [api]);

  return (
    <section className="py-12 lg:py-16 bg-white" aria-labelledby="testimonials-heading">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 lg:mb-10">
          <h2 id="testimonials-heading" className="font-serif text-3xl lg:text-4xl text-[#1F4E5F] mb-3">
            {t.testimonials.title}
          </h2>
          <p className="text-[#6B7280]">{t.testimonials.subtitle}</p>
        </div>

        <div
          className="relative mx-auto max-w-3xl px-8 sm:px-12"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onFocusCapture={() => setIsPaused(true)}
          onBlurCapture={(event) => {
            if (!event.currentTarget.contains(event.relatedTarget)) {
              setIsPaused(false);
            }
          }}
        >
          <Carousel setApi={setApi} opts={{ loop: true, align: 'center' }}>
            <CarouselContent
              className="ml-0 transition-[min-height] duration-300"
              style={cardHeight ? { minHeight: cardHeight } : undefined}
              aria-live="polite"
            >
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="h-full basis-full pl-0">
                  <TestimonialCard
                    ref={(element) => {
                      cardRefs.current[index] = element;
                    }}
                    testimonial={testimonial}
                    t={t}
                    isActive={index === currentIndex}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

          <button
            type="button"
            onClick={goToPrev}
            className="absolute left-0 top-1/2 z-10 -translate-y-1/2 rounded-full border border-[#E8EDEA] bg-white p-2.5 text-[#1F4E5F] shadow-sm transition-colors hover:border-[#CFE8D2] hover:bg-[#F8FAF8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8DBE91] focus-visible:ring-offset-2"
            aria-label={t.testimonials.prevLabel}
          >
            <ChevronLeft className="h-5 w-5" aria-hidden="true" />
          </button>

          <button
            type="button"
            onClick={goToNext}
            className="absolute right-0 top-1/2 z-10 -translate-y-1/2 rounded-full border border-[#E8EDEA] bg-white p-2.5 text-[#1F4E5F] shadow-sm transition-colors hover:border-[#CFE8D2] hover:bg-[#F8FAF8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8DBE91] focus-visible:ring-offset-2"
            aria-label={t.testimonials.nextLabel}
          >
            <ChevronRight className="h-5 w-5" aria-hidden="true" />
          </button>

          <div
            className="mt-6 flex justify-center gap-2"
            role="tablist"
            aria-label={t.testimonials.indicatorsLabel}
          >
            {testimonials.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => goToSlide(index)}
                className={cn(
                  'h-2 rounded-full transition-all duration-300',
                  index === currentIndex ? 'w-6 bg-[#8DBE91]' : 'w-2 bg-[#E5E7EB] hover:bg-[#CFE8D2]',
                )}
                role="tab"
                aria-selected={index === currentIndex}
                aria-label={`${t.testimonials.testimonialLabel} ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <ReviewCta t={t} />
      </div>
    </section>
  );
}

function ReviewCta({ t }: { t: Translations }) {
  const reviewUrl = getGoogleReviewsUrl();
  const cta = t.testimonials.reviewCta;

  return (
    <aside
      className="mx-auto mt-10 max-w-[900px] rounded-2xl border border-[#E8EDEA] bg-[#F8FAF8] px-6 py-8 text-center lg:flex lg:items-center lg:justify-between lg:gap-8 lg:px-10 lg:py-9 lg:text-left"
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

function TestimonialCard({
  testimonial,
  t,
  isActive,
  ref,
}: {
  testimonial: Testimonial;
  t: Translations;
  isActive: boolean;
  ref?: Ref<HTMLElement>;
}) {
  const typeLabel = testimonial.type === 'guest' ? t.testimonials.guest : t.testimonials.owner;

  return (
    <article
      ref={ref}
      className={cn(
        'relative flex h-full min-h-full flex-col rounded-2xl border border-[#E8EDEA] bg-[#F8FAF8] px-6 py-6 transition-opacity duration-300 sm:px-8 sm:py-7',
        isActive ? 'opacity-100' : 'opacity-60',
      )}
      aria-hidden={!isActive}
    >
      <Quote className="absolute right-5 top-5 h-7 w-7 text-[#CFE8D2]" aria-hidden="true" />

      <div
        className="mb-4 flex gap-1"
        role="img"
        aria-label={`${testimonial.rating} ${t.testimonials.starsLabel}`}
      >
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <Star key={i} className="h-4 w-4 text-[#F59E0B] fill-[#F59E0B]" aria-hidden="true" />
        ))}
      </div>

      <blockquote className="mb-5 flex-1 text-[#4B5563] text-base leading-relaxed sm:text-[1.05rem]">
        &ldquo;{testimonial.text}&rdquo;
      </blockquote>

      <footer className="mt-auto flex items-center justify-between gap-4 border-t border-[#E8EDEA] pt-4">
        <div className="min-w-0">
          <cite className="block truncate font-semibold text-[#1F4E5F] not-italic">
            {testimonial.author}
          </cite>
          <p className="truncate text-sm text-[#8DBE91]">{testimonial.location}</p>
        </div>
        <span
          className={cn(
            'shrink-0 rounded-full px-3 py-1 text-xs font-medium',
            testimonial.type === 'guest'
              ? 'bg-[#7EBBD3]/20 text-[#1F4E5F]'
              : 'bg-[#CFE8D2] text-[#1F4E5F]',
          )}
        >
          {typeLabel}
        </span>
      </footer>
    </article>
  );
}
