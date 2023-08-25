import {ImageBackground, Text, View} from 'react-native';
import {sharedStyles} from '../../style';

const PropositoYVisionScreen = () => {
  return (
    <ImageBackground
      source={require('../../../assets/background.png')}
      style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <View style={sharedStyles.container}>
        <View style={{marginBottom: 20, width: '80%'}}>
          <Text
            style={[
              sharedStyles.title,
              {color: '#326871', fontSize: 38, textAlign: 'center'},
            ]}>
            Propósito
          </Text>
          <Text style={[sharedStyles.subtitle, {textAlign: 'center'}]}>
            Generar prosperidad con soluciones únicas para alimentar al mundo
          </Text>
        </View>
        <View
          style={{
            marginBottom: 20,
            width: '80%',
            alignContent: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={[
              sharedStyles.title,
              {
                color: '#326871',
                fontSize: 38,
                textAlign: 'center',
              },
            ]}>
            Visión
          </Text>
          <Text style={[sharedStyles.subtitle, {textAlign: 'center'}]}>
            Convertirnos en el referente y el aliado más buscado en el mundo
            agrícola
          </Text>
        </View>
      </View>
    </ImageBackground>
  );
};

export default PropositoYVisionScreen;
