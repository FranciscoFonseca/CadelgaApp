import {Platform} from 'react-native';

const generateLocation = (lat: number, long: number, label: string) => {
  const scheme = Platform.select({ios: 'maps:0,0?q=', android: 'geo:0,0?q='});
  const latLng = `${lat},${long}`;
  const url = Platform.select({
    ios: `${scheme}${label}@${latLng}`,
    android: `${scheme}${latLng}(${label})`,
  });
  return url;
};

interface Vendedor {
  nombre: string;
  celular: string;
  puesto: string;
}
export interface Contacto {
  nombre: string;
  email: string;
  telefono: string;
  venderores?: Vendedor[];
  mapa: any;
  location: any;
  coordinates: {
    latitude: number;
    longitude: number;
  };
}
export const Contactos: Contacto[] = [
  {
    nombre: 'Casa Matríz',
    email: 'amejia@cadelga.hn',
    telefono: '+504 2550-3901',
    mapa: require('../../assets/mapas/CasaMatriz.png'),

    location: Platform.select({
      ios: generateLocation(
        15.492448685639,
        -88.026122152805,
        'CADELGA Casa Matríz',
      ),
      android: generateLocation(
        15.492448685639,
        -88.026122152805,
        'CADELGA Casa Matríz',
      ),
    }),
    venderores: [
      {
        nombre: 'Fulvia Najera',
        celular: '+504 9781-8551',
        puesto: 'Vendedor',
      },
      {
        nombre: 'Virgilio Recarte',
        celular: '+504 9430-9609',
        puesto: 'Vendedor',
      },
    ],
    coordinates: {
      latitude: 15.492448685639,
      longitude: -88.026122152805,
    },
  },
  {
    nombre: 'Tegucigalpa',
    email: 'ventastegucigalpa@cadelga.hn',
    telefono: '+504 2236-8195',
    mapa: require('../../assets/mapas/Tegucigalpa.png'),
    location: Platform.select({
      ios: generateLocation(14.103247, -87.178085, 'CADELGA TEG'),
      android: generateLocation(14.103247, -87.178085, 'CADELGA TEG'),
    }),
    venderores: [
      {
        nombre: 'Cristhian Murillo',
        celular: '+504 9979-8120',
        puesto: 'Vendedor',
      },

      {
        nombre: 'Luis Pavon',
        celular: '+504 9452-4230',
        puesto: 'Vendedor',
      },
    ],
    coordinates: {
      latitude: 14.103247,
      longitude: -87.178085,
    },
  },
  {
    nombre: 'San Pedro Sula Bo. Lempira',
    email: 'ventasavlempira@cadelga.hn',
    telefono: '+504 2557-8575',
    mapa: require('../../assets/mapas/BoLempira.png'),
    location: Platform.select({
      ios: generateLocation(15.498917, -88.026361, 'CADELGA SPS'),
      android: generateLocation(15.498917, -88.026361, 'CADELGA SPS'),
    }),
    coordinates: {
      latitude: 15.498917,
      longitude: -88.026361,
    },
  },
  {
    nombre: 'Comayagua',
    email: ' ventascomayagua@cadelga.hn',
    telefono: '+504 2772-1050',
    mapa: require('../../assets/mapas/Comayagua.png'),
    location: Platform.select({
      ios: generateLocation(14.46562, -87.646164, 'CADELGA SPS'),
      android: generateLocation(14.46562, -87.646164, 'CADELGA SPS'),
    }),
    venderores: [
      {
        nombre: 'Arnulfo Mencia',
        celular: '+504 9750-4515',
        puesto: 'Vendedor',
      },
      {
        nombre: 'Walter Guillen',
        celular: '+504 9895-4172',
        puesto: 'Vendedor',
      },
    ],
    coordinates: {
      latitude: 14.46562,
      longitude: -87.646164,
    },
  },
  {
    nombre: 'Choluteca',
    email: 'ventascholuteca@cadelga.hn',
    telefono: '+504 2782-0715',
    mapa: require('../../assets/mapas/Choluteca.png'),
    location: Platform.select({
      ios: generateLocation(
        13.301846832112,
        -87.193892802238,
        'CADELGA Choluteca',
      ),
      android: generateLocation(
        13.301846832112,
        -87.193892802238,
        'CADELGA Choluteca',
      ),
    }),
    venderores: [
      {
        nombre: 'Carlos Funez',
        celular: '+504 9452-4244',
        puesto: 'Vendedor',
      },
      {
        nombre: 'Sayra Ramirez',
        celular: '+504 8848-8607',
        puesto: 'Vendedor',
      },
    ],
    coordinates: {
      latitude: 13.301846832112,
      longitude: -87.193892802238,
    },
  },
  {
    nombre: 'Danli',
    email: 'ventasdanli@cadelga.hn',
    telefono: '+504 2763-2267',
    mapa: require('../../assets/mapas/Danli.png'),
    location: Platform.select({
      ios: generateLocation(14.031815, -86.577805, 'CADELGA Danli'),
      android: generateLocation(14.031815, -86.577805, 'CADELGA Danli'),
    }),
    venderores: [
      {
        nombre: 'Omar Maradiaga',
        celular: '+504 9452-4222',
        puesto: 'Vendedor',
      },
    ],
    coordinates: {
      latitude: 14.031815,
      longitude: -86.577805,
    },
  },
  {
    nombre: 'Juticalpa',
    email: 'ventasjuticalpa@cadelga.hn',
    telefono: '+504 2785-2072',
    mapa: require('../../assets/mapas/Juticalpa.png'),
    location: Platform.select({
      ios: generateLocation(14.657863, -86.214588, 'CADELGA Juticalpa'),
      android: generateLocation(14.657863, -86.214588, 'CADELGA Juticalpa'),
    }),
    venderores: [
      {
        nombre: 'Kevin Mejia',
        celular: 'Sin Celular',
        puesto: 'Promotor',
      },

      {
        nombre: 'Miguel Hernandez',
        celular: '+504 9720-7033',
        puesto: 'Vendedor',
      },
    ],
    coordinates: {
      latitude: 14.657863,
      longitude: -86.214588,
    },
  },
  {
    nombre: 'La Ceiba',
    email: ' ventaslaceiba@cadelga.hn',
    telefono: '+504 2441-0451',
    mapa: require('../../assets/mapas/LaCeiba.png'),
    location: Platform.select({
      ios: generateLocation(15.775521, -86.801598, 'CADELGA La Ceiba'),
      android: generateLocation(15.775521, -86.801598, 'CADELGA La Ceiba'),
    }),
    venderores: [
      {
        nombre: 'Bernando Herrera',
        celular: '+504 9436-2674',
        puesto: 'Promotor',
      },
      {
        nombre: 'Milton Linares',
        celular: '+504 9452-9102',
        puesto: 'Vendedor',
      },
      {
        nombre: 'Naun Menjivar',
        celular: '+504 9465-9460',
        puesto: 'Vendedor Campo',
      },
    ],
    coordinates: {
      latitude: 15.775521,
      longitude: -86.801598,
    },
  },
  {
    nombre: 'La Entrada Copan',
    email: 'ventaslaentrada@cadelga.hn',
    telefono: '+504 2661-3778',
    mapa: require('../../assets/mapas/LaEntrada.png'),
    location: Platform.select({
      ios: generateLocation(
        15.065874099731,
        -88.747497558594,
        'CADELGA La Entrada Copan',
      ),
      android: generateLocation(
        15.065874099731,
        -88.747497558594,
        'CADELGA La Entrada Copan',
      ),
    }),
    venderores: [
      {
        nombre: 'Jose Lempira',
        celular: '+504 9442-5258',
        puesto: 'Vendedor',
      },
    ],
    coordinates: {
      latitude: 15.065874099731,
      longitude: -88.747497558594,
    },
  },
  {
    nombre: 'La Esperanza',
    email: 'ventaslaesperanza@cadelga.hn',
    telefono: '+504 2772-0040',
    mapa: require('../../assets/mapas/LaEsperanza.png'),
    location: Platform.select({
      ios: generateLocation(14.311944, -88.176079, 'CADELGA La Esperanza'),
      android: generateLocation(14.311944, -88.176079, 'CADELGA La Esperanza'),
    }),
    venderores: [
      {
        nombre: 'Eleasar Dominguez',
        celular: '+504 9778-8831',
        puesto: 'Vendedor',
      },
    ],
    coordinates: {
      latitude: 14.311944,
      longitude: -88.176079,
    },
  },
  {
    nombre: 'Morazan',
    email: 'ventasmorazan@cadelga.hn',
    telefono: '+504 2691-0036',
    mapa: require('../../assets/mapas/Morazan.png'),
    location: Platform.select({
      ios: generateLocation(15.312506, -87.592567, 'CADELGA Morazan'),
      android: generateLocation(15.312506, -87.592567, 'CADELGA Morazan'),
    }),
    venderores: [
      {
        nombre: 'Jessica Carcamo',
        celular: '+504 9436-2603',
        puesto: 'Vendedor',
      },
      {
        nombre: 'Yerin Santos',
        celular: '+504 9979-8245',
        puesto: 'Promotor',
      },
    ],
    coordinates: {
      latitude: 15.312506,
      longitude: -87.592567,
    },
  },
  {
    nombre: 'Ocotepeque',
    email: ' tiendaocotepeque@cadelga.hn',
    telefono: '+504 2653-3017',
    mapa: require('../../assets/mapas/Ocotepeque.png'),
    location: Platform.select({
      ios: generateLocation(14.434907, -89.183266, 'CADELGA Ocotepeque'),
      android: generateLocation(14.434907, -89.183266, 'CADELGA Ocotepeque'),
    }),
    venderores: [
      {
        nombre: 'Alex Perdomo',
        celular: '+504 9806-0477',
        puesto: 'Promotor',
      },
      {
        nombre: 'Hugo Alvarado',
        celular: '+504 9445-2835',
        puesto: 'Vendedor Campo',
      },
    ],
    coordinates: {
      latitude: 14.434907,
      longitude: -89.183266,
    },
  },
  {
    nombre: 'Santa Barbara',
    email: ' ventassantabarbara@cadelga.hn',
    telefono: '+504 2643-3734',
    mapa: require('../../assets/mapas/SantaBarbara.png'),
    location: Platform.select({
      ios: generateLocation(14.923119, -88.239426, 'CADELGA Santa Barbara'),
      android: generateLocation(14.923119, -88.239426, 'CADELGA Santa Barbara'),
    }),
    venderores: [
      {
        nombre: 'Karen Pineda',
        celular: '+504 9594-6675',

        puesto: 'Vendedor',
      },
    ],
    coordinates: {
      latitude: 14.923119,
      longitude: -88.239426,
    },
  },
  {
    nombre: 'Santa Rosa de Copan',
    email: ' ventasantarosa@cadelga.hn',
    telefono: '+504 2661-3778',
    mapa: require('../../assets/mapas/SantaRosadeCopan.png'),
    location: Platform.select({
      ios: generateLocation(14.797321, -88.770882, 'CADELGA Santa Rosa'),
      android: generateLocation(14.797321, -88.770882, 'CADELGA Santa Rosa'),
    }),
    venderores: [
      {
        nombre: 'Edgar',
        celular: '+504 9456-4942',
        puesto: 'Vendedor',
      },
      {
        nombre: 'Aracely Rodriguez',
        celular: '+504 9460-5852',
        puesto: 'Vendedor Campo',
      },
      {
        nombre: 'Rafael Mendoza',
        celular: '+504 9803-2195',
        puesto: 'Promotor',
      },
    ],
    coordinates: {
      latitude: 14.797321,
      longitude: -88.770882,
    },
  },
  {
    nombre: 'Zacapa',
    email: ' aida.echeverria@grupocadelga.com',
    telefono: '+504 7941-8734',
    mapa: require('../../assets/mapas/Zacapa.png'),
    location: Platform.select({
      ios: generateLocation(15.006946, -89.6687893, 'CADELGA Zacapa'),
      android: generateLocation(15.006946, -89.6687893, 'CADELGA Zacapa'),
    }),
    coordinates: {
      latitude: 15.006946,
      longitude: -89.6687893,
    },
  },
  {
    nombre: 'Ave. Nueva Orleans',
    email: ' tiendaneworleans@cadelga.hn',
    telefono: '+504 2556-5115',
    mapa: require('../../assets/mapas/AveNuevaOrleans.png'),
    location: Platform.select({
      ios: generateLocation(
        15.490022573424,
        -88.026089516731,
        'CADELGA Ave. Nueva Orleans',
      ),
      android: generateLocation(
        15.490022573424,
        -88.026089516731,
        'CADELGA Ave. Nueva Orleans',
      ),
    }),
    coordinates: {
      latitude: 15.490022573424,
      longitude: -88.026089516731,
    },
  },
  {
    nombre: 'Izabal',
    email: ' maite.carrera@grupocadelga.com',
    telefono: '+504 7941-8734',
    mapa: require('../../assets/mapas/Izabal.png'),
    location: Platform.select({
      ios: generateLocation(15.234827, -88.751711, 'CADELGA Izabal'),
      android: generateLocation(15.234827, -88.751711, 'CADELGA Izabal'),
    }),
    coordinates: {
      latitude: 15.234827,
      longitude: -88.751711,
    },
  },
  {
    nombre: 'El Salvador',
    email: ' ingrid.amaya@grupocadelga.com',
    telefono: '+504 2355-7930',
    mapa: require('../../assets/mapas/ElSalvador.png'),
    location: Platform.select({
      ios: generateLocation(13.70996, -89.7286, 'CADELGA El Salvador'),
      android: generateLocation(13.70996, -89.7286, 'CADELGA El Salvador'),
    }),
    coordinates: {
      latitude: 13.70996,
      longitude: -89.7286,
    },
  },
];
