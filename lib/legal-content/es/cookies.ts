import type { LegalSection } from '@/lib/legal';

export const esCookieSections: LegalSection[] = [
  {
    id: 'introduction',
    title: 'Introducción',
    paragraphs: [
      'Esta Política de Cookies explica qué son las cookies, cómo las utiliza DolceStay en el sitio web dolcestay.pt, y cuáles son sus opciones de gestión.',
      'Al continuar navegando por el sitio web, se le puede solicitar su consentimiento para el uso de cookies no esenciales, de conformidad con el Reglamento General de Protección de Datos (RGPD) y la legislación portuguesa aplicable.',
    ],
  },
  {
    id: 'what-are-cookies',
    title: '¿Qué son las cookies?',
    paragraphs: [
      'Las cookies son pequeños archivos de texto almacenados en su dispositivo (ordenador, tableta o móvil) cuando visita un sitio web. Permiten al sitio reconocer su dispositivo y recordar determinadas preferencias o información de navegación.',
      'Las cookies pueden ser de «sesión» (se eliminan al cerrar el navegador) o «persistentes» (permanecen en el dispositivo durante un período definido o hasta que se eliminen manualmente).',
    ],
  },
  {
    id: 'cookies-we-use',
    title: '¿Qué cookies utilizamos?',
    paragraphs: ['El sitio web de DolceStay utiliza las siguientes categorías de cookies:'],
    listItems: [
      'Cookies estrictamente necesarias — esenciales para el funcionamiento básico del sitio web, incluido el recordatorio de sus preferencias de consentimiento. Estas cookies no requieren consentimiento previo.',
      'Cookies analíticas — permiten el análisis agregado del tráfico y del comportamiento de los visitantes para mejorar la experiencia de navegación. Utilizamos Google Analytics 4 (GA4) únicamente tras su consentimiento explícito.',
      'Cookies publicitarias — permiten medir la eficacia de las campañas publicitarias y la personalización de anuncios. Estas cookies solo se activan si usted presta su consentimiento.',
    ],
  },
  {
    id: 'ga4-consent',
    title: 'Google Analytics 4 y Consent Mode',
    paragraphs: [
      'Utilizamos Google Analytics 4 para comprender cómo interactúan los visitantes con el sitio web. Google Analytics recopila información de forma anonimizada o seudonimizada, como páginas visitadas, tiempo en el sitio y fuente de tráfico.',
      'Hemos implementado Google Consent Mode v2, lo que significa que Google Analytics no se carga ni recopila datos antes de que usted preste su consentimiento explícito para las cookies analíticas.',
      'Puede aceptar, rechazar o personalizar las categorías de cookies mediante el banner mostrado en su primera visita o en cualquier momento a través de «Gestionar preferencias de cookies».',
    ],
  },
  {
    id: 'manage-consent',
    title: 'Cómo gestionar o retirar el consentimiento',
    paragraphs: [
      'Puede modificar sus preferencias de cookies en cualquier momento haciendo clic en «Gestionar preferencias de cookies» en la página de Política de Cookies o en el pie del sitio web.',
      'También puede configurar su navegador para bloquear o eliminar cookies. Tenga en cuenta que desactivar las cookies estrictamente necesarias puede afectar al funcionamiento de algunas funciones del sitio web.',
      'Para más información sobre sus derechos como interesado, consulte nuestra Política de Privacidad.',
    ],
  },
  {
    id: 'retention',
    title: 'Conservación',
    paragraphs: [
      'Su preferencia de consentimiento se almacena localmente en su navegador (localStorage) durante un máximo de 12 meses, tras lo cual se mostrará de nuevo el banner de cookies para que pueda revisar su elección.',
      'Las cookies analíticas y publicitarias tienen duraciones variables establecidas por los respectivos proveedores. Consulte la documentación de Google Analytics para conocer los períodos de conservación detallados.',
    ],
  },
  {
    id: 'contact',
    title: 'Contacto',
    paragraphs: [
      'Para cuestiones relacionadas con cookies o protección de datos, contacte con nosotros en info@dolcestay.pt.',
      'Responsable del tratamiento: DolceStay Accommodations.',
    ],
  },
];
