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

export interface Contacto {
  nombre: string;
  email: string;
  telefono: string;
  mapa: any;
  location: any;
}
export const Contactos: Contacto[] = [
  {
    nombre: 'Casa Matríz',
    email: 'sps@grupocadelga.com',
    telefono: '97979797',
    mapa: require('../../assets/mapas/mapa-sps.png'),
    location: Platform.select({
      ios: generateLocation(15.492437, -88.026062, 'CADELGA Casa Matríz'),
      android: generateLocation(15.492437, -88.026062, 'CADELGA Casa Matríz'),
    }),
  },
  {
    nombre: 'Tegucigalpa',
    email: 'teg@grupocadelga.com',
    telefono: '98989898',
    mapa: require('../../assets/mapas/mapa-sps.png'),
    location: Platform.select({
      ios: generateLocation(14.103312, -87.178062, 'CADELGA TEG'),
      android: generateLocation(14.103312, -87.178062, 'CADELGA TEG'),
    }),
  },
  {
    nombre: 'San Pedro Sula Bo. Lempira',
    email: 'spsBL@grupocadelga.com',
    telefono: '99999999',
    mapa: require('../../assets/mapas/mapa-sps.png'),
    location: Platform.select({
      ios: generateLocation(15.492437, -88.026062, 'CADELGA SPS'),
      android: generateLocation(15.492437, -88.026062, 'CADELGA SPS'),
    }),
  },
  {
    nombre: 'Comayagua',
    email: 'comayagua@grupocadelga.com',
    telefono: 'Teléfono',
    mapa: require('../../assets/mapas/mapa-sps.png'),
    location: Platform.select({
      ios: generateLocation(14.456938,-87.653937, 'CADELGA SPS'),
      android: generateLocation(14.456938,-87.653937, 'CADELGA SPS'),
    }),
  },
];
