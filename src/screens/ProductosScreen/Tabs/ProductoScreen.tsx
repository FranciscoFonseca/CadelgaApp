import {
  ImageBackground,
  View,
  ScrollView,
  Image,
  Text,
  Linking,
  SafeAreaView,
} from 'react-native';
import {Table, Row} from 'react-native-table-component';
import {sharedStyles} from '../../../style';
import {Product} from '../../../types/ProductType';
import MaIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {API_URL} from '../../../constants/config';

interface Props {
  productos?: any;
}

const ProductoScreen = ({productos}: Props) => {
  const loadImagen = () => {
    if (productos === undefined) {
      return <></>;
    }
    if (-!productos.hasOwnProperty('imagen')) {
      return <></>;
    }
    const {imagen} = productos;
    console.log(imagen);
    // Check if nombreImagen is valid before rendering the Image component
    if (imagen) {
      try {
        return (
          <Image
            source={imagen}
            style={{width: 400, height: 300, resizeMode: 'contain'}}
          />
        );
      } catch (error) {
        console.error(`Error loading image: ${error.message}`);
        // You can provide a fallback UI here or handle the error as needed
      }
    } else {
      // Handle the case where nombreImagen is not available
      // For example, you can render a placeholder or fallback UI
      return <></>;
    }
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <ImageBackground
        source={require('../../../../assets/background.png')}
        style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <View style={[sharedStyles.container, {}]}>
          <ScrollView
            style={{
              width: '100%',
            }}>
            <View
              style={{
                justifyContent: 'center',
                marginVertical: 10,
                alignContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={sharedStyles.title}>
                {productos?.nombreProducto}
              </Text>
            </View>

            {/* {productos?.nombreImagen && (
            <Image
              source={require(`../../../../assets/Productos/${productos?.nombreImagen}`)}
              style={{width: 400, height: 300, resizeMode: 'contain'}}
            />
          )} */}
            {loadImagen()}
            {productos?.beneficios && (
              <View
                style={{
                  justifyContent: 'center',
                  marginVertical: 10,
                  alignContent: 'center',
                  alignItems: 'center',
                }}>
                <Text style={[sharedStyles.title, {color: '#000'}]}>
                  Beneficios
                </Text>
              </View>
            )}

            {productos?.beneficios &&
              productos?.beneficios.map((beneficio: string) => (
                <View
                  key={beneficio}
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginBottom: 10,
                    justifyContent: 'center',
                    width: '100%',
                  }}>
                  <View
                    style={{
                      width: 25,
                      height: 25,
                      borderRadius: 50,
                      backgroundColor: 'white',
                      borderColor: '#009643',
                      borderWidth: 2,
                    }}
                  />
                  <View
                    style={{
                      backgroundColor: '#009643',
                      borderRadius: 10,
                      marginHorizontal: 10,
                      width: '80%',
                    }}>
                    <Text
                      style={{
                        padding: 5,
                        height: 50,
                        color: 'white',
                        verticalAlign: 'middle',
                        fontSize: 15,
                        fontWeight: '500',
                      }}>
                      {beneficio.trim()}
                    </Text>
                  </View>
                </View>
              ))}
            <View
              style={{
                justifyContent: 'center',
                marginVertical: 10,
                alignContent: 'center',
                alignItems: 'center',
                width: '100%',
                borderRadius: 10,
              }}>
              {productos?.modoDeUso && (
                <View
                  style={{
                    marginBottom: 20,
                    width: '98%',
                    backgroundColor: 'rgba(255, 255, 255, 0.9)',
                    padding: 15,
                    borderRadius: 10,
                    marginTop: 15,
                    justifyContent: 'center',
                    alignContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text
                    style={{color: '#000', textAlign: 'justify', fontSize: 15}}>
                    {productos?.modoDeUso.trim()}
                  </Text>
                </View>
              )}
            </View>
          </ScrollView>
          <View
            style={{
              flexDirection: 'row',
              columnGap: 10,
              marginBottom: 10,
            }}>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                backgroundColor: 'white',
                padding: 5,
                borderRadius: 15,
              }}>
              <MaIcon
                name="whatsapp"
                size={30}
                color="#25D366"
                onPress={() => {
                  Linking.openURL(
                    `https://wa.me/50494752003?text=Hola%20me%20gustaria%20obtener%20mas%20informacion%20sobre%20el%20producto%3A%20${productos?.nombreProducto}.%20Muchas%20gracias%21`,
                  );
                }}
              />
            </View>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};
export default ProductoScreen;
