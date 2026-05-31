'use client';

import Link from 'next/link';
import { Mail, Phone, MapPin, Instagram, Facebook } from 'lucide-react';
import { useLanguage } from '@/lib/language-context';
import { BOOKING_URL, contactInfo } from '@/lib/data';
import {
  HEADER_NAV_LINKS,
  homeSection,
  HOME_SECTION_IDS,
  routes,
} from '@/lib/navigation';
import { SiteNavLink } from '@/components/site-nav-link';
import { openCookiePreferences } from '@/lib/cookie-consent-context';

export function Footer() {
  const { t } = useLanguage();

  const quickLinks = [
    { href: routes.home, label: t.nav.home },
    { href: BOOKING_URL, label: t.nav.accommodations, external: true },
    {
      href: homeSection(HOME_SECTION_IDS.services),
      label: t.nav.services,
    },
    { href: homeSection(HOME_SECTION_IDS.owners), label: t.nav.owners },
    ...HEADER_NAV_LINKS.filter(
      (item) =>
        item.key === 'partnerships' ||
        item.key === 'about' ||
        item.key === 'contact',
    ).map((item) => ({ href: item.href, label: t.nav[item.key] })),
  ];

  const legalLinks = [
    {
      href: 'https://www.livroreclamacoes.pt/Inicio/',
      label: t.footer.legalLinks.complaints,
      external: true,
    },
    { href: routes.terms, label: t.footer.legalLinks.terms },
    { href: routes.privacy, label: t.footer.legalLinks.privacy },
    { href: routes.cookies, label: t.footer.legalLinks.cookies },
    { href: routes.consumerDisputes, label: t.footer.legalLinks.disputes },
  ];

  return (
    <footer className="bg-[#1F4E5F] text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand & Contact */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <span className="font-serif text-2xl text-white tracking-tight">
                Dolce<span className="text-[#8DBE91]">Stay</span>
              </span>
            </Link>
            <p className="text-white/80 text-sm leading-relaxed mb-6">
              {t.footer.description}
            </p>
            <div className="flex gap-3">
              <a
                href={contactInfo.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/10 hover:bg-[#8DBE91] rounded-full transition-colors"
                aria-label={t.footer.instagramLabel}
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href={contactInfo.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/10 hover:bg-[#8DBE91] rounded-full transition-colors"
                aria-label={t.footer.facebookLabel}
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">{t.nav.contact}</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-[#8DBE91] flex-shrink-0 mt-0.5" />
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="text-white/80 hover:text-white text-sm transition-colors"
                >
                  {contactInfo.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-[#8DBE91] flex-shrink-0 mt-0.5" />
                <div className="text-sm">
                  {contactInfo.phones.map((phone, index) => (
                    <a
                      key={index}
                      href={`tel:${phone.replace(/\s/g, '')}`}
                      className="block text-white/80 hover:text-white transition-colors"
                    >
                      {phone}
                    </a>
                  ))}
                  <span className="text-white/50 text-xs mt-1 block">
                    {t.footer.callCost}
                  </span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-[#8DBE91] flex-shrink-0 mt-0.5" />
                <address className="text-white/80 text-sm not-italic">
                  <span className="font-medium text-white">{t.footer.addressTitle}</span>
                  <br />
                  {contactInfo.address.street}
                  <br />
                  {contactInfo.address.postalCode} {contactInfo.address.city}
                  <br />
                  {contactInfo.address.country}
                </address>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">{t.footer.quickLinks}</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  {link.external ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/80 hover:text-[#8DBE91] text-sm transition-colors"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <SiteNavLink
                      href={link.href}
                      className="text-white/80 hover:text-[#8DBE91] text-sm transition-colors"
                    >
                      {link.label}
                    </SiteNavLink>
                  )}
                </li>
              ))}
              <li>
                <a
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-2 px-4 py-2 bg-[#8DBE91] hover:bg-[#7AAD7E] text-white text-sm font-medium rounded-full transition-colors"
                >
                  {t.nav.book}
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-lg mb-4">{t.footer.legal}</h3>
            <ul className="space-y-2">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  {link.external ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/80 hover:text-[#8DBE91] text-sm transition-colors"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      href={link.href}
                      className="text-white/80 hover:text-[#8DBE91] text-sm transition-colors"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
              <li>
                <button
                  type="button"
                  onClick={openCookiePreferences}
                  className="text-white/80 hover:text-[#8DBE91] text-sm transition-colors text-left"
                >
                  {t.cookieConsent.managePreferences}
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-4">
          <p className="text-center text-white/60 text-sm">
            Copyright &copy; {new Date().getFullYear()} DolceStay. {t.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
