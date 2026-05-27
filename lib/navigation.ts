/** Section element ids on the homepage (must match section `id` attributes). */
export const HOME_SECTION_IDS = {
  accommodations: 'accommodations',
  services: 'services',
  owners: 'owners',
  howItWorks: 'como-funciona',
} as const;

export type HomeSectionId =
  (typeof HOME_SECTION_IDS)[keyof typeof HOME_SECTION_IDS];

/** Absolute path to a homepage section — safe from any route (never use bare `#id`). */
export function homeSection(sectionId: HomeSectionId | string): string {
  return `/#${sectionId}`;
}

export const routes = {
  home: '/',
  partnerships: '/parcerias',
  about: '/quem-somos',
  contact: '/contactos',
  terms: '/termos-e-condicoes',
  privacy: '/politica-de-privacidade',
  consumerDisputes: '/litigios-de-consumo',
} as const;

export type HeaderNavKey =
  | 'home'
  | 'accommodations'
  | 'services'
  | 'owners'
  | 'partnerships'
  | 'about'
  | 'contact';

/** Header / mobile menu link targets in display order. */
export const HEADER_NAV_LINKS: { key: HeaderNavKey; href: string }[] = [
  { key: 'home', href: routes.home },
  {
    key: 'accommodations',
    href: homeSection(HOME_SECTION_IDS.accommodations),
  },
  { key: 'services', href: homeSection(HOME_SECTION_IDS.services) },
  { key: 'owners', href: homeSection(HOME_SECTION_IDS.owners) },
  { key: 'partnerships', href: routes.partnerships },
  { key: 'about', href: routes.about },
  { key: 'contact', href: routes.contact },
];

/** CTA: "Sou Proprietário" — same section as Proprietários on the homepage. */
export const OWNER_CTA_HREF = homeSection(HOME_SECTION_IDS.owners);
