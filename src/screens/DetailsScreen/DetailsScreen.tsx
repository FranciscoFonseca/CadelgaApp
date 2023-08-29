import React, {useEffect, useState} from 'react';
import {Product} from '../../types/ProductType';
import {View, Text, TouchableOpacity, ScrollView, Image} from 'react-native';
import {sharedStyles} from '../../style';
import {Table, Row, Rows} from 'react-native-table-component';
import {API_URL} from '../../constants/config';

const DetailsScreen = ({route, navigation}: any): JSX.Element => {
  //   const { productos, loading, error } = useSelector(
  //     (state: any) => state.productos
  //   );
  const [productos, setProductos] = useState<Product>();

  const loadProductos = async () => {};
  useEffect(() => {
    navigation.setOptions({title: productos?.nombreProducto});
  }, [productos]);
  useEffect(() => {
    loadProductos();
  }, []);
  return (
    <View style={[sharedStyles.container]}>
      <ScrollView>
        {productos?.nombreImagen && (
          <Image
            source={{
              uri: `http://${API_URL}/public/${productos?.nombreImagen}`,
            }}
            style={{width: 400, height: 300, resizeMode: 'contain'}}
          />
        )}

        <Text style={sharedStyles.title}>{productos?.nombreProducto}</Text>

        {productos?.beneficios &&
          JSON.parse(productos?.beneficios.replace(/[\u0000-\u001F]/g, '')).map(
            (beneficio: string) => (
              <View
                key={beneficio}
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginBottom: 10,
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
                    {beneficio}
                  </Text>
                </View>
              </View>
            ),
          )}
        <View style={{marginBottom: 20, margin: 'auto', width: '90%'}}>
          <Table borderStyle={{borderWidth: 2, borderColor: '#0068b3'}}>
            <Row data={['Dosis', 'Intervalo', 'Cultivos', 'Casa']} />
            <Row
              data={[
                productos?.dosis,
                productos?.intervalo,
                productos?.cultivos,
                productos?.casa,
              ]}
            />
          </Table>
        </View>
        <Text>{productos?.intervalo}</Text>
        <Text>{productos?.cultivos}</Text>
        <Text>{productos?.casa}</Text>
        <Text>{productos?.modoDeUso}</Text>
      </ScrollView>
    </View>
  );
};

export default DetailsScreen;
