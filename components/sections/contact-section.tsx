'use client';

import { useState } from 'react';
import { MapPin, Phone, Mail, MessageCircle, Send, ArrowRight } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { useLanguage } from '@/lib/language-context';
import { contactInfo, BOOKING_URL } from '@/lib/data';
import { Button } from '@/components/ui/button';

export function ContactSection() {
  const { t } = useLanguage();
  const shouldReduceMotion = useReducedMotion();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    type: 'reservation',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission - in production, connect to your backend/CRM
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    setSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="pt-20 pb-0 lg:pt-28 bg-gradient-to-b from-white to-[#F8FAF8] scroll-mt-20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-14">
          <span className="inline-block px-4 py-1.5 bg-[#CFE8D2] text-[#1F4E5F] text-sm font-semibold rounded-full mb-4">
            {t.contact.subtitle}
          </span>
          <h2 className="font-serif text-3xl lg:text-4xl xl:text-5xl text-[#1F4E5F] mb-4">
            {t.contact.title}
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div>
            <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-xl border border-[#E5E7EB]">
              <h3 className="font-serif text-2xl text-[#1F4E5F] mb-8">
                {t.footer.addressTitle}
              </h3>

              <div className="space-y-6">
                {/* Location */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-14 h-14 bg-[#CFE8D2] rounded-2xl flex items-center justify-center">
                    <MapPin className="h-7 w-7 text-[#8DBE91]" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#1F4E5F] mb-1">{t.contact.location}</p>
                    <address className="text-[#6B7280] not-italic leading-relaxed">
                      {contactInfo.address.street}
                      <br />
                      {contactInfo.address.postalCode} {contactInfo.address.city}
                      <br />
                      {contactInfo.address.country}
                    </address>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-14 h-14 bg-[#CFE8D2] rounded-2xl flex items-center justify-center">
                    <Phone className="h-7 w-7 text-[#8DBE91]" />
                  </div>
                  <div className="pt-1">
                    {contactInfo.phones.map((phone, index) => (
                      <a
                        key={index}
                        href={`tel:${phone.replace(/\s/g, '')}`}
                        className="block text-[#1F4E5F] hover:text-[#8DBE91] transition-colors font-medium py-0.5"
                      >
                        {phone}
                      </a>
                    ))}
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-14 h-14 bg-[#CFE8D2] rounded-2xl flex items-center justify-center">
                    <Mail className="h-7 w-7 text-[#8DBE91]" />
                  </div>
                  <div className="pt-3">
                    <a
                      href={`mailto:${contactInfo.email}`}
                      className="text-[#1F4E5F] hover:text-[#8DBE91] transition-colors font-medium"
                    >
                      {contactInfo.email}
                    </a>
                  </div>
                </div>
              </div>

              {/* WhatsApp CTA */}
              <div className="mt-10 pt-8 border-t border-[#E5E7EB]">
                <a
                  href={`https://wa.me/${contactInfo.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full gap-3 px-6 py-4 bg-[#25D366] hover:bg-[#20BA5A] text-white font-bold rounded-2xl transition-all shadow-lg hover:shadow-xl"
                >
                  <MessageCircle className="h-6 w-6" />
                  {t.contact.whatsapp}
                </a>
              </div>

              {/* Quick booking link */}
              <div className="mt-4">
                <a
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full gap-2 px-6 py-4 bg-[#8DBE91] hover:bg-[#7AAD7E] text-white font-bold rounded-2xl transition-all shadow-lg hover:shadow-xl"
                >
                  {t.contact.viewAccommodations}
                  <ArrowRight className="h-5 w-5" />
                </a>
              </div>

            </div>
          </div>

          {/* Contact Form */}
          <div>
            {submitted ? (
              <div className="bg-gradient-to-br from-[#CFE8D2] to-[#8DBE91]/30 rounded-3xl p-10 text-center h-full flex flex-col items-center justify-center shadow-xl">
                <div className="w-20 h-20 bg-[#8DBE91] rounded-full flex items-center justify-center mb-6 shadow-lg">
                  <Send className="h-10 w-10 text-white" />
                </div>
                <h3 className="font-serif text-2xl text-[#1F4E5F] mb-3">
                  {t.contact.messageSent}
                </h3>
                <p className="text-[#1F4E5F]/80 text-lg mb-6">
                  {t.contact.thankYou}
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-[#1F4E5F] hover:text-[#8DBE91] font-semibold transition-colors underline underline-offset-4"
                >
                  {t.contact.sendAnother}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-8 lg:p-10 shadow-xl border border-[#E5E7EB] space-y-6">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-semibold text-[#1F4E5F] mb-2">
                      {t.contact.form.firstName}
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3.5 border border-[#E5E7EB] rounded-xl focus:ring-2 focus:ring-[#8DBE91] focus:border-transparent outline-none transition-all bg-[#F8FAF8] text-[#111111]"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-semibold text-[#1F4E5F] mb-2">
                      {t.contact.form.lastName}
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3.5 border border-[#E5E7EB] rounded-xl focus:ring-2 focus:ring-[#8DBE91] focus:border-transparent outline-none transition-all bg-[#F8FAF8] text-[#111111]"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-[#1F4E5F] mb-2">
                    {t.contact.form.email} *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3.5 border border-[#E5E7EB] rounded-xl focus:ring-2 focus:ring-[#8DBE91] focus:border-transparent outline-none transition-all bg-[#F8FAF8] text-[#111111]"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-[#1F4E5F] mb-2">
                    {t.contact.form.phone}
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3.5 border border-[#E5E7EB] rounded-xl focus:ring-2 focus:ring-[#8DBE91] focus:border-transparent outline-none transition-all bg-[#F8FAF8] text-[#111111]"
                  />
                </div>

                <div>
                  <label htmlFor="type" className="block text-sm font-semibold text-[#1F4E5F] mb-2">
                    {t.contact.form.type}
                  </label>
                  <select
                    id="type"
                    name="type"
                    value={formData.type}
                    onChange={handleChange}
                    className="w-full px-4 py-3.5 border border-[#E5E7EB] rounded-xl focus:ring-2 focus:ring-[#8DBE91] focus:border-transparent outline-none transition-all bg-[#F8FAF8] text-[#111111]"
                  >
                    <option value="reservation">{t.contact.form.types.reservation}</option>
                    <option value="owner">{t.contact.form.types.owner}</option>
                    <option value="partnership">{t.contact.form.types.partnership}</option>
                    <option value="other">{t.contact.form.types.other}</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-[#1F4E5F] mb-2">
                    {t.contact.form.message}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    required
                    className="w-full px-4 py-3.5 border border-[#E5E7EB] rounded-xl focus:ring-2 focus:ring-[#8DBE91] focus:border-transparent outline-none transition-all resize-none bg-[#F8FAF8] text-[#111111]"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 h-auto bg-[#1F4E5F] hover:bg-[#163B48] text-white font-bold text-base rounded-xl transition-all disabled:opacity-50 shadow-lg hover:shadow-xl"
                >
                  {isSubmitting ? t.common.loading : t.contact.form.submit}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Full-width map section */}
      <motion.div
        initial={shouldReduceMotion ? false : { opacity: 0, y: 22 }}
        whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.55, ease: 'easeOut' }}
        className="group relative mt-16 w-full overflow-hidden"
      >
        <a
          href="https://www.google.com/maps/search/?api=1&query=Av.+da+Liberdade+58%2F60%2C+2970-635+Sesimbra%2C+Portugal"
          target="_blank"
          rel="noopener noreferrer"
          className="absolute right-4 top-4 z-10 rounded-full border border-white/30 bg-white/90 px-3 py-1 text-xs font-semibold text-[#1F4E5F] shadow-lg transition-colors hover:bg-white"
        >
          Abrir no Google Maps
        </a>

        <iframe
          title="Mapa de DolceStay em Sesimbra"
          src="https://www.google.com/maps?q=Av.+da+Liberdade+58/60,+2970-635+Sesimbra,+Portugal&z=15&t=k&output=embed"
          width="100%"
          height="720"
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
          className="block h-[min(70vh,720px)] min-h-[420px] w-full border-0 sm:min-h-[520px] md:min-h-[600px]"
        />
      </motion.div>
    </section>
  );
}
