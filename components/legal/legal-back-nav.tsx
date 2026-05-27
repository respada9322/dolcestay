'use client';

import Link from 'next/link';
import { ArrowLeft, ChevronRight } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { cn } from '@/lib/utils';

type LegalBackNavProps = {
  backHref?: string;
  backLabel?: string;
  currentLabel?: string;
  className?: string;
};

export function LegalBackNav({
  backHref = '/',
  backLabel = 'Voltar ao início',
  currentLabel = 'Termos e Condições',
  className,
}: LegalBackNavProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <nav
      aria-label="Navegação da página legal"
      className={cn('flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between', className)}
    >
      <motion.div
        initial={shouldReduceMotion ? false : { opacity: 0, x: -12 }}
        animate={shouldReduceMotion ? {} : { opacity: 1, x: 0 }}
        transition={{ duration: 0.45, ease: 'easeOut' }}
      >
        <Link
          href={backHref}
          className="group inline-flex items-center gap-2 rounded-full border border-[#1F4E5F]/12 bg-white/70 px-4 py-2.5 text-sm font-medium text-[#1F4E5F] shadow-[0_4px_24px_rgba(31,78,95,0.06)] backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-[#8DBE91]/40 hover:bg-white/90 hover:text-[#1F4E5F] hover:shadow-[0_8px_32px_rgba(141,190,145,0.18)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8DBE91] focus-visible:ring-offset-2"
        >
          <ArrowLeft
            className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-0.5"
            aria-hidden
          />
          {backLabel}
        </Link>
      </motion.div>

      <motion.ol
        initial={shouldReduceMotion ? false : { opacity: 0 }}
        animate={shouldReduceMotion ? {} : { opacity: 1 }}
        transition={{ duration: 0.45, delay: 0.1, ease: 'easeOut' }}
        className="hidden items-center gap-1.5 text-sm text-[#6B7280] md:flex"
      >
        <li>
          <Link href="/" className="transition-colors hover:text-[#8DBE91]">
            Início
          </Link>
        </li>
        <li aria-hidden>
          <ChevronRight className="h-3.5 w-3.5 text-[#CFE8D2]" />
        </li>
        <li>
          <span className="text-[#8DBE91]">Legal</span>
        </li>
        <li aria-hidden>
          <ChevronRight className="h-3.5 w-3.5 text-[#CFE8D2]" />
        </li>
        <li>
          <span className="font-medium text-[#1F4E5F]" aria-current="page">
            {currentLabel}
          </span>
        </li>
      </motion.ol>
    </nav>
  );
}
