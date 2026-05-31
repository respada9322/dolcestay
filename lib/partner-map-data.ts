export type MapPartner = {
  id: string;
  name: string;
  address: string;
  lat: number;
  lng: number;
};

export const MAP_PARTNERS: MapPartner[] = [
  {
    id: 'gliese',
    name: 'Gliese',
    address: 'Praça da Califórnia Lojas 2i e 2j, 2970-760 Sesimbra, Portugal',
    lat: 38.4424654,
    lng: -9.0956796,
  },
  {
    id: 'o-batel',
    name: 'O Batel',
    address: 'Av. dos Náufragos 3, 2970-760 Sesimbra, Portugal',
    lat: 38.4431471,
    lng: -9.102557,
  },
  {
    id: 'o-zagaia',
    name: 'O Zagaia',
    address: 'R. Dr. Peixoto Correia 33, 2970-752 Sesimbra, Portugal',
    lat: 38.443403,
    lng: -9.1033384,
  },
  {
    id: 'casa-mateus',
    name: 'Casa Mateus',
    address: 'Largo Anselmo Braamcamp 4, 2970-654 Sesimbra, Portugal',
    lat: 38.4430884,
    lng: -9.0996113,
  },
  {
    id: 'tasca-do-13',
    name: 'Tasca do 13',
    address: 'R. da República 2, 2970-741 Sesimbra, Portugal',
    lat: 38.4437301,
    lng: -9.1010944,
  },
  {
    id: 'onda-selvagem',
    name: 'Onda Selvagem',
    address: 'Praça da Califórnia 4C, 2970-760 Sesimbra, Portugal',
    lat: 38.44218,
    lng: -9.09535,
  },
  {
    id: 'fun-friends',
    name: "Fun Friends n'Fandango",
    address: 'Largo da Marinha 30, 2970-657 Sesimbra, Portugal',
    lat: 38.4430216,
    lng: -9.1020224,
  },
  {
    id: 'virgilinda',
    name: 'Virgilinda',
    address: 'R. Jorge Nunes 11, 2970-765 Sesimbra, Portugal',
    lat: 38.4433983,
    lng: -9.099825,
  },
  {
    id: 'ribamar',
    name: 'Ribamar',
    address: 'Av. dos Náufragos 29, 2970-637 Sesimbra, Portugal',
    lat: 38.4429497,
    lng: -9.1099809,
  },
  {
    id: 'o-velho-e-o-mar',
    name: 'O Velho e o Mar',
    address: 'R. Joaquim Brandão 30, 2970-764 Sesimbra, Portugal',
    lat: 38.4428333,
    lng: -9.0997849,
  },
  {
    id: 'o-golfinho',
    name: 'O Golfinho',
    address: 'R. da República 34, 2970-741 Sesimbra, Portugal',
    lat: 38.44378,
    lng: -9.10125,
  },
  {
    id: 'a-sesimbrense',
    name: 'A Sesimbrense',
    address: 'R. Jorge Nunes 19, 2970-765 Sesimbra, Portugal',
    lat: 38.44345,
    lng: -9.0999,
  },
  {
    id: 'tasca-do-isaias',
    name: 'Tasca do Isaías',
    address: 'R. Cel. Barreto 2, 2970-772 Sesimbra, Portugal',
    lat: 38.4436162,
    lng: -9.0992842,
  },
  {
    id: 'vidal',
    name: 'Vidal Food and Drinks',
    address: 'Av. dos Náufragos 17A, 2970-744 Sesimbra, Portugal',
    lat: 38.4431502,
    lng: -9.1035813,
  },
  {
    id: 'restaurante-mare',
    name: 'Restaurante Maré',
    address: 'R. Latino Coelho 5, 2970-768 Sesimbra, Portugal',
    lat: 38.4430068,
    lng: -9.0987714,
  },
  {
    id: 'gelatomania',
    name: 'Gelatomania',
    address: 'Av. 25 de Abril 7-C, 2970-634 Sesimbra, Portugal',
    lat: 38.4422299,
    lng: -9.0974609,
  },
  {
    id: 'bar-do-peixe-meco',
    name: 'Bar do Peixe - Meco',
    address: 'Praia das Bicas, 2970-000, Portugal',
    lat: 38.4647687,
    lng: -9.192498,
  },
  {
    id: 'look-around-tours',
    name: 'Look Around Tours',
    address: 'Tv. das Palmeiras 8B, 2970-520 Maçã, Portugal',
    lat: 38.4759255,
    lng: -9.0734557,
  },
  {
    id: 'our-roots',
    name: 'Our Roots',
    address: 'Porto de Abrigo de Sesimbra, 2970-263 Sesimbra, Portugal',
    lat: 38.4365543,
    lng: -9.1156772,
  },
  {
    id: 'cipreia-dive-club',
    name: 'Cipreia Dive Club',
    address:
      'Rua do Clube Naval de Sesimbra, Porto de Abrigo Edifício do Clube Naval de Sesimbra, R/C Loja, 2970-263 Sesimbra, Portugal',
    lat: 38.4357046,
    lng: -9.1152645,
  },
];

export const SESIMBRA_MAP_CENTER = { lat: 38.4425, lng: -9.1015 };

export const MAP_PARTNER_COUNT = MAP_PARTNERS.length;

export function getGoogleMapsDirectionsUrl(partner: MapPartner): string {
  const query = encodeURIComponent(`${partner.name}, ${partner.address}`);
  return `https://www.google.com/maps/search/?api=1&query=${query}`;
}
