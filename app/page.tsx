import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { FloatingWhatsApp } from '@/components/floating-whatsapp'
import { HeroSection } from '@/components/sections/hero-section'
import { DualJourneySection } from '@/components/sections/dual-journey-section'
import { AccommodationsPreview } from '@/components/sections/accommodations-preview'
import { ServicesSection } from '@/components/sections/services-section'
import { HowItWorksSection } from '@/components/sections/how-it-works-section'
import { TrustMetricsSection } from '@/components/sections/trust-metrics-section'
import { OwnersSection } from '@/components/sections/owners-section'
import { TestimonialsSection } from '@/components/sections/testimonials-section'

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <DualJourneySection />
      <AccommodationsPreview />
      <ServicesSection />
      <HowItWorksSection />
      <TrustMetricsSection />
      <OwnersSection />
      <TestimonialsSection />
      <Footer />
      <FloatingWhatsApp />
    </main>
  )
}
