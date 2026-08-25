// DolceStay Data Structures
// These can be connected to a CMS or WordPress in the future

import { accommodations, accommodationsBySlug } from './accommodations';
import { testimonialPropertyKeys } from './testimonials-data';

export const BOOKING_URL = "https://reservas.dolcestay.com/pt-PT/rentals/";

export const contactInfo = {
  email: 'geral@dolcestay.com',
  phones: [
    { number: '+351 968 442 646', name: 'Rodrigo Santos' },
    { number: '+351 925 407 035', name: 'Luis Santos' },
  ],
  whatsapp: '+351968442646',
  address: {
    street: 'Av. da Liberdade n°58/60',
    postalCode: '2970-635',
    city: 'Sesimbra',
    country: 'Portugal',
  },
  social: {
    instagram: 'https://www.instagram.com/dolce_stay/',
    facebook: 'https://www.facebook.com/profile.php?id=61551128039116',
  },
};

export const featuredAccommodations = accommodations;

const testimonialSlugAliases: Record<string, string> = {
  'my-home': 'my-home-in-sesimbra',
  'sesimbra-beach-apartment': 'beach-apartment',
  'vista-azul': 'sesimbra-vista-azul',
};

const pickGalleryImages = (images: string[], indices = [0, 2, 5, 9, 12, 15]) => {
  if (!images.length) return [];
  const picked = indices.map((index) => images[index]).filter((image): image is string => Boolean(image));
  return picked.length ? picked : images.slice(0, 6);
};

const defaultGallery = pickGalleryImages(accommodationsBySlug['casa-da-falesia']?.images ?? []);

/** Gallery images per testimonial index (hero image first, then secondary). */
export const testimonialGalleries = testimonialPropertyKeys.map((propertyKey) => {
  const slug = testimonialSlugAliases[propertyKey] ?? propertyKey;
  const images = accommodationsBySlug[slug]?.images ?? [];
  const gallery = pickGalleryImages(images);
  return gallery.length ? gallery : defaultGallery;
});

// Build `images[]` now, so a per-partner gallery can be enabled later.
// Matching is case-insensitive and tolerant to spaces, underscores and hyphens.
const partnerGalleryFiles = [
  '/images/partners/Cipreia_photo1.webp',
  '/images/partners/Cipreia_photo2.webp',
  '/images/partners/Cipreia_photo3.webp',
  '/images/partners/Cipreia_photo4.webp',
  '/images/partners/Cipreia_photo5.webp',
  '/images/partners/Cipreia_photo6.webp',
  '/images/partners/Logo_Seatru.webp',
  '/images/partners/Look_Around_Tours_photo1.webp',
  '/images/partners/Look_Around_Tours_photo2.webp',
  '/images/partners/Look_Around_Tours_photo3.webp',
  '/images/partners/Look_Around_Tours_photo4.webp',
  '/images/partners/Look_Around_Tours_photo5.webp',
  '/images/partners/Look_Around_Tours_photo6.webp',
  '/images/partners/O_Batel_photo1.webp',
  '/images/partners/O_Zagaia_Logo.png',
  '/images/partners/O_Zagaia_photo1.png',
  '/images/partners/Casa_Mateus_Logo.png',
  '/images/partners/Casa_Mateus_photo1.png',
  '/images/partners/Pexitos_photo1.webp',
  '/images/partners/Pexitos_photo2.webp',
  '/images/partners/Pexitos_photo3.webp',
  '/images/partners/Pexitos_photo4.webp',
  '/images/partners/Pexitos_photo5.webp',
  '/images/partners/SEATRU_photo1.webp',
  '/images/partners/SEATRU_photo2.webp',
  '/images/partners/SEATRU_photo3.webp',
  '/images/partners/SEATRU_photo4.webp',
  '/images/partners/Sesimbra_SUP_Rentals_Logo.webp',
  '/images/partners/Sesimbra_SUP_Rentals_photo1.webp',
  '/images/partners/Sesimbra_SUP_Rentals_photo2.webp',
  '/images/partners/Sesimbra_SUP_Rentals_photo3.webp',
  '/images/partners/Sesimbra_SUP_Rentals_photo4.webp',
  '/images/partners/Sesimbra_SUP_Rentals_photo5.webp',
  '/images/partners/Sesimbra_SUP_Rentals_photo6.webp',
  '/images/partners/gliese.webp',
  '/images/partners/logo_o_batel.png',
  '/images/partners/Our_Roots_Logo.png',
  '/images/partners/OurRoots_Photo1.webp',
  '/images/partners/OurRoots_Photo2.webp',
  '/images/partners/OurRoots_Photo3.webp',
  '/images/partners/OurRoots_Photo4.webp',
  '/images/partners/OurRoots_Photo5.webp',
  '/images/parcerias/a_sesimbrense.webp',
  '/images/parcerias/bar_do_peixe.webp',
  '/images/parcerias/fadango.webp',
  '/images/parcerias/gelatomania.webp',
  '/images/parcerias/o_golfinho.webp',
  '/images/parcerias/o_isaias.webp',
  '/images/parcerias/o_velho_e_o_mar.webp',
  '/images/parcerias/onda_selvagem.webp',
  '/images/parcerias/restaurante_mare.webp',
  '/images/parcerias/ribamar.webp',
  '/images/parcerias/tasca_do_13.webp',
  '/images/parcerias/vidal_food_and_drinks.webp',
  '/images/parcerias/virgilinda.webp',
];

