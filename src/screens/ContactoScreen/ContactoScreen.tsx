import {
  ImageBackground,
  Linking,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Image} from 'react-native';
import SquareImageButton from '../../components/buttons/SquareButton/SquareImageButton';
import MaIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Contacto, Contactos} from '../../constants/contacto';
import {useState} from 'react';

const ContactoScreen = () => {
  const LineItem = (contacto: Contacto) => {
    const [accordionOpen, setAccordionOpen] = useState(true);

    const toggleAccordion = () => {
      setAccordionOpen(!accordionOpen);
    };
    return (
      <View
        key={contacto.nombre}
        style={{
          width: '80%',
        }}>
        <View
          style={{
            backgroundColor: 'white',
            borderRadius: 5,
            alignItems: 'center',
            display: 'flex',
            width: '100%',
            borderWidth: 1,
            borderColor: '#D3D3D3',
          }}>
          <TouchableOpacity
            style={{
              width: '100%',
              height: 150,
              alignItems: 'center',
              justifyContent: 'center',
            }}
            onPress={() => Linking.openURL(contacto.location)}>
            <Image
              source={contacto.mapa}
              style={{
                width: '100%',
                height: 150,
                borderRadius: 5,
              }}
              resizeMode="cover"
            />
          </TouchableOpacity>
          <View
            style={{
              marginTop: 5,
              gap: 10,
              justifyContent: 'space-between',
              flexDirection: 'row',
            }}>
            <View
              style={{
                justifyContent: 'space-between',
                width: '45%',
                alignItems: 'center',
                flexDirection: 'row',
                marginTop: 5,
                marginBottom: 5,
              }}>
              <View
                style={{
                  marginLeft: 10,
                }}>
                <Text
                  style={{
                    fontWeight: 'bold',
                  }}>
                  Telefono
                </Text>
              </View>
              <View style={{marginRight: 10}}>
                <TouchableOpacity
                  style={{
                    padding: 2,
                    borderWidth: 1,
                    borderColor: '#009643',
                    borderRadius: 5,
                  }}
                  onPress={() => Linking.openURL(`tel:${contacto.telefono}`)}>
                  <MaIcon name="phone" size={30} color="#009643" />
                </TouchableOpacity>
              </View>
            </View>
            <View
              style={{
                justifyContent: 'space-between',
                width: '45%',
                alignItems: 'center',
                flexDirection: 'row',
                marginTop: 5,
                marginBottom: 5,
              }}>
              <View
                style={{
                  marginLeft: 10,
                }}>
                <Text
                  style={{
                    fontWeight: 'bold',
                  }}>
                  Correo
                </Text>
              </View>
              <View style={{marginRight: 10}}>
                <TouchableOpacity
                  style={{
                    padding: 2,
                    borderWidth: 1,
                    borderColor: '#009643',
                    borderRadius: 5,
                  }}
                  onPress={() => Linking.openURL(`mailto:${contacto.email}`)}>
                  <MaIcon name="email" size={30} color="#009643" />
                </TouchableOpacity>
              </View>
            </View>
          </View>

          {contacto.venderores && contacto.venderores.length > 0 && (
            <>
              <View
                style={{
                  width: '100%',
                }}>
                <TouchableOpacity onPress={toggleAccordion}>
                  <View
                    style={{
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      flexDirection: 'row',
                      marginTop: 5,
                      marginBottom: 5,
                      paddingHorizontal: 15,
                    }}>
                    <Text
                      style={{
                        fontWeight: 'bold',
                      }}>
                      Vendedores
                    </Text>
                    <MaIcon
                      name={accordionOpen ? 'chevron-up' : 'chevron-down'}
                      size={30}
                      color="#009643"
                    />
                  </View>
                </TouchableOpacity>
                {accordionOpen && (
                  <View>
                    {contacto.venderores.map(vendedor => {
                      return (
                        <View
                          key={vendedor.id}
                          style={{
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            width: '100%',
                            flexDirection: 'row',
                            marginTop: 5,
                            marginBottom: 5,
                          }}>
                          <View
                            style={{
                              marginLeft: 10,
                            }}>
                            <Text
                              style={{
                                fontWeight: 'bold',
                              }}>
                              {vendedor.nombre}
                            </Text>
                          </View>
                          <View
                            style={{
                              marginRight: 10,
                              flexDirection: 'row',
                              gap: 10,
                            }}>
                            <TouchableOpacity
                              style={{
                                padding: 2,
                                borderWidth: 1,
                                borderColor: '#009643',
                                borderRadius: 5,
                              }}
                              onPress={() =>
                                Linking.openURL(`tel:${vendedor.celular}`)
                              }>
                              <MaIcon
                                name="whatsapp"
                                size={30}
                                color="#009643"
                              />
                            </TouchableOpacity>
                            <TouchableOpacity
                              style={{
                                padding: 2,
                                borderWidth: 1,
                                borderColor: '#009643',
                                borderRadius: 5,
                              }}
                              onPress={() =>
                                Linking.openURL(`tel:${vendedor.celular}`)
                              }>
                              <MaIcon name="phone" size={30} color="#009643" />
                            </TouchableOpacity>
                          </View>
                        </View>
                      );
                    })}
                  </View>
                )}
              </View>
            </>
          )}

          {/*nombre tienda*/}
          <View
            style={{
              position: 'absolute',
              left: 0,
              top: 0,
              backgroundColor: 'white',
              paddingBottom: 5,
              paddingRight: 5,
              borderBottomRightRadius: 5,
            }}>
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 20,
                marginLeft: 10,
              }}>
              {contacto.nombre}
            </Text>
          </View>
        </View>
      </View>
    );
  };
  return (
    <ImageBackground
      source={require('../../../assets/background.png')}
      style={{width: '100%', height: '100%'}}>
      <View style={{}}>
        <ScrollView
          contentContainerStyle={{
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative',
            paddingTop: 50,
            paddingBottom: 50,
            width: '100%',
            gap: 10,
          }}>
          {Contactos.map(contacto => {
            return LineItem(contacto);
          })}
          {/* {LineItem()} */}
        </ScrollView>
      </View>
    </ImageBackground>
  );
};

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative', // To make positioning of the line relative to this container
  },
  line: {
    position: 'absolute', // Position the line absolutely within the container
    left: '50%', // Position the line in the middle horizontally
    height: '100%', // Height of the line
    width: 1, // Width of the line
    backgroundColor: 'black', // Color of the line
  },
};

export default ContactoScreen;
