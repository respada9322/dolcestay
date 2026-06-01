import type { LegalSection } from '@/lib/legal';

export const enCookieSections: LegalSection[] = [
  {
    id: 'introduction',
    title: 'Introduction',
    paragraphs: [
      'This Cookie Policy explains what cookies are, how DolceStay uses them on the dolcestay.pt website, and what your management options are.',
      'By continuing to browse the website, you may be asked for your consent to the use of non-essential cookies, in accordance with the General Data Protection Regulation (GDPR) and applicable Portuguese law.',
    ],
  },
  {
    id: 'what-are-cookies',
    title: 'What are cookies?',
    paragraphs: [
      'Cookies are small text files stored on your device (computer, tablet or mobile) when you visit a website. They allow the site to recognise your device and remember certain preferences or browsing information.',
      'Cookies may be “session” cookies (deleted when you close the browser) or “persistent” cookies (remain on the device for a defined period or until manually deleted).',
    ],
  },
  {
    id: 'cookies-we-use',
    title: 'Which cookies do we use?',
    paragraphs: ['The DolceStay website uses the following categories of cookies:'],
    listItems: [
      'Strictly necessary cookies — essential for basic website operation, including remembering your consent preferences. These cookies do not require prior consent.',
      'Analytics cookies — allow aggregated analysis of traffic and visitor behaviour to improve the browsing experience. We use Google Analytics 4 (GA4) only after your explicit consent.',
      'Advertising cookies — allow measurement of advertising campaign effectiveness and ad personalisation. These cookies are only activated if you give your consent.',
    ],
  },
  {
    id: 'ga4-consent',
    title: 'Google Analytics 4 and Consent Mode',
    paragraphs: [
      'We use Google Analytics 4 to understand how visitors interact with the website. Google Analytics collects information in anonymised or pseudonymised form, such as pages visited, time on site and traffic source.',
      'We have implemented Google Consent Mode v2, which means Google Analytics is not loaded and does not collect data before you give explicit consent for analytics cookies.',
      'You can accept, reject or customise cookie categories through the banner shown on your first visit or at any time via “Manage cookie preferences”.',
    ],
  },
  {
    id: 'manage-consent',
    title: 'How to manage or withdraw consent',
    paragraphs: [
      'You can change your cookie preferences at any time by clicking “Manage cookie preferences” on the Cookie Policy page or in the website footer.',
      'You can also configure your browser to block or delete cookies. Note that disabling strictly necessary cookies may affect the operation of some website features.',
      'For more information about your rights as a data subject, please see our Privacy Policy.',
    ],
  },
  {
    id: 'retention',
    title: 'Retention',
    paragraphs: [
      'Your consent preference is stored locally in your browser (localStorage) for up to 12 months, after which the cookie banner will be shown again so you can review your choice.',
      'Analytics and advertising cookies have varying durations set by the respective providers. See Google Analytics documentation for detailed retention periods.',
    ],
  },
  {
    id: 'contact',
    title: 'Contact',
    paragraphs: [
      'For questions related to cookies or data protection, contact us at info@dolcestay.pt.',
      'Data controller: DolceStay Accommodations.',
    ],
  },
];
