'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ChevronDown, Phone, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/lib/language-context';
import { BOOKING_URL, contactInfo } from '@/lib/data';
import { HEADER_NAV_LINKS, OWNER_CTA_HREF } from '@/lib/navigation';
import type { Language } from '@/lib/translations';
import { SiteNavLink } from '@/components/site-nav-link';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const languages: { code: Language; label: string; flag: string }[] = [
  { code: 'pt', label: 'PT', flag: '🇵🇹' },
  { code: 'en', label: 'EN', flag: '🇬🇧' },
  { code: 'fr', label: 'FR', flag: '🇫🇷' },
  { code: 'es', label: 'ES', flag: '🇪🇸' },
  { code: 'de', label: 'DE', flag: '🇩🇪' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsMobileMenuOpen(false);
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, []);

  const navItems = HEADER_NAV_LINKS.map((item) => ({
    href: item.href,
    label: t.nav[item.key],
  }));

  const currentLanguage = languages.find(l => l.code === language) || languages[0];

  return (
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/98 backdrop-blur-lg shadow-md'
            : 'bg-white/90 backdrop-blur-sm'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center group">
              <Image
                src="/official_logo_extended_transparent.png"
                alt={t.header.logoAlt}
                width={200}
                height={60}
                className="h-[88px] lg:h-[104px] w-auto object-contain"
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <SiteNavLink
                  key={item.href}
                  href={item.href}
                  className="px-3 py-2 text-sm font-medium text-[#111111] hover:text-[#8DBE91] transition-colors rounded-lg hover:bg-[#F8FAF8]"
                >
                  {item.label}
                </SiteNavLink>
              ))}
            </nav>

            {/* Right Side Actions */}
            <div className="flex items-center gap-2 lg:gap-3">
              {/* Language Selector */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm" className="gap-1.5 px-2.5 hover:bg-[#F8FAF8]">
                    <span className="text-base">{currentLanguage.flag}</span>
                    <span className="text-sm font-medium">{currentLanguage.label}</span>
                    <ChevronDown className="h-3.5 w-3.5 opacity-60" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="bg-white min-w-[120px]">
                  {languages.map((lang) => (
                    <DropdownMenuItem
                      key={lang.code}
                      onClick={() => setLanguage(lang.code)}
                      className={`cursor-pointer gap-2 ${language === lang.code ? 'bg-[#CFE8D2]' : ''}`}
                    >
                      <span>{lang.flag}</span>
                      <span>{lang.label}</span>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Owner CTA - Desktop */}
              <SiteNavLink
                href={OWNER_CTA_HREF}
                className="hidden xl:inline-flex items-center gap-1.5 px-4 py-2 text-sm font-semibold text-[#1F4E5F] hover:text-white border-2 border-[#1F4E5F] hover:bg-[#1F4E5F] rounded-full transition-all"
              >
                {t.nav.imOwner}
              </SiteNavLink>

              {/* Book CTA - Primary */}
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-bold text-white bg-[#8DBE91] hover:bg-[#7AAD7E] rounded-full transition-all shadow-md hover:shadow-lg"
              >
                {t.nav.book}
                <ArrowRight className="h-4 w-4" />
              </a>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2.5 text-[#111111] hover:text-[#8DBE91] hover:bg-[#F8FAF8] rounded-lg transition-all"
                aria-label={t.header.toggleMenu}
                aria-expanded={isMobileMenuOpen}
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation - Improved */}
        <div
          className={`lg:hidden fixed inset-x-0 top-16 bg-white/98 backdrop-blur-lg border-t border-[#E5E7EB] shadow-xl transition-all duration-300 ${
            isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
          }`}
          style={{ maxHeight: 'calc(100vh - 4rem)', overflowY: 'auto' }}
        >
          <nav className="container mx-auto px-4 py-6">
            <div className="flex flex-col gap-1">
              {navItems.map((item) => (
                <SiteNavLink
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-4 py-3.5 text-base font-medium text-[#111111] hover:bg-[#CFE8D2] hover:text-[#1F4E5F] rounded-xl transition-colors"
                >
                  {item.label}
                </SiteNavLink>
              ))}
            </div>
            
            {/* Mobile CTAs */}
            <div className="mt-6 pt-6 border-t border-[#E5E7EB] flex flex-col gap-3">
              <SiteNavLink
                href={OWNER_CTA_HREF}
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-4 py-3.5 text-base font-semibold text-[#1F4E5F] border-2 border-[#1F4E5F] hover:bg-[#1F4E5F] hover:text-white rounded-xl transition-all text-center"
              >
                {t.nav.imOwner}
              </SiteNavLink>
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-3.5 text-base font-bold text-white bg-[#8DBE91] hover:bg-[#7AAD7E] rounded-xl transition-colors text-center shadow-md"
              >
                {t.nav.book}
              </a>
            </div>

            {/* Contact info in mobile menu */}
            <div className="mt-6 pt-6 border-t border-[#E5E7EB]">
              <a
                href={`tel:${contactInfo.phones[0].replace(/\s/g, '')}`}
                className="flex items-center gap-3 px-4 py-3 text-[#6B7280] hover:text-[#8DBE91] transition-colors"
              >
                <Phone className="h-5 w-5" />
                <span>{contactInfo.phones[0]}</span>
              </a>
            </div>
          </nav>
        </div>
      </header>
  );
}
