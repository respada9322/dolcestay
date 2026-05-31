'use client';

import { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { useLanguage } from '@/lib/language-context';
import type { Translations } from '@/lib/translations';
import { getGoogleReviewsUrl } from '@/lib/google-reviews-config';

type Testimonial = Translations['testimonials']['items'][number];

export function TestimonialsSection() {
  const { t } = useLanguage();
  const testimonials = t.testimonials.items;
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-16 lg:py-24 bg-white" aria-labelledby="testimonials-heading">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 id="testimonials-heading" className="font-serif text-3xl lg:text-4xl text-[#1F4E5F] mb-4">
            {t.testimonials.title}
          </h2>
          <p className="text-[#6B7280]">
            {t.testimonials.subtitle}
          </p>
        </div>

        {/* Testimonials Grid - Desktop */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} t={t} />
          ))}
        </div>

        {/* Testimonials Slider - Mobile */}
        <div className="lg:hidden">
          <div className="relative">
            <TestimonialCard testimonial={testimonials[currentIndex]} t={t} />
            
            {/* Navigation */}
            <div className="flex justify-center items-center gap-4 mt-6">
              <button
                onClick={prevTestimonial}
                className="p-2 rounded-full bg-[#F8FAF8] hover:bg-[#CFE8D2] transition-colors"
                aria-label={t.testimonials.prevLabel}
              >
                <ChevronLeft className="h-5 w-5 text-[#1F4E5F]" />
              </button>
              
              <div className="flex gap-2" role="tablist" aria-label={t.testimonials.indicatorsLabel}>
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === currentIndex ? 'bg-[#8DBE91]' : 'bg-[#E5E7EB]'
                    }`}
                    role="tab"
                    aria-selected={index === currentIndex}
                    aria-label={`${t.testimonials.testimonialLabel} ${index + 1}`}
                  />
                ))}
              </div>
              
              <button
                onClick={nextTestimonial}
                className="p-2 rounded-full bg-[#F8FAF8] hover:bg-[#CFE8D2] transition-colors"
                aria-label={t.testimonials.nextLabel}
              >
                <ChevronRight className="h-5 w-5 text-[#1F4E5F]" />
              </button>
            </div>
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

function TestimonialCard({ testimonial, t }: { testimonial: Testimonial; t: Translations }) {
  const typeLabel = testimonial.type === 'guest' ? t.testimonials.guest : t.testimonials.owner;

  return (
    <article className="bg-[#F8FAF8] rounded-2xl p-6 lg:p-8 relative">
      <Quote className="absolute top-4 right-4 h-8 w-8 text-[#CFE8D2]" aria-hidden="true" />
      
      {/* Rating */}
      <div className="flex gap-1 mb-4" role="img" aria-label={`${testimonial.rating} ${t.testimonials.starsLabel}`}>
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <Star key={i} className="h-5 w-5 text-[#F59E0B] fill-[#F59E0B]" aria-hidden="true" />
        ))}
      </div>
      
      {/* Quote */}
      <blockquote className="text-[#6B7280] italic mb-6 leading-relaxed">
        &ldquo;{testimonial.text}&rdquo;
      </blockquote>
      
      {/* Author */}
      <footer className="flex items-center justify-between">
        <div>
          <cite className="font-semibold text-[#1F4E5F] not-italic">{testimonial.author}</cite>
          <p className="text-sm text-[#8DBE91]">{testimonial.location}</p>
        </div>
        <span className={`px-3 py-1 text-xs font-medium rounded-full ${
          testimonial.type === 'guest' 
            ? 'bg-[#7EBBD3]/20 text-[#1F4E5F]' 
            : 'bg-[#CFE8D2] text-[#1F4E5F]'
        }`}>
          {typeLabel}
        </span>
      </footer>
    </article>
  );
}
