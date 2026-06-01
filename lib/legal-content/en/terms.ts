import type { LegalSection } from '@/lib/legal';

export const enTermsSections: LegalSection[] = [
  {
    id: 'booking-conditions',
    title: 'Booking conditions',
    paragraphs: [
      'Bookings are subject to availability and confirmation of payment.',
      'To confirm a booking, the guest must make the applicable payment in accordance with what is stated for each accommodation.',
      'Reservation fees, security deposits, cleaning fees or other charges are those advertised at any given time on each accommodation page.',
      'All accommodations require a security deposit to cover possible damage to the property and/or condominium. The deposit will be held at check-in when in person, or up to 48 hours before the stay via online payment for express check-in. Guests will not be charged any amount that prevents access to those funds until the hold is released.',
      'If no damage occurs during the stay, the deposit will be released after check-out to the same credit card, within 7 days of check-out.',
      'If the property is not in the same condition, the deposit amount will be retained until payment for damaged items.',
      'The booking may be cancelled if the security deposit cannot be authorised; guests must ensure their credit card is valid and has sufficient funds. If the deposit cannot be held, the client will be notified by email or SMS and will have 12 hours to try another payment method.',
      'All prices include VAT at the applicable legal rate.',
    ],
  },
  {
    id: 'payment-options',
    title: 'Payment options',
    paragraphs: [
      'Booking payments may be made by American Express, Visa or MasterCard credit card.',
      'Guests are also subject to special rules available for each accommodation.',
    ],
  },
  {
    id: 'pre-check-in',
    title: 'Pre-check-in',
    paragraphs: [
      'After completing the booking, the reservation holder will receive an email and/or SMS from DolceStay with booking confirmation and important information about the accommodation and additional services (such as transfer or extra cleaning).',
      'Guests will be asked to complete an Accommodation Form, which is essential for preparing the stay.',
      'The Accommodation Form will request, among other things, arrival time, total number of guests — so we can provide the correct amount of bed linen and towels — as well as mandatory information for immigration and border services.',
      'Guests must indicate the exact number of people on the Accommodation Form. The number of guests on the booking cannot exceed the number present in the accommodation. If the limit is exceeded, DolceStay reserves the right to require guests to leave without compensation or refund of fees paid.',
      'DolceStay cannot accept any responsibility for incorrect or incomplete completion of the Accommodation Form.',
      'Any attempt to alter and/or falsify the original information will invalidate the Accommodation Form and result in cancellation of the booking.',
    ],
  },
  {
    id: 'cancellation',
    title: 'Cancellation policy',
    paragraphs: ['After booking confirmation, the following fees apply in case of cancellation:'],
    listItems: [
      'The guest pays 50% of the total booking amount if cancellation occurs up to 30 days before check-in.',
      'The guest pays 100% of the total booking amount if cancellation occurs less than 30 days before check-in.',
    ],
    paragraphsAfterList: [
      'In the event of overbooking (simultaneous bookings for the same accommodation), the client expressly acknowledges and accepts that DolceStay will reassign the booking to accommodation of the same category (ensuring quality is not inferior to the booked accommodation), at no additional cost and without any right to compensation from DolceStay.',
    ],
  },
  {
    id: 'stay-conditions',
    title: 'Stay conditions',
    paragraphs: [
      'The reservation holder must be at least 18 years old and must remain in the booked accommodation throughout the stay. Guests under 18 may only be accommodated if accompanied by an adult who is the reservation holder.',
      'The reservation holder must provide a valid address, phone contact and email address.',
      'Pets (of any breed, size or age) are not allowed in DolceStay accommodations. DolceStay reserves the right to require guests to leave without compensation or refund if an animal is found on the premises.',
      'Smoking is not permitted inside the accommodation.',
      'Under Schengen Agreement rules, accommodation of foreign citizens must be reported to immigration and border authorities — all those who do not hold Portuguese nationality.',
      'For this purpose, all foreign guests must provide full identification information by the check-in date through the Accommodation Form.',
      'The guest must report to DolceStay any damage to the accommodation, contents, equipment or accessories during the stay, even if considered normal wear and not their responsibility. Failure to notify may result in liability.',
    ],
  },
  {
    id: 'additional-services',
    title: 'Additional services',
    paragraphs: [
      'DolceStay offers various additional services such as private transfers, cleaning and laundry, cots, and tickets for tourist attractions.',
      'All additional services are provided on request and subject to availability confirmation.',
      'DolceStay is not responsible for services provided by external suppliers.',
    ],
  },
  {
    id: 'check-in-out',
    title: 'Check-in and check-out',
    paragraphs: [
      'At check-in, identification documents of the reservation holder and all foreign guests will be requested to confirm the information provided.',
      'Unless otherwise agreed, the accommodation will be occupied on check-in day between 4:00 p.m. and 8:00 p.m.',
      'For late check-in — from 8:00 p.m. — express check-in may be available; guests must confirm this possibility with DolceStay in advance. Express check-in depends on full prior completion of the Accommodation Form.',
      'For late check-ins when express check-in is not available, a fixed fee of €30 will be charged at check-in.',
      'Check-out is by 11:00 a.m. and all guests must leave by the agreed time. Please inform your intended check-out time so a DolceStay team member can be present.',
      'If no team member can be present at check-out, guests may leave keys on the main table and close the door. Guests must NOT leave keys in the door lock.',
      'If a guest refuses to leave, DolceStay reserves the right to enter the accommodation, remove belongings, change locks and take other necessary measures (the guest will be responsible for the costs).',
      'Any change to arrival or departure dates and times must be confirmed by DolceStay. In case of delay without prior notice and confirmation, a fee equivalent to one night’s rate will be charged against the deposit.',
      'At check-in, DolceStay provides only ONE set of keys; guests must take care not to lose them or leave them inside the apartment. All keys must be returned at check-out.',
      'Additional fees apply for lost keys or lockouts as follows:',
    ],
    listItems: [
      'Lost keys (per key) — €30',
      'Emergency visit (9:00 a.m. – 6:00 p.m.) — €10',
      'Emergency visit (6:00 p.m. – 9:00 a.m.) — €25',
    ],
    paragraphsAfterList: [
      'If locksmith services are required, the guest is responsible for the full amount charged by the service provider, based on complexity, materials, time and other variables.',
      'DolceStay is not responsible for any items left in the apartment after departure. Found items may be returned on request; the guest is fully responsible for all return-related costs.',
    ],
  },
  {
    id: 'cleaning-linen',
    title: 'Cleaning, linen and towels',
    paragraphs: [
      'The accommodation will be cleaned before guests arrive. DolceStay’s basic service includes a set of towels, bed linen and some personal hygiene products per booking.',
      'Additional cleaning services and products, including change of bed linen and towels, are available for an extra fee.',
      'Guests must keep the accommodation as tidy and clean as possible, handing it over at check-out in the best condition so DolceStay can welcome the next guest.',
      'Guests must not leave rubbish inside the accommodation, by its door or outside the building door (where applicable); street bins must be used.',
    ],
  },
  {
    id: 'equipment',
    title: 'Equipment, furniture and accommodation items',
    paragraphs: [
      'If an appliance does not work, or if the guest does not know how to use any equipment, they must contact the DolceStay host in charge.',
      'Alterations to the accommodation or its contents are not permitted.',
      'All objects in the accommodation belong to the owner and must not be moved or removed during the stay.',
    ],
  },
  {
    id: 'maintenance',
    title: 'Maintenance and special requests',
    paragraphs: [
      'Any problem inside the accommodation (e.g. electrical issues, equipment malfunction, water leaks) must be reported to DolceStay immediately by email or phone. Depending on the issue, resolution may take up to 72 hours or longer if third-party services are required.',
      'Respecting guest privacy, DolceStay reserves the right to access the accommodation at any time when necessary for inspections, repairs and emergencies.',
      'Extra beds and cots may be requested in advance but are subject to availability.',
    ],
  },
  {
    id: 'noise-safety',
    title: 'Noise, illegal activity, safety',
    paragraphs: [
      'By law, the night quiet period is between 10:00 p.m. and 8:00 a.m.; guests must remain quiet.',
      'Guests must not disturb neighbours, including when opening or closing the accommodation or building door (where applicable).',
      'Bookings for illegal or immoral activities are not accepted.',
      'The guest named on the booking confirmation email is responsible for the behaviour of the entire group and undertakes to avoid any illegal activity.',
      'Guests are not authorised to invade the owner’s privacy or publish anything that could allow third parties to identify the property address or the owner’s identity.',
      'The guest is solely responsible for their own safety during their stay. The guest must follow all instructions given by DolceStay at check-in.',
      'If a guest notices anything that may pose a risk to health and safety, they must inform DolceStay immediately. When leaving, guests must ensure gas appliances are off, windows closed, air conditioning, central heating and lights switched off.',
    ],
  },
  {
    id: 'liability',
    title: 'Liability',
    paragraphs: [
      'DolceStay’s service is legally limited to accommodation and the relationship with guests during the stay. DolceStay is not liable for events outside the accommodation, such as building cleaning and maintenance, external noise, construction, neighbours, or any matter not directly related to the accommodation itself.',
      'Photographs and descriptions are produced by DolceStay. Minor changes compared to website photos may occur without compromising general condition or amenities.',
      'DolceStay will not compensate guests, refund fees, or transfer guests to other accommodations based on appearance or surroundings. It is the guest’s responsibility to ensure the area or neighbourhood is to their liking before booking.',
      'DolceStay is not liable for damage, direct or indirect, during the stay, including personal injury, theft, criminal behaviour, fire-related losses, misconduct, or deficiencies in gas, electricity, water, telephone or Internet supply.',
      'Theft or criminal behaviour must be reported immediately to DolceStay and to the competent police or judicial authorities.',
      'DolceStay is not liable for delays, accidents, losses or schedule or fare changes related to supplier services, third-party errors or omissions, disputes between a guest and a third party, or external link content other than the booking platform.',
      'In case of breach of these conditions or misconduct, DolceStay reserves the right to require the guest to leave without compensation or refund of fees paid.',
    ],
  },
  {
    id: 'force-majeure',
    title: 'Applicable law and force majeure',
    paragraphs: [
      'This contract is between guests and DolceStay, duly authorised to arrange rental of the accommodation. It authorises the guest to occupy the accommodation for the agreed period and conditions.',
      'Guests are not tenants and do not have exclusive ownership. If booked accommodation becomes unavailable due to circumstances not attributable to DolceStay (e.g. water or gas leaks), DolceStay is not liable for inconvenience but will take measures to transfer the guest to similar accommodation.',
      'If the guest does not accept the change, the full amount (excluding costs for days already used, if applicable) will be refunded, but neither the owner nor DolceStay is liable for any additional amount related to cancellation. DolceStay is not liable for theft of items left in the accommodation.',
    ],
  },
  {
    id: 'changes-law',
    title: 'Changes and governing law',
    paragraphs: [
      'DolceStay reserves the right to update these terms and conditions at any time when necessary. Users should review them before making a booking if they have changed.',
      'By agreeing to use DolceStay’s service, the guest accepts any changes and all parties will respect them. These conditions do not affect guests’ statutory rights.',
      'These terms and conditions are governed by Portuguese law. Portuguese courts have exclusive jurisdiction for legal action related to any accommodation booking with DolceStay.',
    ],
  },
];
