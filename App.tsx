//Your final app.js with stack navigator and tab navigator
import * as React from 'react';
import {Appearance, Button, ImageBackground, Text, View} from 'react-native';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from './src/screens/HomeScreen/HomeScreen';
import MaIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import ProductosScreen from './src/screens/ProductosScreen/ProductosScreen';
import ProductoDetailsScreen from './src/screens/ProductosScreen/ProductoDetailsScreen';
import PropositoYVisionScreen from './src/screens/PropositoYVision/PropositoYVisionScreen';
import ValoresScreen from './src/screens/ValoresScreen/ValoresScreen';
import LegadoScreen from './src/screens/LegadoScreen/LegadoScreen';
import FichaTecnicaScreen from './src/screens/FichaTecnicaScreen/FichaTecnicaScreen';
import FichasTecnicasScreen from './src/screens/FichaTecnicaScreen/FichasTecnicasScreen';
import ContactoScreen from './src/screens/ContactoScreen/ContactoScreen';
import CotizadorScreen from './src/screens/CotizadorScreen/CotizadorScreen';
import ProductosMenuScreen from './src/screens/ProductosScreen/ProductosMenuScreen';
import CultivoScreen from './src/screens/ProductosScreen/Tabs/CultivoScreen';
import ClimaMapScreen from './src/screens/ClimaMapScreen/ClimaMapScreen';

Appearance.setColorScheme('light');

function DetailsScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Details!</Text>
    </View>
  );
}

function SettingsScreen({navigation}: any) {
  return (
    <ImageBackground
      source={require('./assets/background.png')}
      style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Settings screen</Text>
        <Button
          title="Go to Details"
          onPress={() => navigation.navigate('Details')}
        />
      </View>
    </ImageBackground>
  );
}
const HomeStack = createStackNavigator();
function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="HomeHome"
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <HomeStack.Screen
        name="Proposito Y Vision"
        component={PropositoYVisionScreen}
        options={{
          title: 'Propósito y Visión',
        }}
      />
      <HomeStack.Screen name="Valores" component={ValoresScreen} />
      <HomeStack.Screen name="Legado" component={LegadoScreen} />
      <HomeStack.Screen
        name="ProductoFichaTecnica"
        component={FichaTecnicaScreen}
        initialParams={{
          productName: 'Ficha',
          productData: {},
        }}
      />
      <HomeStack.Screen
        name="ContactosScreen"
        component={ContactoScreen}
        options={{
          title: 'Contactos',
        }}
      />
      <HomeStack.Screen
        name="CotizadorScreen"
        component={CotizadorScreen}
        options={{
          title: 'Cotizador',
        }}
      />
      <HomeStack.Screen
        name="ClimaMapScreen"
        component={ClimaMapScreen}
        options={{
          title: 'Clima',
        }}
      />
    </HomeStack.Navigator>
  );
}

const SettingsStack = createStackNavigator();
function ProductosStackScreen() {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen
        name="ProductosList"
        component={ProductosMenuScreen}
        options={{
          title: 'Productos',
        }}
      />
      <SettingsStack.Screen
        name="ProductosList2"
        component={ProductosScreen}
        options={{
          title: 'Productos',
        }}
      />
      <SettingsStack.Screen
        name="ProductoDetails"
        component={ProductoDetailsScreen}
        initialParams={{itemId: 0}}
      />
      <SettingsStack.Screen
        name="Cultivo"
        component={CultivoScreen}
        // initialParams={{itemId: 0}}
      />
    </SettingsStack.Navigator>
  );
}

const navTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'transparent',
  },
};
const Tab = createBottomTabNavigator();
export default function App() {
  return (
    <NavigationContainer theme={navTheme}>
      <Tab.Navigator>
        <Tab.Screen
          name="Principal"
          component={HomeStackScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({focused, color, size}) => (
              <>
                <MaIcon name="home" size={size} color={color} />
              </>
            ),
          }}
        />
        <Tab.Screen
          name="Productos"
          component={ProductosStackScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({focused, color, size}) => (
              <>
                <MaIcon name="grass" size={size} color={color} />
              </>
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
