import {ImageBackground, ScrollView, Text, View} from 'react-native';
import {Image} from 'react-native';

const LegadoScreen = () => {
  const data = [
    {
      id: 0,
      time: '1966',
      title: 'CADELGA',
      image: require('../../../assets/Legado/CADELGA.png'),
    },
    {
      id: 1,
      time: '1970',
      title: 'AGROQUIMICOS',
      image: require('../../../assets/Legado/AGROQUIMICOS.png'),
    },
    {
      id: 2,
      time: '1975',
      title: 'FERTICA',
      image: require('../../../assets/Legado/FERTICA.png'),
    },
    {
      id: 3,
      time: '1976',
      title: 'FERTIAGRHO',
      image: require('../../../assets/Legado/FERTIAGRHO.png'),
    },
    {
      id: 4,
      time: '1993',
      title: 'TRESVALLES',
      image: require('../../../assets/Legado/TRESVALLES.png'),
    },
    {
      id: 5,
      time: '2010',
      title: 'IM',
      image: require('../../../assets/Legado/IM.png'),
    },
    {
      id: 6,
      time: '2015',
      title: 'ADNTOPPER',
      image: require('../../../assets/Legado/TOPPER.png'),
    },
    {
      id: 7,
      time: '2020',
      title: 'CHUMBAGUA',
      image: require('../../../assets/Legado/CHUMBAGUA.png'),
    },
    {
      id: 8,
      time: '2022',
      title: 'AGROMONEY',
      image: require('../../../assets/Legado/AGROMONEY.png'),
    },
  ];
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
          }}>
          {data.map(item => (
            <View key={item.id} style={{display: 'flex', flexDirection: 'row'}}>
              {item.id % 2 == 0 ? (
                <>
                  <View
                    style={{
                      backgroundColor: 'rgba(211, 211, 211, 0.5)',
                      borderRadius: 25,
                      padding: 10,
                    }}>
                    <Text style={{textAlign: 'center', color: '#000'}}>
                      {item.time}
                    </Text>
                    <Text style={{textAlign: 'center', color: '#000'}}>
                      {item.title}
                    </Text>
                    <Image
                      source={item.image}
                      style={{
                        width: 100,
                        height: 100,
                      }}
                      resizeMode="contain"
                    />
                  </View>
                  <View style={{width: 100, height: 100}} />
                  <View style={{width: 100, height: 100}} />
                </>
              ) : (
                <>
                  <View style={{width: 100, height: 100}} />
                  <View style={{width: 100, height: 100}} />
                  <View
                    style={{
                      backgroundColor: 'rgba(211, 211, 211, 0.7)',
                      borderRadius: 25,
                      padding: 10,
                    }}>
                    <Text style={{textAlign: 'center', color: '#000'}}>
                      {item.time}
                    </Text>
                    <Text style={{textAlign: 'center', color: '#000'}}>
                      {item.title}
                    </Text>
                    <Image
                      source={item.image}
                      style={{width: 100, height: 100}}
                      resizeMode="contain"
                    />
                  </View>
                </>
              )}
            </View>
          ))}

          <View style={styles.line}></View>
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

export default LegadoScreen;