const normalizePartnerToken = (value: string) => value.toLowerCase().replace(/[\s_-]+/g, '');

const matchPartnerImages = (name: string, aliases: string[] = []) => {
  const tokens = [name, ...aliases].map(normalizePartnerToken);

  return partnerGalleryFiles
    .filter((filePath) => {
      const fileName = filePath.split('/').pop() ?? '';
      const normalizedFile = normalizePartnerToken(fileName.replace(/\.[a-z0-9]+$/i, ''));
      return tokens.some((token) => normalizedFile.includes(token));
    })
    .sort((a, b) => {
      const aIsPhoto = /photo/i.test(a);
      const bIsPhoto = /photo/i.test(b);
      if (aIsPhoto !== bIsPhoto) return aIsPhoto ? -1 : 1;
      return a.localeCompare(b);
    });
};

const withPartnerImages = (name: string, fallbackImage: string, aliases: string[] = []) => {
  const images = matchPartnerImages(name, aliases);
  return {
    image: images[0] ?? fallbackImage,
    images,
  };
};

export const partnerExperiences = [
  {
    id: 1,
    name: 'Look Around Tours',
    category: 'experiences' as const,
    description: {
      pt: ['Jeep 4x4 tours', 'Tours culturais & passeios pedestres', 'Observação dos golfinhos', 'Coastering & escalada'],
      en: ['Jeep 4x4 tours', 'Cultural tours & hiking', 'Dolphin watching', 'Coasteering & climbing'],
      fr: ['Tours en Jeep 4x4', 'Tours culturels & randonnées', 'Observation des dauphins', 'Coastering & escalade'],
      es: ['Tours en Jeep 4x4', 'Tours culturales & senderismo', 'Avistamiento de delfines', 'Coasteering & escalada'],
      de: ['Jeep 4x4 Touren', 'Kulturtouren & Wanderungen', 'Delfinbeobachtung', 'Coasteering & Klettern'],
    },
    ...withPartnerImages('Look Around Tours', '/images/partners/Look_Around_Tours_photo1.webp', ['lookaroundtours']),
    instagram: 'https://instagram.com/lookaroundtours',
    facebook: 'https://www.facebook.com/lookaroundtoursportugal',
    website: 'https://lookaroundtours.com/',
  },
  {
    id: 2,
    name: 'Our Roots',
    category: 'experiences' as const,
    description: {
      pt: ['Canoagem', 'Kayak tours', 'Stand up paddle', 'Passeios de barco'],
      en: ['Canoeing', 'Kayak tours', 'Stand up paddle', 'Boat trips'],
      fr: ['Canoë', 'Tours en kayak', 'Stand up paddle', 'Promenades en bateau'],
      es: ['Piragüismo', 'Tours en kayak', 'Stand up paddle', 'Paseos en barco'],
      de: ['Kanufahren', 'Kajaktouren', 'Stand up paddle', 'Bootsfahrten'],
    },
    ...withPartnerImages('Our Roots', '/images/partners/OurRoots_Photo1.webp', ['ourroots']),
    instagram: 'https://www.instagram.com/ourroots___',
    facebook: 'https://www.facebook.com/ourroots.pt/',
    website: 'https://www.ourroots.pt/',
  },
  {
    id: 3,
    name: 'Sesimbra SUP Rentals',
    category: 'experiences' as const,
    description: {
      pt: ['Aluguer de pranchas de paddle', 'Receba a prancha na sua morada', 'Desembale, insufle e entre na água!'],
      en: ['Paddle board rental', 'Board delivered to your address', 'Unpack, inflate and dive in!'],
      fr: ['Location de planches de paddle', 'Planche livrée à votre adresse', 'Déballez, gonflez et plongez!'],
      es: ['Alquiler de tablas de paddle', 'Tabla entregada en su dirección', '¡Desempaquete, infle y entre al agua!'],
      de: ['Paddelbrett-Verleih', 'Brett wird zu Ihrer Adresse geliefert', 'Auspacken, aufblasen und ins Wasser!'],
    },
    ...withPartnerImages('Sesimbra SUP Rentals', '/images/partners/Sesimbra_SUP_Rentals_photo1.webp', ['sesimbrasuprentals']),
    instagram: 'https://www.instagram.com/sesimbrasuprentals',
    facebook: 'https://www.facebook.com/share/1PEMJ23Qu3/?mibextid=wwXIfr',
    website: 'https://sesimbrasuprentals.com/',
  },
  {
    id: 4,
    name: 'Cipreia Dive Club',
    category: 'experiences' as const,
    description: {
      pt: ['Batismo de mergulho', 'Saídas de mergulho', 'Cursos vários'],
      en: ['Diving baptism', 'Diving excursions', 'Various courses'],
      fr: ['Baptême de plongée', 'Sorties de plongée', 'Divers cours'],
      es: ['Bautismo de buceo', 'Salidas de buceo', 'Varios cursos'],
      de: ['Tauch-Taufe', 'Tauchausflüge', 'Verschiedene Kurse'],
    },
    ...withPartnerImages('Cipreia Dive Club', '/images/partners/Cipreia_photo1.webp', ['cipreia']),
    instagram: 'https://www.instagram.com/cipreiadiveclub',
    facebook: 'https://www.facebook.com/CipreiaDiveClub',
    website: 'https://cipreiadiveclub.com/',
  },
  {
    id: 5,
    name: 'Pexitos',
    category: 'experiences' as const,
    description: {
      pt: ['Excursões culturais', 'Excursões por patrimónios históricos', 'Excursões pedestres'],
      en: ['Cultural excursions', 'Historical heritage tours', 'Hiking excursions'],
      fr: ['Excursions culturelles', 'Visites du patrimoine historique', 'Excursions de randonnée'],
      es: ['Excursiones culturales', 'Excursiones por patrimonio histórico', 'Excursiones de senderismo'],
      de: ['Kulturausflüge', 'Ausflüge zum historischen Erbe', 'Wanderausflüge'],
    },
    ...withPartnerImages('Pexitos', '/images/partners/Pexitos_photo1.webp'),
    instagram: 'https://www.instagram.com/pexitos.sesimbra/',
    facebook: 'https://www.facebook.com/wearepexitos',
    website: 'https://www.wearepexitos.com/',
  },
  {
    id: 6,
    name: 'Seatru',
    category: 'experiences' as const,
    description: {
      pt: ['Experiência de kayak', 'Aluguer de kayaks', 'Tours personalizadas'],
      en: ['Kayak experience', 'Kayak rental', 'Personalized tours'],
      fr: ['Expérience de kayak', 'Location de kayaks', 'Tours personnalisés'],
      es: ['Experiencia de kayak', 'Alquiler de kayaks', 'Tours personalizados'],
      de: ['Kayak-Erlebnis', 'Kajak-Verleih', 'Personalisierte Touren'],
    },
    ...withPartnerImages('Seatru', '/images/partners/SEATRU_photo1.webp'),
    instagram: 'https://www.instagram.com/seatruu',
    facebook: 'https://www.facebook.com/seatruu',
    website: 'https://www.seatru.eu/',
  },
];

