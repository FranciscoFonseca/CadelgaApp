import {ImageBackground, View, ScrollView, Image, Text} from 'react-native';
import {Table, Row} from 'react-native-table-component';
import {sharedStyles} from '../../../style';
import {Product} from '../../../types/ProductType';
import RenderData from '../../FichaTecnicaScreen/RenderData';

interface Props {
  productos?: any;
}

const DetallesScreen = ({productos}: Props) => {
  // const imagePath = `./path/to/images/${productos?.casa}.jpg`;

  const casas = {
    CADELGA: require('../../../../assets/casas/CADELGA.png'),
    BASF: require('../../../../assets/casas/BASF.png'),
    SYNGENTA: require('../../../../assets/casas/SYNGENTA.png'),
    UPL: require('../../../../assets/casas/UPL.png'),
  };
  // Use require to import the image dynamically
  return (
    <View
      source={require('../../../../assets/background.png')}
      style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <View
        style={[
          {
            width: '100%',
            flex: 1,
            justifyContent: 'center',
            margin: 10,
            paddingHorizontal: 10,
          },
        ]}>
        <ScrollView>
          <View
            style={{
              justifyContent: 'center',
              alignContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={sharedStyles.title}>
              {productos?.nombreProducto.trim()}
            </Text>
          </View>

          {/* <View
            style={{
              marginVertical: 20,
              backgroundColor: 'rgba(255, 255, 255, 0.9)',
              padding: 10,
              borderRadius: 10,
              gap: 10,
            }}>
            {productos?.dosis && (
              <Text
                style={{
                  color: '#000',
                  textAlign: 'justify',
                  fontSize: 15,
                }}>
                Dosis: {productos?.dosis.trim()}
              </Text>
            )}
            {productos?.intervalo && (
              <Text
                style={{
                  color: '#000',
                  textAlign: 'justify',
                  fontSize: 15,
                }}>
                Intervalo: {(productos?.intervalo).trim()}
              </Text>
            )}

            {productos?.cultivos && (
              <Text
                style={{
                  color: '#000',
                  textAlign: 'justify',
                  fontSize: 15,
                }}>
                Cultivos: {productos?.cultivos.trim()}
              </Text>
            )}
          </View> */}

          <View
            style={{
              margin: 10,
              padding: 10,
              backgroundColor: 'rgba(255,255,255,0.9)',
              borderRadius: 10,
            }}>
            <RenderData data={productos?.fichaTecnica} />
          </View>
          {productos?.casa && (
            <View
              style={{
                justifyContent: 'center',
                alignContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                source={casas[productos?.casa as keyof typeof casas] || {}}
                style={{resizeMode: 'contain'}}
              />
            </View>
          )}
        </ScrollView>
      </View>
    </View>
  );
};

export default DetallesScreen;
