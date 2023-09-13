import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
  Linking,
  Alert,
  SafeAreaView,
} from 'react-native';
import {sharedStyles} from '../../style';
import Button from '../../components/buttons/Button/Button';
import IconButton from '../../components/buttons/IconButton/IconButton';
import ArrowButton from '../../components/buttons/ArrowButton/ArrowButton';
import SquareImageButton from '../../components/buttons/SquareButton/SquareImageButton';
import {API_URL} from '../../constants/config';
import MaIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const HomeScreen = ({navigation}: any): JSX.Element => {
  //#009643 green
  //#0068b3 blue

  return (
    <View
      // source={require('../../../assets/background.png')}
      style={{flex: 1, justifyContent: 'space-between'}}>
      <SafeAreaView
        style={{
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '100%',
          rowGap: 10,
        }}>
        <View style={{height: 5}} />
        <Image source={require('../../../assets/logo-navbar.png')} />
        <ScrollView
          contentContainerStyle={{
            alignItems: 'center',
            justifyContent: 'center',
            rowGap: 10,
          }}>
          <View style={{display: 'flex', flexDirection: 'row'}}>
            <SquareImageButton
              title="Productos"
              onPress={() => navigation.navigate('Productos')}
              style={{width: '45%'}}
              image={require('../../../assets/fertilizantes1.webp')}
            />
            <View style={{width: 5}} />
            <SquareImageButton
              title="Propósito y Visión"
              onPress={() => navigation.navigate('Proposito Y Vision')}
              style={{width: '45%'}}
              image={require('../../../assets/proposito.jpeg')}
            />
          </View>
          <View style={{display: 'flex', flexDirection: 'row'}}>
            <SquareImageButton
              title="Valores"
              onPress={() => navigation.navigate('Valores')}
              style={{width: '45%'}}
              image={require('../../../assets/valores.webp')}
            />
            <View style={{width: 5}} />
            <SquareImageButton
              title="Legado"
              style={{width: '45%'}}
              onPress={() => navigation.navigate('Legado')}
              image={require('../../../assets/legadomenu.jpg')}
            />
          </View>
          <View style={{display: 'flex', flexDirection: 'row'}}>
            <SquareImageButton
              title="Contacto"
              onPress={() => navigation.navigate('ContactosScreen')}
              style={{width: '45%'}}
              image={require('../../../assets/fichas.png')}
            />
            <View style={{width: 5}} />

            <SquareImageButton
              title="Cotizador"
              onPress={() => navigation.navigate('CotizadorScreen')}
              style={{width: '45%'}}
              image={require('../../../assets/cotizador.jpg')}
            />
          </View>
          <View style={{display: 'flex', flexDirection: 'row'}}>
            <SquareImageButton
              title="Clima"
              onPress={() => navigation.navigate('ClimaMapScreen')}
              style={{width: '45%'}}
              image={require('../../../assets/fichas.png')}
            />
            <View style={{width: 5}} />
            <SquareImageButton
              title="Blog"
              style={{width: '45%'}}
              onPress={() => navigation.navigate('BlogScreen')}
              image={require('../../../assets/legadomenu.jpg')}
            />
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
                  'https://wa.me/50494752003?text=Hola%20me%20gustaría%20saber%20más%20sobre%20los%20productos',
                );
              }}
            />
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              backgroundColor: 'white',
              padding: 5,
              borderRadius: 15,
            }}>
            <MaIcon
              name="facebook"
              size={30}
              color={'#3b5998'}
              onPress={() => {
                Linking.openURL('https://www.facebook.com/grupocadelga');
              }}
            />
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              backgroundColor: 'white',
              padding: 5,
              borderRadius: 15,
            }}>
            <MaIcon
              name="instagram"
              size={30}
              color={'#3b5998'}
              onPress={() => {
                Linking.openURL('https://www.instagram.com/grupo.cadelga/');
              }}
            />
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              backgroundColor: 'white',
              padding: 5,
              borderRadius: 15,
            }}>
            <MaIcon
              name="linkedin"
              size={30}
              color={'#3b5998'}
              onPress={() => {
                Linking.openURL(
                  'https://www.linkedin.com/company/grupocadelga',
                );
              }}
            />
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              backgroundColor: 'white',
              padding: 5,
              borderRadius: 15,
            }}>
            <MaIcon
              name="youtube"
              color={'#3b5998'}
              size={30}
              onPress={() => {
                Linking.openURL('https://www.youtube.com/grupocadelga');
              }}
            />
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default HomeScreen;

//https://wa.me/50494752003?text=Hola%20me%20gustaría%20saber%20más%20sobre%20los%20productos
