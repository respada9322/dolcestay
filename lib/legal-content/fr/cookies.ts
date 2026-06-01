import type { LegalSection } from '@/lib/legal';

export const frCookieSections: LegalSection[] = [
  {
    id: 'introduction',
    title: 'Introduction',
    paragraphs: [
      'La présente politique relative aux cookies explique ce que sont les cookies, comment DolceStay les utilise sur le site dolcestay.pt, et quelles sont vos options de gestion.',
      'En poursuivant votre navigation sur le site, il peut vous être demandé de consentir à l\'utilisation de cookies non essentiels, conformément au Règlement général sur la protection des données (RGPD) et à la législation portugaise applicable.',
    ],
  },
  {
    id: 'what-are-cookies',
    title: 'Que sont les cookies ?',
    paragraphs: [
      'Les cookies sont de petits fichiers texte stockés sur votre appareil (ordinateur, tablette ou mobile) lorsque vous visitez un site web. Ils permettent au site de reconnaître votre appareil et de mémoriser certaines préférences ou informations de navigation.',
      'Les cookies peuvent être des cookies de « session » (supprimés à la fermeture du navigateur) ou des cookies « persistants » (conservés sur l\'appareil pendant une durée définie ou jusqu\'à suppression manuelle).',
    ],
  },
  {
    id: 'cookies-we-use',
    title: 'Quels cookies utilisons-nous ?',
    paragraphs: ['Le site DolceStay utilise les catégories de cookies suivantes :'],
    listItems: [
      'Cookies strictement nécessaires — essentiels au fonctionnement de base du site, y compris la mémorisation de vos préférences de consentement. Ces cookies ne nécessitent pas de consentement préalable.',
      'Cookies analytiques — permettent une analyse agrégée du trafic et du comportement des visiteurs afin d\'améliorer l\'expérience de navigation. Nous utilisons Google Analytics 4 (GA4) uniquement après votre consentement explicite.',
      'Cookies publicitaires — permettent de mesurer l\'efficacité des campagnes publicitaires et la personnalisation des annonces. Ces cookies ne sont activés que si vous y consentez.',
    ],
  },
  {
    id: 'ga4-consent',
    title: 'Google Analytics 4 et Consent Mode',
    paragraphs: [
      'Nous utilisons Google Analytics 4 pour comprendre comment les visiteurs interagissent avec le site. Google Analytics collecte des informations sous forme anonymisée ou pseudonymisée, telles que les pages visitées, le temps passé sur le site et la source de trafic.',
      'Nous avons mis en œuvre Google Consent Mode v2, ce qui signifie que Google Analytics n\'est pas chargé et ne collecte pas de données avant que vous n\'ayez donné votre consentement explicite pour les cookies analytiques.',
      'Vous pouvez accepter, refuser ou personnaliser les catégories de cookies via la bannière affichée lors de votre première visite ou à tout moment via « Gérer les préférences de cookies ».',
    ],
  },
  {
    id: 'manage-consent',
    title: 'Comment gérer ou retirer votre consentement',
    paragraphs: [
      'Vous pouvez modifier vos préférences en matière de cookies à tout moment en cliquant sur « Gérer les préférences de cookies » sur la page Politique relative aux cookies ou dans le pied de page du site.',
      'Vous pouvez également configurer votre navigateur pour bloquer ou supprimer les cookies. Notez que la désactivation des cookies strictement nécessaires peut affecter le fonctionnement de certaines fonctionnalités du site.',
      'Pour plus d\'informations sur vos droits en tant que personne concernée, veuillez consulter notre politique de confidentialité.',
    ],
  },
  {
    id: 'retention',
    title: 'Conservation',
    paragraphs: [
      'Votre préférence de consentement est stockée localement dans votre navigateur (localStorage) pendant une durée maximale de 12 mois, après quoi la bannière relative aux cookies sera à nouveau affichée afin que vous puissiez revoir votre choix.',
      'Les cookies analytiques et publicitaires ont des durées variables définies par les prestataires respectifs. Consultez la documentation Google Analytics pour les durées de conservation détaillées.',
    ],
  },
  {
    id: 'contact',
    title: 'Contact',
    paragraphs: [
      'Pour toute question relative aux cookies ou à la protection des données, contactez-nous à info@dolcestay.pt.',
      'Responsable du traitement : DolceStay Accommodations.',
    ],
  },
];
