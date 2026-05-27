'use client';

import { ExternalLink, Mail, MapPin, Phone, Printer } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';

const contactDetails = [
  {
    icon: MapPin,
    label: 'Morada',
    value: 'Av. da Liberdade nº58/60, 2970-635 Sesimbra',
  },
  {
    icon: Phone,
    label: 'Tel',
    value: '+351 925 407 035',
    href: 'tel:+351925407035',
  },
  {
    icon: Printer,
    label: 'Fax',
    value: '+351 925 407 035',
  },
  {
    icon: Mail,
    label: 'Correio eletrónico',
    value: 'dolcestayportugal@gmail.com',
    href: 'mailto:dolcestayportugal@gmail.com',
  },
];

export function ConsumerDisputesContent() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="container mx-auto px-4 pb-16 pt-2 lg:pb-24 lg:pt-4">
      <motion.article
        initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
        animate={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: 'easeOut' }}
        className="mx-auto max-w-2xl rounded-[2rem] border border-[#E5E7EB]/90 bg-white p-8 shadow-[0_12px_48px_rgba(31,78,95,0.08)] lg:p-12"
      >
        <p className="text-center text-lg leading-relaxed text-pretty text-[#5B6573]">
          Em caso de litígio, o consumidor pode recorrer a uma Entidade de Resolução Alternativa
          de Litígios de Consumo:
        </p>

        <div className="mt-10 rounded-2xl border border-[#CFE8D2]/80 bg-gradient-to-br from-[#F8FAF8] to-[#CFE8D2]/25 p-6 lg:p-8">
          <h2 className="font-serif text-2xl text-[#1F4E5F] text-center">
            Centro de Arbitragem Sesimbra
          </h2>

          <ul className="mt-6 space-y-5">
            {contactDetails.map(({ icon: Icon, label, value, href }) => (
              <li key={label} className="flex gap-4">
                <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-white shadow-sm">
                  <Icon className="h-5 w-5 text-[#8DBE91]" aria-hidden />
                </div>
                <div className="min-w-0 pt-0.5">
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#8DBE91]">
                    {label}
                  </p>
                  {href ? (
                    <a
                      href={href}
                      className="mt-1 block text-[#1F4E5F] font-medium transition-colors hover:text-[#8DBE91]"
                    >
                      {value}
                    </a>
                  ) : (
                    <p className="mt-1 text-[#5B6573] leading-relaxed">{value}</p>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>

        <p className="mt-10 text-center text-[#5B6573] leading-relaxed">
          Mais informações no{' '}
          <a
            href="https://www.consumidor.pt"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 font-medium text-[#1F4E5F] underline decoration-[#8DBE91]/50 underline-offset-4 transition-colors hover:text-[#8DBE91]"
          >
            Portal do Consumidor
            <ExternalLink className="h-4 w-4" aria-hidden />
          </a>
        </p>
      </motion.article>
    </div>
  );
}
