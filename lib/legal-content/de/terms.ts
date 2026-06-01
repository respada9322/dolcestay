import type { LegalSection } from '@/lib/legal';

export const deTermsSections: LegalSection[] = [
  {
    id: 'booking-conditions',
    title: 'Buchungsbedingungen',
    paragraphs: [
      'Buchungen unterliegen der Verfügbarkeit und der Bestätigung der Zahlung.',
      'Zur Bestätigung einer Buchung muss der Gast die jeweils für die Unterkunft angegebene Zahlung leisten.',
      'Reservierungsgebühren, Kautionen, Reinigungsgebühren oder sonstige Entgelte entsprechen den zum jeweiligen Zeitpunkt auf der Seite der Unterkunft ausgewiesenen Beträgen.',
      'Für alle Unterkünfte ist eine Kaution zur Abdeckung möglicher Schäden an der Immobilie und/oder der Wohnanlage erforderlich. Die Kaution wird bei persönlichem Check-in erhoben oder bis zu 48 Stunden vor dem Aufenthalt per Online-Zahlung bei Express-Check-in. Gästen wird kein Betrag belastet, der den Zugriff auf diese Mittel verhindert, bis die Sperre aufgehoben wird.',
      'Tritt während des Aufenthalts kein Schaden ein, wird die Kaution nach dem Check-out innerhalb von 7 Tagen auf dieselbe Kreditkarte freigegeben.',
      'Befindet sich die Immobilie nicht im gleichen Zustand, wird der Kautionsbetrag einbehalten, bis die Zahlung für beschädigte Gegenstände erfolgt ist.',
      'Die Buchung kann storniert werden, wenn die Kaution nicht autorisiert werden kann; Gäste müssen sicherstellen, dass ihre Kreditkarte gültig ist und über ausreichende Deckung verfügt. Kann die Kaution nicht gesperrt werden, wird der Kunde per E-Mail oder SMS benachrichtigt und hat 12 Stunden Zeit, eine andere Zahlungsmethode zu versuchen.',
      'Alle Preise verstehen sich einschließlich der zum jeweiligen Zeitpunkt geltenden gesetzlichen Mehrwertsteuer.',
    ],
  },
  {
    id: 'payment-options',
    title: 'Zahlungsoptionen',
    paragraphs: [
      'Buchungszahlungen können per Kreditkarte American Express, Visa oder MasterCard erfolgen.',
      'Gäste unterliegen außerdem den für jede Unterkunft verfügbaren besonderen Regeln.',
    ],
  },
  {
    id: 'pre-check-in',
    title: 'Vor dem Check-in',
    paragraphs: [
      'Nach Abschluss der Buchung erhält der Buchungsinhaber eine E-Mail und/oder SMS von DolceStay mit Buchungsbestätigung und wichtigen Informationen zur Unterkunft sowie zu Zusatzleistungen (z. B. Transfer oder zusätzliche Reinigung).',
      'Gäste werden gebeten, ein Unterkunftsformular auszufüllen, das für die Vorbereitung des Aufenthalts unerlässlich ist.',
      'Das Unterkunftsformular erfragt unter anderem Ankunftszeit, Gesamtzahl der Gäste — damit wir die richtige Menge an Bettwäsche und Handtüchern bereitstellen können — sowie obligatorische Angaben für Einwanderungs- und Grenzbehörden.',
      'Gäste müssen im Unterkunftsformular die genaue Personenzahl angeben. Die Anzahl der Gäste in der Buchung darf die Anzahl der in der Unterkunft anwesenden Personen nicht überschreiten. Wird das Limit überschritten, behält sich DolceStay das Recht vor, Gäste ohne Entschädigung oder Erstattung gezahlter Gebühren zu verlassen zu verlangen.',
      'DolceStay übernimmt keine Verantwortung für falsche oder unvollständige Angaben im Unterkunftsformular.',
      'Jeder Versuch, die ursprünglichen Angaben zu ändern und/oder zu fälschen, macht das Unterkunftsformular ungültig und führt zur Stornierung der Buchung.',
    ],
  },
  {
    id: 'cancellation',
    title: 'Stornierungsbedingungen',
    paragraphs: ['Nach Buchungsbestätigung gelten bei Stornierung folgende Gebühren:'],
    listItems: [
      'Der Gast zahlt 50 % des Gesamtbuchungsbetrags, wenn die Stornierung bis zu 30 Tage vor dem Check-in erfolgt.',
      'Der Gast zahlt 100 % des Gesamtbuchungsbetrags, wenn die Stornierung weniger als 30 Tage vor dem Check-in erfolgt.',
    ],
    paragraphsAfterList: [
      'Im Falle von Überbuchung (gleichzeitige Buchungen derselben Unterkunft) erkennt der Kunde ausdrücklich an und akzeptiert, dass DolceStay die Buchung einer Unterkunft gleicher Kategorie zuweist (unter Gewährleistung, dass die Qualität nicht unter der gebuchten Unterkunft liegt), ohne Mehrkosten und ohne Anspruch auf Entschädigung durch DolceStay.',
    ],
  },
  {
    id: 'stay-conditions',
    title: 'Aufenthaltsbedingungen',
    paragraphs: [
      'Der Buchungsinhaber muss mindestens 18 Jahre alt sein und muss während des gesamten Aufenthalts in der gebuchten Unterkunft verbleiben. Gäste unter 18 Jahren dürfen nur untergebracht werden, wenn sie von einem erwachsenen Buchungsinhaber begleitet werden.',
      'Der Buchungsinhaber muss eine gültige Adresse, Telefonkontakt und E-Mail-Adresse angeben.',
      'Haustiere (jeder Rasse, Größe oder jedes Alters) sind in DolceStay-Unterkünften nicht gestattet. DolceStay behält sich das Recht vor, Gäste ohne Entschädigung oder Erstattung zu verlassen zu verlangen, wenn ein Tier auf dem Gelände angetroffen wird.',
      'Rauchen ist in der Unterkunft nicht gestattet.',
      'Gemäß den Regeln des Schengener Abkommens muss die Unterbringung ausländischer Staatsbürger den Einwanderungs- und Grenzbehörden gemeldet werden — aller Personen, die nicht die portugiesische Staatsangehörigkeit besitzen.',
      'Zu diesem Zweck müssen alle ausländischen Gäste bis zum Check-in-Datum vollständige Identifikationsangaben über das Unterkunftsformular bereitstellen.',
      'Der Gast muss DolceStay Schäden an der Unterkunft, Einrichtung, Ausstattung oder Zubehör während des Aufenthalts melden, auch wenn diese als normaler Verschleiß gelten und nicht in seiner Verantwortung liegen. Unterlassene Meldung kann zu Haftung führen.',
    ],
  },
  {
    id: 'additional-services',
    title: 'Zusatzleistungen',
    paragraphs: [
      'DolceStay bietet verschiedene Zusatzleistungen wie private Transfers, Reinigung und Wäsche, Kinderbetten sowie Tickets für touristische Attraktionen.',
      'Alle Zusatzleistungen werden auf Anfrage und vorbehaltlich der Verfügbarkeitsbestätigung erbracht.',
      'DolceStay ist nicht verantwortlich für Leistungen externer Anbieter.',
    ],
  },
  {
    id: 'check-in-out',
    title: 'Check-in und Check-out',
    paragraphs: [
      'Beim Check-in werden Identifikationsdokumente des Buchungsinhabers und aller ausländischen Gäste angefordert, um die angegebenen Informationen zu bestätigen.',
      'Sofern nicht anders vereinbart, wird die Unterkunft am Check-in-Tag zwischen 16:00 und 20:00 Uhr bezogen.',
      'Für späten Check-in — ab 20:00 Uhr — kann Express-Check-in verfügbar sein; Gäste müssen diese Möglichkeit vorab mit DolceStay bestätigen. Express-Check-in setzt die vollständige vorherige Ausfüllung des Unterkunftsformulars voraus.',
      'Bei spätem Check-in, wenn Express-Check-in nicht verfügbar ist, wird beim Check-in eine Pauschale von 30 € erhoben.',
      'Check-out erfolgt bis 11:00 Uhr; alle Gäste müssen die vereinbarte Zeit einhalten. Bitte teilen Sie Ihre geplante Check-out-Zeit mit, damit ein DolceStay-Mitarbeiter anwesend sein kann.',
      'Kann kein Mitarbeiter beim Check-out anwesend sein, können Gäste die Schlüssel auf dem Haupttisch hinterlassen und die Tür schließen. Schlüssel dürfen NICHT im Türschloss gelassen werden.',
      'Weigert sich ein Gast zu gehen, behält sich DolceStay das Recht vor, die Unterkunft zu betreten, Gegenstände zu entfernen, Schlösser zu wechseln und andere erforderliche Maßnahmen zu ergreifen (der Gast trägt die Kosten).',
      'Änderungen von Ankunfts- oder Abreisedatum und -zeit müssen von DolceStay bestätigt werden. Bei Verspätung ohne vorherige Mitteilung und Bestätigung wird eine Gebühr in Höhe einer Übernachtung von der Kaution einbehalten.',
      'Beim Check-in stellt DolceStay nur EIN Schlüsselset bereit; Gäste müssen darauf achten, diese nicht zu verlieren oder in der Wohnung zu lassen. Alle Schlüssel sind beim Check-out zurückzugeben.',
      'Für verlorene Schlüssel oder Aussperrungen gelten folgende Zusatzgebühren:',
    ],
    listItems: [
      'Verlorene Schlüssel (pro Schlüssel) — 30 €',
      'Notfallbesuch (9:00–18:00 Uhr) — 10 €',
      'Notfallbesuch (18:00–9:00 Uhr) — 25 €',
    ],
    paragraphsAfterList: [
      'Sind Schlosserdienste erforderlich, trägt der Gast den vollen vom Dienstleister berechneten Betrag je nach Komplexität, Material, Zeit und anderen Faktoren.',
      'DolceStay ist nicht verantwortlich für Gegenstände, die nach der Abreise in der Wohnung zurückbleiben. Gefundene Gegenstände können auf Anfrage zurückgesandt werden; der Gast trägt alle damit verbundenen Kosten.',
    ],
  },
  {
    id: 'cleaning-linen',
    title: 'Reinigung, Bettwäsche und Handtücher',
    paragraphs: [
      'Die Unterkunft wird vor Ankunft der Gäste gereinigt. Der Basis-Service von DolceStay umfasst pro Buchung ein Set Handtücher, Bettwäsche und einige Körperpflegeprodukte.',
      'Zusätzliche Reinigungsleistungen und Produkte, einschließlich Wechsel von Bettwäsche und Handtüchern, sind gegen Aufpreis verfügbar.',
      'Gäste müssen die Unterkunft so ordentlich und sauber wie möglich halten und sie beim Check-out in bestmöglichem Zustand übergeben, damit DolceStay den nächsten Gast empfangen kann.',
      'Gäste dürfen keinen Müll in der Unterkunft, vor deren Tür oder vor der Gebäudetür (sofern zutreffend) zurücklassen; öffentliche Abfallbehälter sind zu verwenden.',
    ],
  },
  {
    id: 'equipment',
    title: 'Ausstattung, Möbel und Gegenstände der Unterkunft',
    paragraphs: [
      'Funktioniert ein Gerät nicht oder ist der Gast unsicher in der Bedienung, muss er den zuständigen DolceStay-Gastgeber kontaktieren.',
      'Änderungen an der Unterkunft oder deren Inhalt sind nicht gestattet.',
      'Alle Gegenstände in der Unterkunft gehören dem Eigentümer und dürfen während des Aufenthalts nicht verlegt oder entfernt werden.',
    ],
  },
  {
    id: 'maintenance',
    title: 'Wartung und Sonderwünsche',
    paragraphs: [
      'Probleme in der Unterkunft (z. B. elektrische Störungen, Geräteausfall, Wasserlecks) müssen DolceStay unverzüglich per E-Mail oder Telefon gemeldet werden. Je nach Art kann die Behebung bis zu 72 Stunden oder länger dauern, wenn Dienstleister Dritter erforderlich sind.',
      'Unter Wahrung der Privatsphäre der Gäste behält sich DolceStay das Recht vor, die Unterkunft jederzeit bei Bedarf für Inspektionen, Reparaturen und Notfälle zu betreten.',
      'Zusatzbetten und Kinderbetten können vorab angefragt werden, unterliegen jedoch der Verfügbarkeit.',
    ],
  },
  {
    id: 'noise-safety',
    title: 'Lärm, illegale Aktivitäten, Sicherheit',
    paragraphs: [
      'Gesetzlich gilt die Nachtruhe zwischen 22:00 und 8:00 Uhr; Gäste müssen Ruhe einhalten.',
      'Gäste dürfen Nachbarn nicht stören, auch nicht beim Öffnen oder Schließen der Unterkunfts- oder Gebäudetür (sofern zutreffend).',
      'Buchungen für illegale oder unmoralische Aktivitäten werden nicht angenommen.',
      'Der in der Buchungsbestätigungs-E-Mail genannte Gast ist für das Verhalten der gesamten Gruppe verantwortlich und verpflichtet sich, illegale Aktivitäten zu unterlassen.',
      'Gäste sind nicht berechtigt, die Privatsphäre des Eigentümers zu verletzen oder etwas zu veröffentlichen, das Dritten die Identifizierung der Immobilienadresse oder der Identität des Eigentümers ermöglichen könnte.',
      'Der Gast trägt die alleinige Verantwortung für seine Sicherheit während des Aufenthalts und muss alle Anweisungen von DolceStay beim Check-in befolgen.',
      'Bemerkt ein Gast etwas, das ein Risiko für Gesundheit und Sicherheit darstellen könnte, muss er DolceStay unverzüglich informieren. Beim Verlassen müssen Gäste sicherstellen, dass Gasgeräte ausgeschaltet, Fenster geschlossen sowie Klimaanlage, Zentralheizung und Beleuchtung ausgeschaltet sind.',
    ],
  },
  {
    id: 'liability',
    title: 'Haftung',
    paragraphs: [
      'Der Service von DolceStay ist gesetzlich auf Unterkunft und die Beziehung zu Gästen während des Aufenthalts beschränkt. DolceStay haftet nicht für Ereignisse außerhalb der Unterkunft, wie Reinigung und Wartung des Gebäudes, externer Lärm, Bauarbeiten, Nachbarn oder sonstige Angelegenheiten, die nicht unmittelbar die Unterkunft selbst betreffen.',
      'Fotos und Beschreibungen werden von DolceStay erstellt. Geringfügige Abweichungen von Website-Fotos können ohne Beeinträchtigung des allgemeinen Zustands oder der Ausstattung vorkommen.',
      'DolceStay entschädigt Gäste nicht, erstattet keine Gebühren und verlegt Gäste nicht in andere Unterkünfte allein wegen Erscheinungsbild oder Umgebung. Es obliegt dem Gast, vor der Buchung sicherzustellen, dass Gegend oder Nachbarschaft seinen Vorstellungen entsprechen.',
      'DolceStay haftet nicht für Schäden, direkt oder indirekt, während des Aufenthalts, einschließlich Personenschäden, Diebstahl, strafrechtlichem Verhalten, brandsbedingten Verlusten, Fehlverhalten oder Mängeln bei Gas-, Strom-, Wasser-, Telefon- oder Internetversorgung.',
      'Diebstahl oder strafrechtliches Verhalten müssen unverzüglich DolceStay und den zuständigen Polizei- oder Justizbehörden gemeldet werden.',
      'DolceStay haftet nicht für Verzögerungen, Unfälle, Verluste oder Änderungen von Fahrplänen oder Tarifen im Zusammenhang mit Anbieterleistungen, Fehlern oder Unterlassungen Dritter, Streitigkeiten zwischen Gast und Dritten oder Inhalten externer Links außerhalb der Buchungsplattform.',
      'Bei Verstoß gegen diese Bedingungen oder Fehlverhalten behält sich DolceStay das Recht vor, den Gast ohne Entschädigung oder Erstattung gezahlter Gebühren zu verlassen zu verlangen.',
    ],
  },
  {
    id: 'force-majeure',
    title: 'Anwendbares Recht und höhere Gewalt',
    paragraphs: [
      'Dieser Vertrag besteht zwischen Gästen und DolceStay, die zur Vermittlung der Vermietung der Unterkunft ordnungsgemäß befugt ist. Er berechtigt den Gast, die Unterkunft für den vereinbarten Zeitraum und zu den vereinbarten Bedingungen zu nutzen.',
      'Gäste sind keine Mieter und haben kein ausschließliches Eigentum. Wird die gebuchte Unterkunft aufgrund von Umständen, die DolceStay nicht zuzurechnen sind (z. B. Wasser- oder Gaslecks), unverfügbar, haftet DolceStay nicht für Unannehmlichkeiten, wird jedoch Maßnahmen ergreifen, den Gast in eine vergleichbare Unterkunft zu verlegen.',
      'Akzeptiert der Gast die Änderung nicht, wird der volle Betrag (abzüglich Kosten für bereits genutzte Tage, sofern zutreffend) erstattet; weder der Eigentümer noch DolceStay haften für einen darüber hinausgehenden Betrag im Zusammenhang mit der Stornierung. DolceStay haftet nicht für Diebstahl in der Unterkunft zurückgelassener Gegenstände.',
    ],
  },
  {
    id: 'changes-law',
    title: 'Änderungen und anwendbares Recht',
    paragraphs: [
      'DolceStay behält sich das Recht vor, diese Allgemeinen Geschäftsbedingungen bei Bedarf jederzeit zu aktualisieren. Nutzer sollten sie vor einer Buchung prüfen, falls sie geändert wurden.',
      'Mit der Nutzung des DolceStay-Service akzeptiert der Gast etwaige Änderungen; alle Parteien werden diese einhalten. Diese Bedingungen berühren nicht die gesetzlichen Rechte der Gäste.',
      'Diese Allgemeinen Geschäftsbedingungen unterliegen portugiesischem Recht. Portugiesische Gerichte haben ausschließliche Zuständigkeit für rechtliche Schritte im Zusammenhang mit einer Unterkunftsbuchung bei DolceStay.',
    ],
  },
];
