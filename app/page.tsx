import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { FloatingWhatsApp } from '@/components/floating-whatsapp'
import { HeroSection } from '@/components/sections/hero-section'
import { DualJourneySection } from '@/components/sections/dual-journey-section'
import { AccommodationsPreview } from '@/components/sections/accommodations-preview'
import { ServicesSection } from '@/components/sections/services-section'
import { OwnersSection } from '@/components/sections/owners-section'
import { PartnershipsSection } from '@/components/sections/partnerships-section'
import { TestimonialsSection } from '@/components/sections/testimonials-section'
import { AboutSection } from '@/components/sections/about-section'
import { ContactSection } from '@/components/sections/contact-section'

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <DualJourneySection />
      <AccommodationsPreview />
      <ServicesSection />
      <OwnersSection />
      <PartnershipsSection />
      <AboutSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
      <FloatingWhatsApp />
    </main>
  )
}
