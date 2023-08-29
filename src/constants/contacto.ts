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
}
export const Contactos: Contacto[] = [
  {
    nombre: 'Casa Matríz',
    email: 'amejia@cadelga.hn',
    telefono: '+504 2550-3901',
    mapa: require('../../assets/mapas/CasaMatriz.png'),
    location: Platform.select({
      ios: generateLocation(15.492437, -88.026062, 'CADELGA Casa Matríz'),
      android: generateLocation(15.492437, -88.026062, 'CADELGA Casa Matríz'),
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
  },
  {
    nombre: 'Tegucigalpa',
    email: 'ventastegucigalpa@cadelga.hn',
    telefono: '+504 2236-8195',
    mapa: require('../../assets/mapas/Tegucigalpa.png'),
    location: Platform.select({
      ios: generateLocation(14.103312, -87.178062, 'CADELGA TEG'),
      android: generateLocation(14.103312, -87.178062, 'CADELGA TEG'),
    }),
    venderores: [
      {
        nombre: 'Cristhian Murillo',
        celular: '+504 9979-8120',
        puesto: 'Vendedor',
      },
      {
        nombre: 'Heber Andino',
        celular: '+504 9445-2833',
        puesto: 'Promotor',
      },
      {
        nombre: 'Luis Pavon',
        celular: '+504 9452-4230',
        puesto: 'Vendedor',
      },
    ],
  },
  {
    nombre: 'San Pedro Sula Bo. Lempira',
    email: 'ventasavlempira@cadelga.hn',
    telefono: '+504 2557-8575',
    mapa: require('../../assets/mapas/BoLempira.png'),
    location: Platform.select({
      ios: generateLocation(15.492437, -88.026062, 'CADELGA SPS'),
      android: generateLocation(15.492437, -88.026062, 'CADELGA SPS'),
    }),
  },
  {
    nombre: 'Comayagua',
    email: ' ventascomayagua@cadelga.hn',
    telefono: '+504 2772-1050',
    mapa: require('../../assets/mapas/Comayagua.png'),
    location: Platform.select({
      ios: generateLocation(14.456938, -87.653937, 'CADELGA SPS'),
      android: generateLocation(14.456938, -87.653937, 'CADELGA SPS'),
    }),
    venderores: [
      {
        nombre: 'Arnulfo Mencia',
        celular: '+504 9750-4515',
        puesto: 'Vendedor',
      },
      {
        nombre: 'Jose Sevilla',
        celular: '+504 9452-3257',
        puesto: 'Vendedor Campo',
      },
      {
        nombre: 'Manuel Inestroza',
        celular: '+504 9436-2599',
        puesto: 'Vendedor Campo',
      },
      {
        nombre: 'Tony Arevalo',
        celular: '+504 9578-0392',
        puesto: 'Promotor',
      },
      {
        nombre: 'Walter Guillen',
        celular: '+504 9895-4172',
        puesto: 'Vendedor',
      },
    ],
  },
  {
    nombre: 'Choluteca',
    email: 'ventascholuteca@cadelga.hn',
    telefono: '+504 2782-0715',
    mapa: require('../../assets/mapas/Choluteca.png'),
    location: Platform.select({
      ios: generateLocation(13.300312, -87.190062, 'CADELGA Choluteca'),
      android: generateLocation(13.300312, -87.190062, 'CADELGA Choluteca'),
    }),
    venderores: [
      {
        nombre: 'Carlos Funez',
        celular: '+504 9452-4244',
        puesto: 'Vendedor',
      },
      {
        nombre: 'Ismael Banegas',
        celular: '+504 9483-1836',
        puesto: 'Promotor',
      },
      {
        nombre: 'Oscar Jimenez',
        celular: '+504 9991-0257',
        puesto: 'Vendedor Campo',
      },
      {
        nombre: 'Sayra Ramirez',
        celular: '+504 8848-8607',
        puesto: 'Vendedor',
      },
    ],
  },
  {
    nombre: 'Danli',
    email: 'ventasdanli@cadelga.hn',
    telefono: '+504 2763-2267',
    mapa: require('../../assets/mapas/Danli.png'),
    location: Platform.select({
      ios: generateLocation(14.033312, -86.583062, 'CADELGA Danli'),
      android: generateLocation(14.033312, -86.583062, 'CADELGA Danli'),
    }),
    venderores: [
      {
        nombre: 'Fredy Canales',
        celular: '+504 9580-7403',
        puesto: 'Vendedor Campo',
      },
      {
        nombre: 'Omar Maradiaga',
        celular: '+504 9452-4222',
        puesto: 'Vendedor',
      },
      {
        nombre: 'Willy Orellana',
        celular: '+504 9936-1313',
        puesto: 'Promotor',
      },
    ],
  },
  {
    nombre: 'Juticalpa',
    email: 'ventasjuticalpa@cadelga.hn',
    telefono: '+504 2785-2072',
    mapa: require('../../assets/mapas/Juticalpa.png'),
    location: Platform.select({
      ios: generateLocation(14.666938, -86.216937, 'CADELGA Juticalpa'),
      android: generateLocation(14.666938, -86.216937, 'CADELGA Juticalpa'),
    }),
    venderores: [
      {
        nombre: 'Kevin Mejia',
        celular: 'Sin Celular',
        puesto: 'Promotor',
      },
      {
        nombre: 'Luis Maradiaga',
        celular: '+504 9465-9418',
        puesto: 'Vendedor Campo',
      },
      {
        nombre: 'Miguel Hernandez',
        celular: '+504 9720-7033',
        puesto: 'Vendedor',
      },
    ],
  },
  {
    nombre: 'La Ceiba',
    email: ' ventaslaceiba@cadelga.hn',
    telefono: '+504 2441-0451',
    mapa: require('../../assets/mapas/LaCeiba.png'),
    location: Platform.select({
      ios: generateLocation(15.766938, -86.816937, 'CADELGA La Ceiba'),
      android: generateLocation(15.766938, -86.816937, 'CADELGA La Ceiba'),
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
  },
  {
    nombre: 'La Entrada Copan',
    email: 'ventaslaentrada@cadelga.hn',
    telefono: '+504 2661-3778',
    mapa: require('../../assets/mapas/LaEntrada.png'),
    location: Platform.select({
      ios: generateLocation(14.416938, -88.816937, 'CADELGA La Entrada Copan'),
      android: generateLocation(
        14.416938,
        -88.816937,
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
  },
  {
    nombre: 'La Esperanza',
    email: 'ventaslaesperanza@cadelga.hn',
    telefono: '+504 2772-0040',
    mapa: require('../../assets/mapas/LaEsperanza.png'),
    location: Platform.select({
      ios: generateLocation(14.316938, -88.816937, 'CADELGA La Esperanza'),
      android: generateLocation(14.316938, -88.816937, 'CADELGA La Esperanza'),
    }),
    venderores: [
      {
        nombre: 'Eleasar Dominguez',
        celular: '+504 9778-8831',
        puesto: 'Vendedor',
      },
      {
        nombre: 'Santos Manuel Pineda',
        celular: '+504 9445-2839',
        puesto: 'Promotor',
      },
    ],
  },
  {
    nombre: 'Morazan',
    email: 'ventasmorazan@cadelga.hn',
    telefono: '+504 2691-0036',
    mapa: require('../../assets/mapas/Morazan.png'),
    location: Platform.select({
      ios: generateLocation(14.416938, -88.816937, 'CADELGA Morazan'),
      android: generateLocation(14.416938, -88.816937, 'CADELGA Morazan'),
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
  },
  {
    nombre: 'Ocotepeque',
    email: ' tiendaocotepeque@cadelga.hn',
    telefono: '+504 2653-3017',
    mapa: require('../../assets/mapas/Ocotepeque.png'),
    location: Platform.select({
      ios: generateLocation(14.416938, -88.816937, 'CADELGA Ocotepeque'),
      android: generateLocation(14.416938, -88.816937, 'CADELGA Ocotepeque'),
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
  },
  {
    nombre: 'Santa Barbara',
    email: ' ventassantabarbara@cadelga.hn',
    telefono: '+504 2643-3734',
    mapa: require('../../assets/mapas/SantaBarbara.png'),
    location: Platform.select({
      ios: generateLocation(14.416938, -88.816937, 'CADELGA Santa Barbara'),
      android: generateLocation(14.416938, -88.816937, 'CADELGA Santa Barbara'),
    }),
    venderores: [
      {
        nombre: 'Karen Pineda',
        celular: '+504 9594-6675',

        puesto: 'Vendedor',
      },
    ],
  },
  {
    nombre: 'Santa Rosa de Copan',
    email: ' ventasantarosa@cadelga.hn',
    telefono: '+504 2661-3778',
    mapa: require('../../assets/mapas/SantaRosadeCopan.png'),
    location: Platform.select({
      ios: generateLocation(14.416938, -88.816937, 'CADELGA Santa Rosa'),
      android: generateLocation(14.416938, -88.816937, 'CADELGA Santa Rosa'),
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
  },
  {
    nombre: 'Zacapa',
    email: ' aida.echeverria@grupocadelga.com',
    telefono: '+504 7941-8734',
    mapa: require('../../assets/mapas/Zacapa.png'),
    location: Platform.select({
      ios: generateLocation(14.416938, -88.816937, 'CADELGA Zacapa'),
      android: generateLocation(14.416938, -88.816937, 'CADELGA Zacapa'),
    }),
  },
  {
    nombre: 'Ave. Nueva Orleans',
    email: ' tiendaneworleans@cadelga.hn',
    telefono: '+504 2556-5115',
    mapa: require('../../assets/mapas/AveNuevaOrleans.png'),
    location: Platform.select({
      ios: generateLocation(
        14.416938,
        -88.816937,
        'CADELGA Ave. Nueva Orleans',
      ),
      android: generateLocation(
        14.416938,
        -88.816937,
        'CADELGA Ave. Nueva Orleans',
      ),
    }),
  },
  {
    nombre: 'Izabal',
    email: ' maite.carrera@grupocadelga.com',
    telefono: '+504 7941-8734',
    mapa: require('../../assets/mapas/Izabal.png'),
    location: Platform.select({
      ios: generateLocation(14.416938, -88.816937, 'CADELGA Izabal'),
      android: generateLocation(14.416938, -88.816937, 'CADELGA Izabal'),
    }),
  },
  {
    nombre: 'El Salvador',
    email: ' ingrid.amaya@grupocadelga.com',
    telefono: '+504 2355-7930',
    mapa: require('../../assets/mapas/ElSalvador.png'),
    location: Platform.select({
      ios: generateLocation(14.416938, -88.816937, 'CADELGA El Salvador'),
      android: generateLocation(14.416938, -88.816937, 'CADELGA El Salvador'),
    }),
  },
];

/*
Carlos Funez	+504 9452-4244	Choluteca	Vendedor
Ismael Banegas	+504 9483-1836	Choluteca	Promotor
Oscar Jimenez	+504 9991-0257	Choluteca	Vendedor Campo
Sayra Ramirez	+504 8848-8607	Choluteca	Vendedor
Arnulfo Mencia	+504 9750-4515	Comayagua	Vendedor
Jose Sevilla	+504 9452-3257	Comayagua	Vendedor Campo
Manuel Inestroza 	+504 9436-2599	Comayagua	Vendedor Campo
Tony Arevalo	+504 9578-0392	Comayagua	Promotor
Walter Guillen	+504 9895-4172	Comayagua	Vendedor
Odan Castillo	+504 9452-3247	CSO	Vendedor Campo
Rony Alvarez	+504 9576-5392	CSO	Promotor RYPA
Fredy Canales	+504 9580-7403	Danli	Vendedor Campo
Omar Maradiaga	+504 9452-4222	Danli	Vendedor
Willy Orellana	+504 9936-1313	Danli	Promotor
Kevin Mejia		Juticalpa	Promotor
Luis Maradiaga	+504 9465-9418	Juticalpa	Vendedor Campo
Miguel Hernandez 	+504 9720-7033	Juticalpa	Vendedor
Bernando Herrera	+504 9436-2674	La Ceiba	Promotor
Milton Linares	+504 9452-9102	La Ceiba	Vendedor
Naun Menjivar	+504 9465-9460	La Ceiba	Vendedor Campo
Jose Lempira	+504 9442-5258	La Entrada Copan	Vendedor
Eleasar Dominguez	+504 9778-8831	La Esperanza	Vendedor
Santos Manuel Pineda	+504 9445-2839	La Esperanza	Promotor
Jessica Carcamo	+504 9436-2603	Morazan	Vendedor
Yerin Santos	+504 9979-8245	Morazan	Promotor
Olvin Rodriguez	+504 9462-2666	NOCC	Vendedor Campo
Ruben Bautista 	+504 9880-8700	NOCC	Promotor RYPA
Alex Perdomo	+504 9806-0477	Ocotepeque	Promotor
Hugo Alvarado	+504 9445-2835	Ocotepeque	Vendedor Campo
Fulvia Najera	+504 9781-8551	San Pedro Sula	Vendedor
Virgilio Recarte	+504 9430-9609	San Pedro Sula	Vendedor
Karen Pineda	+504 9594-6675	Santa Barbara	Vendedor
Edgar	+504 9456-4942	Santa Rosa	Vendedor
Aracely Rodriguez	+504 9460-5852	Santa Rosa, Santa barbara	Vendedor Campo
Rafael Mendoza 	+504 9803-2195	Santa Rosa, Santa barbara	Promotor
Cristhian Murillo	+504 9979-8120	Tegucigalpa	Vendedor
Heber Andino	+504 9445-2833	Tegucigalpa	Promotor
Luis Pavon	+504 9452-4230	Tegucigalpa	Vendedor
*/
