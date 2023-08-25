import {ImageBackground, Text, View} from 'react-native';
import {sharedStyles} from '../../style';

interface ValoresMap {
  name: string;
  imagen: string;
}
const ValoresScreen = () => {
  const valores: ValoresMap[] = [
    {name: 'Perseverancia', imagen: 'perseverancia.png'},
    {name: 'Integridad', imagen: 'integridad.png'},
    {name: 'Compromiso', imagen: 'compromiso.png'},
    {name: 'Innovar', imagen: 'innovar.png'},
    {name: 'Sostenibilidad', imagen: 'sostenibilidad.png'},
    {name: 'Confianza y Lealtad', imagen: 'confianza.png'},
    {name: 'Orientación a Resultados', imagen: 'resultados.png'},
  ];
  return (
    <ImageBackground
      source={require('../../../assets/background.png')}
      style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <View style={sharedStyles.container}>
        {valores.map(valor => (
          <View style={{marginBottom: 20, width: '80%',
          padding: 10,
          backgroundColor: '#fff',
          borderRadius: 10,
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 3,
          },
          shadowOpacity: 0.27,
          shadowRadius: 4.65,
          elevation: 6,
          
          }} key={valor.name}>
            <Text
              style={[
                sharedStyles.title,
                {
                  color: '#000',
                  fontSize: 24,
                },
              ]}>
              {valor.name}
            </Text>
          </View>
        ))}
      </View>
    </ImageBackground>
  );
};

export default ValoresScreen;