export const partnerRestaurants = [
  {
    id: 7,
    name: 'Gliese',
    category: 'restaurants' as const,
    type: 'bar' as const,
    ...withPartnerImages('Gliese', '/images/partners/gliese.webp'),
    website: 'https://www.tripadvisor.pt/Restaurant_Review-g227946-d20074683-Reviews-Gliese_Restaurante_Bar-Sesimbra_Setubal_District_Alentejo.html',
  },
  {
    id: 8,
    name: 'O Batel',
    category: 'restaurants' as const,
    type: 'restaurant' as const,
    ...withPartnerImages('O Batel', '/images/partners/O_Batel_photo1.webp', ['obatel']),
    website: 'https://www.tripadvisor.pt/Restaurant_Review-g227946-d23432167-Reviews-O_Batel-Sesimbra_Setubal_District_Alentejo.html',
  },
  {
    id: 9,
    name: 'O Zagaia',
    category: 'restaurants' as const,
    type: 'restaurant' as const,
    ...withPartnerImages('O Zagaia', '/images/partners/O_Zagaia_photo1.png', ['ozagaia']),
    website: 'https://www.tripadvisor.pt/Restaurant_Review-g227946-d17188917-Reviews-O_Zagaia-Sesimbra_Setubal_District_Alentejo.html',
  },
  {
    id: 10,
    name: 'Casa Mateus',
    category: 'restaurants' as const,
    type: 'restaurant' as const,
    ...withPartnerImages('Casa Mateus', '/images/partners/Casa_Mateus_photo1.png', ['casamateus']),
    website: 'https://www.casamateus.pt/',
  },
  {
    id: 11,
    name: 'Tasca do 13',
    category: 'restaurants' as const,
    type: 'restaurant' as const,
    ...withPartnerImages('Tasca do 13', '/images/parcerias/tasca_do_13.webp', ['tascado13']),
    website: 'https://www.tripadvisor.pt/Restaurant_Review-g227946-d4136825-Reviews-Tasca_do_13-Sesimbra_Setubal_District_Alentejo.html',
  },
  {
    id: 12,
    name: 'Onda Selvagem',
    category: 'restaurants' as const,
    type: 'restaurant' as const,
    ...withPartnerImages('Onda Selvagem', '/images/parcerias/onda_selvagem.webp', ['ondaselvagem']),
    website: 'https://ondaselvagem.com/',
  },
  {
    id: 13,
    name: 'A Sesimbrense',
    category: 'restaurants' as const,
    type: 'restaurant' as const,
    ...withPartnerImages('A Sesimbrense', '/images/parcerias/a_sesimbrense.webp', ['asesimbrense']),
    website: 'https://restauranteasesimbrense.eatbu.com/?lang=pt',
  },
  {
    id: 14,
    name: 'Isaías',
    category: 'restaurants' as const,
    type: 'restaurant' as const,
    ...withPartnerImages('Isaías', '/images/parcerias/o_isaias.webp', ['isaias']),
    website: 'https://www.tripadvisor.pt/Restaurant_Review-g227946-d3169993-Reviews-Taberna_Isaias-Sesimbra_Setubal_District_Alentejo.html',
  },
  {
    id: 15,
    name: 'Vidal Food and Drinks',
    category: 'restaurants' as const,
    type: 'bar' as const,
    ...withPartnerImages('Vidal Food and Drinks', '/images/parcerias/vidal_food_and_drinks.webp', ['vidalfoodanddrinks']),
    website: 'https://www.instagram.com/vidalfood_and_drinks/',
  },
  {
    id: 16,
    name: 'Restaurante Maré',
    category: 'restaurants' as const,
    type: 'restaurant' as const,
    ...withPartnerImages('Restaurante Maré', '/images/parcerias/restaurante_mare.webp', ['restaurantemare', 'mare']),
    website: 'https://restaurantemaresesimbra.eatbu.com/?lang=pt',
  },
  {
    id: 17,
    name: 'Bar do Peixe - Meco',
    category: 'restaurants' as const,
    type: 'restaurant' as const,
    ...withPartnerImages('Bar do Peixe - Meco', '/images/parcerias/bar_do_peixe.webp', ['bardopeixemeco', 'bardopeixe']),
    website: 'https://www.bardopeixe.pt/',
  },
  {
    id: 18,
    name: 'Gelatomania',
    category: 'restaurants' as const,
    type: 'gelataria' as const,
    ...withPartnerImages('Gelatomania', '/images/parcerias/gelatomania.webp'),
    website: 'https://gelatomania.pt/',
  },
  {
    id: 19,
    name: 'Ribamar',
    category: 'restaurants' as const,
    type: 'restaurant' as const,
    ...withPartnerImages('Ribamar', '/images/parcerias/ribamar.webp'),
    website: 'https://www.tripadvisor.pt/Restaurant_Review-g227946-d2173978-Reviews-Ribamar-Sesimbra_Setubal_District_Alentejo.html',
  },
  {
    id: 20,
    name: "Fun Friends n'Fandango",
    category: 'restaurants' as const,
    type: 'bar' as const,
    ...withPartnerImages("Fun Friends n'Fandango", '/images/parcerias/fadango.webp', ['funfriendsnfandango', 'fandango', 'fadango']),
    website: 'https://www.instagram.com/fandangosesimbra/',
  },
  {
    id: 21,
    name: 'Virgilinda',
    category: 'restaurants' as const,
    type: 'restaurant' as const,
    ...withPartnerImages('Virgilinda', '/images/parcerias/virgilinda.webp'),
    website: 'https://www.tripadvisor.pt/Restaurant_Review-g227946-d7225471-Reviews-Restaurante_a_Virgilinda-Sesimbra_Setubal_District_Alentejo.html',
  },
  {
    id: 22,
    name: 'O Velho e o Mar',
    category: 'restaurants' as const,
    type: 'restaurant' as const,
    ...withPartnerImages('O Velho e o Mar', '/images/parcerias/o_velho_e_o_mar.webp', ['ovelhoeomar']),
    website: 'https://restauranteovelhoeomar.com/',
  },
  {
    id: 23,
    name: 'O Golfinho',
    category: 'restaurants' as const,
    type: 'restaurant' as const,
    ...withPartnerImages('O Golfinho', '/images/parcerias/o_golfinho.webp', ['ogolfinho']),
    website: 'https://www.tripadvisor.pt/Restaurant_Review-g227946-d7372042-Reviews-O_Golfinho-Sesimbra_Setubal_District_Alentejo.html',
  },
];

export const services = [
  {
    id: 'bookingManagement',
    icon: 'Calendar',
  },
  {
    id: 'checkInOut',
    icon: 'Key',
  },
  {
    id: 'cleaning',
    icon: 'Sparkles',
  },
  {
    id: 'pricing',
    icon: 'TrendingUp',
  },
  {
    id: 'guestSupport',
    icon: 'Headphones',
  },
  {
    id: 'marketing',
    icon: 'Megaphone',
  },
  {
    id: 'maintenance',
    icon: 'Wrench',
  },
  {
    id: 'preparation',
    icon: 'Home',
  },
];
