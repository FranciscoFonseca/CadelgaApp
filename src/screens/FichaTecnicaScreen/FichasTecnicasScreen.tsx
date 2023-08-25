import React from 'react';
import {
  FlatList,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import RenderData from './RenderData'; // Import the component
import {Fichas} from '../../constants/Fichas';
import ArrowButton from '../../components/buttons/ArrowButton/ArrowButton';

const FichasTecnicasScreen = ({navigation}: any) => {
  const Fichas1 = {
    title1: [{subtitle1: 'data'}, {subtitle2: 'data'}],
    title2: 'data',
    title3: 'data',
  };

  const jsonData2 = {
    title7: [{subtitle1: 'data'}, {subtitle2: 'data'}],
  };

  const jsonData3 = {
    title4: [{subtitle1: 'data'}, {subtitle2: 'data'}],
    title5: 'data',
    title6: ['data', '123'],
  };
  const reno35Fs = {
    'Descripcion del Producto': [
      {'Nombre Comercial': 'RENO 35 FS'},
      {
        'Formulación y Concentración':
          'Suspencion concentrada. Contiene 350 gramos de ingredienteactivo por litro de producto comercial',
      },
    ],
    Aplicación: [
      {
        'Modo de Accion': 'Es de acción sistémica, estomacal y de contacto.',
      },
    ],
    'Enfermedades que controla': [
      {Cucarro: 'Eutheola bidentata, Hylernia cilicrura'},
    ],
  };
  const productNames = Fichas.map(
    item => item['Descripcion del Producto'][0]['Nombre Comercial'],
  );

  return (
    <ImageBackground
      source={require('../../../assets/background.png')}
      style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <View style={{width: '100%', margin: 10, padding: 20}}>
        <FlatList
          data={productNames}
          keyExtractor={(item, index) => `${index}`}
          renderItem={({item}) => (
            <>
              <ArrowButton
                style={{marginBottom: 10, width: '100%'}}
                key={item}
                title={item || ''}
                onPress={() => {
                  navigation.navigate('ProductoFichaTecnica', {
                    productName: item,
                    productData: Fichas.filter(
                      ficha =>
                        ficha['Descripcion del Producto'][0][
                          'Nombre Comercial'
                        ] === item,
                    ),
                  });
                }}
                leftColor={'#0068b3'}
                iconColor={'#0068b3'}
              />
            </>
            // <TouchableOpacity
            //   onPress={() =>
            //     navigation.navigate('ProductoFichaTecnica', {
            //       productName: item,
            //       productData: Fichas,
            //     })
            //   }>
            //   <Text>{item}</Text>
            // </TouchableOpacity>
          )}
        />
      </View>
    </ImageBackground>
  );
};

export default FichasTecnicasScreen;
