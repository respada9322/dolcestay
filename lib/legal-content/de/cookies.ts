import type { LegalSection } from '@/lib/legal';

export const deCookieSections: LegalSection[] = [
  {
    id: 'introduction',
    title: 'Einleitung',
    paragraphs: [
      'Diese Cookie-Richtlinie erläutert, was Cookies sind, wie DolceStay sie auf der Website dolcestay.pt verwendet und welche Verwaltungsoptionen Ihnen zur Verfügung stehen.',
      'Durch die weitere Nutzung der Website können Sie um Ihre Einwilligung zur Verwendung nicht wesentlicher Cookies gebeten werden, gemäß der Datenschutz-Grundverordnung (DSGVO) und dem anwendbaren portugiesischen Recht.',
    ],
  },
  {
    id: 'what-are-cookies',
    title: 'Was sind Cookies?',
    paragraphs: [
      'Cookies sind kleine Textdateien, die auf Ihrem Gerät (Computer, Tablet oder Mobiltelefon) gespeichert werden, wenn Sie eine Website besuchen. Sie ermöglichen es der Website, Ihr Gerät zu erkennen und bestimmte Präferenzen oder Informationen zum Surfverhalten zu speichern.',
      'Cookies können „Sitzungs“-Cookies sein (werden beim Schließen des Browsers gelöscht) oder „persistente“ Cookies (verbleiben für einen festgelegten Zeitraum oder bis zur manuellen Löschung auf dem Gerät).',
    ],
  },
  {
    id: 'cookies-we-use',
    title: 'Welche Cookies verwenden wir?',
    paragraphs: ['Die Website von DolceStay verwendet die folgenden Cookie-Kategorien:'],
    listItems: [
      'Unbedingt erforderliche Cookies — für den grundlegenden Betrieb der Website unerlässlich, einschließlich der Speicherung Ihrer Einwilligungspräferenzen. Für diese Cookies ist keine vorherige Einwilligung erforderlich.',
      'Analyse-Cookies — ermöglichen eine aggregierte Auswertung von Traffic und Besucherverhalten zur Verbesserung des Surf-Erlebnisses. Wir verwenden Google Analytics 4 (GA4) nur nach Ihrer ausdrücklichen Einwilligung.',
      'Werbe-Cookies — ermöglichen die Messung der Wirksamkeit von Werbekampagnen und die Personalisierung von Anzeigen. Diese Cookies werden nur aktiviert, wenn Sie Ihre Einwilligung erteilen.',
    ],
  },
  {
    id: 'ga4-consent',
    title: 'Google Analytics 4 und Consent Mode',
    paragraphs: [
      'Wir verwenden Google Analytics 4, um zu verstehen, wie Besucher mit der Website interagieren. Google Analytics erhebt Informationen in anonymisierter oder pseudonymisierter Form, wie besuchte Seiten, Verweildauer und Traffic-Quelle.',
      'Wir haben Google Consent Mode v2 implementiert. Das bedeutet, dass Google Analytics nicht geladen wird und keine Daten erhebt, bevor Sie ausdrücklich in Analyse-Cookies einwilligen.',
      'Sie können Cookie-Kategorien über das Banner bei Ihrem ersten Besuch oder jederzeit über „Cookie-Einstellungen verwalten“ akzeptieren, ablehnen oder anpassen.',
    ],
  },
  {
    id: 'manage-consent',
    title: 'Einwilligung verwalten oder widerrufen',
    paragraphs: [
      'Sie können Ihre Cookie-Einstellungen jederzeit ändern, indem Sie auf der Cookie-Richtlinien-Seite oder in der Fußzeile der Website auf „Cookie-Einstellungen verwalten“ klicken.',
      'Sie können Ihren Browser auch so konfigurieren, dass Cookies blockiert oder gelöscht werden. Beachten Sie, dass die Deaktivierung unbedingt erforderlicher Cookies den Betrieb einiger Website-Funktionen beeinträchtigen kann.',
      'Weitere Informationen zu Ihren Rechten als betroffene Person finden Sie in unserer Datenschutzerklärung.',
    ],
  },
  {
    id: 'retention',
    title: 'Aufbewahrung',
    paragraphs: [
      'Ihre Einwilligungspräferenz wird lokal in Ihrem Browser (localStorage) bis zu 12 Monate gespeichert; danach wird das Cookie-Banner erneut angezeigt, damit Sie Ihre Wahl überprüfen können.',
      'Analyse- und Werbe-Cookies haben unterschiedliche Laufzeiten, die von den jeweiligen Anbietern festgelegt werden. Detaillierte Aufbewahrungsfristen finden Sie in der Dokumentation von Google Analytics.',
    ],
  },
  {
    id: 'contact',
    title: 'Kontakt',
    paragraphs: [
      'Bei Fragen zu Cookies oder zum Datenschutz kontaktieren Sie uns unter info@dolcestay.pt.',
      'Verantwortlicher: DolceStay Accommodations.',
    ],
  },
];
