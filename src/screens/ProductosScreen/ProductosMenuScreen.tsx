import React, {useEffect, useState} from 'react';
import {Product} from '../../types/ProductType';
import {API_URL} from '../../constants/config';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import ProductoScreen from './Tabs/ProductoScreen';
import DetallesScreen from './Tabs/DetallesScreen';
import {Fichas} from '../../constants/Fichas';
import ProductosScreen from './ProductosScreen';
import CultivosScreen from './CultivosScreen';

const ProductosMenuScreen = ({route, navigation}: any): JSX.Element => {
  //   const { productos, loading, error } = useSelector(
  //     (state: any) => state.productos
  //   );
  const [productos, setProductos] = useState<any>();

  const loadProductos = async () => {
    // if (route?.params?.itemId >= 0) {
    //   const {data} = await axios.get(
    //     `${API_URL}/products/${r <<oute.params.itemId}`,
    //   );
    //   console.log(data);
    //   data && setProductos(data);
    // }
    const fichaProducto = Fichas.find(
      ficha => ficha.id === route?.params?.itemId,
    );
    // console.log(route?.params?.itemId);
    if (fichaProducto) {
      setProductos(fichaProducto);
    }
  };
  useEffect(() => {
    loadProductos();
  }, []);
  const Tab = createMaterialTopTabNavigator();

  const HomeScreen = () => <ProductosScreen />;

  const SettingsScreen = () => <CultivosScreen />;

  return (
    <>
      <Tab.Navigator>
        <Tab.Screen name="Productos" component={HomeScreen} />
        <Tab.Screen name="Cultivos" component={SettingsScreen} />
      </Tab.Navigator>
    </>
  );
};

export default ProductosMenuScreen;
