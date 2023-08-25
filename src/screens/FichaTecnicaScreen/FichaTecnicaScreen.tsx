import React, {useEffect} from 'react';
import {ImageBackground, ScrollView, View} from 'react-native';
import RenderData from './RenderData'; // Import the component

const FichaTecnicaScreen = ({route, navigation}: any) => {
  useEffect(() => {
    navigation.setOptions({title: route.params.productName});
    console.log(route.params.productData);
  }, [route.params.productName]);

  return (
    <ImageBackground
      source={require('../../../assets/background.png')}
      style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <ScrollView>
        <View
          style={{
            margin: 10,
            padding: 10,
            backgroundColor: 'rgba(255,255,255,0.9)',
            borderRadius: 10,
          }}>
          <RenderData data={route.params.productData[0]} />
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default FichaTecnicaScreen;
