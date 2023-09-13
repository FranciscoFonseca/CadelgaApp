import React, {useEffect, useState} from 'react';
import {ImageBackground, Text, View, StyleSheet} from 'react-native';
import LottieView from 'lottie-react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Geolocation from '@react-native-community/geolocation';
//import {weatherConditions} from '../utils/weatherConditions';
import {Dropdown} from 'react-native-element-dropdown';
import {
  check,
  PERMISSIONS,
  RESULTS,
  PermissionStatus,
} from 'react-native-permissions';
import {ScrollView} from 'react-native-gesture-handler';
import {Contactos} from '../../constants/contacto';

export const weatherConditions = {
  Rain: {
    color: '#005BEA',
    title: 'Raining',
    subtitle: 'Get a cup of coffee',
    icon: 'weather-rainy',
    espanol: 'Lluvia',
  },
  Clear: {
    color: '#f7b733',
    title: 'So Sunny',
    subtitle: 'It is hurting my eyes',
    icon: 'weather-sunny',
    espanol: 'Despejado',
  },
  Thunderstorm: {
    color: '#616161',
    title: 'A Storm is coming',
    subtitle: 'Because Gods are angry',
    icon: 'weather-lightning',
    espanol: 'Tormenta',
  },
  Clouds: {
    color: '#966161',
    title: 'Clouds',
    subtitle: 'Everywhere',
    icon: 'weather-cloudy',
    espanol: 'Nublado',
  },

  Snow: {
    color: '#00d2ff',
    title: 'Snow',
    subtitle: 'Get out and build a snowman for me',
    icon: 'weather-snowy',
    espanol: 'Nieve',
  },
  Drizzle: {
    color: '#076585',
    title: 'Drizzle',
    subtitle: 'Partially raining...',
    icon: 'weather-hail',
    espanol: 'Llovizna',
  },
  Haze: {
    color: '#66A6FF',
    title: 'Haze',
    subtitle: 'Another name for Partial Raining',
    icon: 'weather-hail',
    espanol: 'Neblina',
  },
  Mist: {
    color: '#3CD3AD',
    title: 'Mist',
    subtitle: "Don't roam in forests!",
    icon: 'weather-fog',
    espanol: 'Niebla',
  },
};

const api = {
  key: '375ad56fecf53f31f4fbd2eec65df87c',
  // key: '',
  base: 'https://api.openweathermap.org/data/2.5/',
};

const regionBackground = [
  {
    name: 'San Pedro Sula',
    coordinates: {
      minLat: 15.492448685639,
      maxLat: 15.492448685639,
      minLon: -88.026122152805,
      maxLon: -88.026122152805,
    },
  },
];

const ClimaMapScreen = ({navigation}) => {
  const [isLoading, setLoading] = useState(false);
  const [valueDropdown, setValueDropdown] = useState('San Pedro Sula');
  const [accordionOpen, setAccordionOpen] = useState(false);
  const toggleAccordion = () => {
    setAccordionOpen(!accordionOpen);
  };

  const background = () => {
    switch (valueDropdown) {
      case 'Choluteca':
        return require('./FondosClima/Choluteca.jpg');
      case 'Danli':
        return require('./FondosClima/Danli.jpg');
      case 'La Esperanza':
        return require('./FondosClima/LaEsperanza.jpg');
      case 'Santa Rosa':
        return require('./FondosClima/SantaRosa.jpg');
      default:
        return require('./FondosClima/Danli.jpg');
    }
  };

  const [weatherDetails, setWeatherDetails] = useState({
    temp: 0,
    wea: 'NIL',
    city: 'NIL',
    country: 'NIL',
  });
  //state for lat and lon
  const [lat, setLat] = useState(15.492448685639);
  const [lon, setLon] = useState(-88.026122152805);
  const [permission, setPermission] = useState<PermissionStatus>();

  //request location permission

  useEffect(() => {
    const selectedValue = Contactos.find(
      contacto => contacto.nombre === valueDropdown,
    );
    if (selectedValue !== undefined) {
      setLat(selectedValue?.coordinates.latitude);
      setLon(selectedValue?.coordinates.longitude);
    }
    //unsubscribe(); gps
  }, [valueDropdown]);

  useEffect(() => {
    switch (permission) {
      case RESULTS.UNAVAILABLE:
        console.log(
          'This feature is not available (on this device / in this context)',
        );
        break;
      case RESULTS.DENIED:
        console.log(
          'The permission has not been requested / is denied but requestable',
        );
        break;
      case RESULTS.GRANTED:
        console.log('The permission is granted');
        Geolocation.getCurrentPosition(
          position => {
            console.log('position', position);
            setLat(position.coords.latitude);
            setLon(position.coords.longitude);
          },
          error => {
            console.log(error.code, error.message);
          },
          {
            enableHighAccuracy: true,
            timeout: 10000,
            maximumAge: 10000,
          },
        );
        break;
      case RESULTS.BLOCKED:
        console.log('The permission is denied and not requestable anymore');
        break;
    }
  }, [permission]);

  const requestLocationPermission = async () => {
    if (Platform.OS === 'ios') {
      return check(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE).then(result => {
        setPermission(result);
      });
    } else {
      return check(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION).then(result => {
        setPermission(result);
      });
    }
  };

  useEffect(() => {
    requestLocationPermission();
  }, []);

  const [forecast, setForecast] = useState([
    {key: '1', temp: 0, wea: 'NIL', weather: 'NIL', main: 'NIL'},
    {key: '2', temp: 0, wea: 'NIL', weather: 'NIL', main: 'NIL'},
    {key: '3', temp: 0, wea: 'NIL', weather: 'NIL', main: 'NIL'},
    {key: '4', temp: 0, wea: 'NIL', weather: 'NIL', main: 'NIL'},
    {key: '5', temp: 0, wea: 'NIL', weather: 'NIL', main: 'NIL'},
  ]);
  let offset = 1;
  const Item = ({title}) => (
    <View style={styles.item}>
      <Text style={styles.day}>{dayBuilder(new Date(), offset++)}</Text>
      <Text style={styles.title}>{title} °C</Text>
    </View>
  );

  useEffect(() => {
    search();
  }, [lat, lon]);

  const search = () => {
    setLoading(true);
    console.log(lat, lon);
    fetch(
      `${api.base}weather?lat=${lat}&lon=${lon}&units=metric&APPID=` + api.key,
    )
      .then(res => res.json())
      .then(result => {
        console.log(result);
        if (result.name !== null) {
          setWeatherDetails({
            temp: Math.round(result.main.temp),
            wea: result.weather[0].main,
            city: result.name,
            country: result.sys.country,
          });
        } else {
          this.props.navigation.navigate('Home');
        }
      });
    fetch(
      `${api.base}forecast?lat=${lat}&lon=${lon}&units=metric&APPID=${api.key}`,
    )
      .then(res => res.json())
      .then(result => {
        setLoading(false);
        let forecast_ = [];
        for (let index = 7, k = 1; index < result.cnt; index += 8, k++) {
          console.log(`index ${index}`, result.list[index]);
          let data = {
            key: k,
            temp: Math.round(result.list[index].main.temp),
            wea: result.list[index].weather[0].main,
            weather: result.list[index].weather[0],
            main: result.list[index].main,
          };
          forecast_.push(data);
        }
        console.log('forecast', forecast_[0]);
        setForecast(forecast_);
      });
  };
  const dayBuilder = (d, offset) => {
    let days = [
      'Domingo',
      'Lunes',
      'Martes',
      'Miercoles',
      'Jueves',
      'Viernes',
      'Sabado',
    ];

    let day = days[(d.getDay() + offset) % 7];
    return `${day}`;
  };
  const dateBuilder = d => {
    let months = [
      'Enero',
      'Febrero',
      'Marzo',
      'Abril',
      'Mayo',
      'Junio',
      'Julio ',
      'Agosto',
      'Septiembre',
      'Octubre',
      'Noviembre',
      'Diciembre',
    ];
    let days = [
      'Domingo',
      'Lunes',
      'Martes',
      'Miercoles',
      'Jueves',
      'Viernes',
      'Sabado',
    ];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    //let year = d.getFullYear();
    return `${day}, ${month} ${date}`;
  };
  const renderItem = ({item}) => <Item title={item.temp} />;
  if (isLoading) {
    return (
      <View style={styles.container}>
        <Text>blaF</Text>
        <LottieView
          source={require('./anim/loader_animation.json')}
          autoPlay
          loop
        />
      </View>
    );
  } else {
    return (
      <ImageBackground
        style={[
          styles.background,
          {
            backgroundColor: 'white',
          },
        ]}
        source={background()}>
        <ScrollView
          contentContainerStyle={{
            alignItems: 'center',
            marginHorizontal: 20,
            backgroundColor: 'rgba(255,255,255,0.7)',
            marginVertical: 20,
            padding: 20,
            borderRadius: 10,
          }}>
          <View
            style={{
              alignItems: 'center',
              flexDirection: 'row',
            }}>
            <Dropdown
              style={{width: '100%', height: 50}}
              label="San Pedro Sula"
              data={Contactos.map(contacto => {
                return {value: contacto.nombre, label: contacto.nombre};
              })}
              onChange={(item: any) => {
                console.log('item', item);
                setValueDropdown(item.value);
              }}
              value={valueDropdown}
              itemTextStyle={{
                fontSize: 16,
                fontWeight: 'bold',
                marginBottom: 10,
                color: 'red',
                fontFamily: 'Arial',
                textAlign: 'center',
                justifyContent: 'center',
                alignItems: 'center',
                alignContent: 'center',
                alignSelf: 'center',
                textAlignVertical: 'center',
                flex: 1,
                flexDirection: 'row',
                display: 'flex',
                width: '100%',
                padding: 10,
                borderWidth: 1,
                borderColor: 'black',
                marginBottom: 10,
                borderRadius: 10,
              }}
              baseColor="black"
              textColor="black"
              selectedItemColor="black"
              placeholder="Seleccione una ciudad"
              fontSize={20}
              labelFontSize={20}
              itemContainerStyle={{
                backgroundColor: 'white',
                borderBottomWidth: 1,
                borderBottomColor: 'black',
              }}
              renderItem={(item: any) => {
                return (
                  <View
                    style={{
                      width: '100%',
                      alignItems: 'center',
                      justifyContent: 'center',
                      padding: 10,
                    }}>
                    <Text>{item.value}</Text>
                  </View>
                );
              }}
            />
          </View>
          <View
            style={{
              width: '100%',
              alignItems: 'center',
            }}>
            <Text style={styles.date}>{dateBuilder(new Date())}</Text>
          </View>
          <Icon
            style={styles.icon}
            name={
              weatherConditions[weatherDetails.wea]?.icon ||
              'circle-off-outline'
            }
            size={80}
            color={'#5b616b'}
          />
          <Text style={styles.temperature}>{weatherDetails.temp}°C</Text>
          <Text style={styles.location}>
            {weatherDetails.city}, {weatherDetails.country}
          </Text>
          <Text style={styles.weatherType}>
            {weatherConditions[weatherDetails.wea]?.espanol || ''}
          </Text>
          <View style={{width: '90%', alignItems: 'center'}}>
            <ScrollView
              contentContainerStyle={{
                alignItems: 'center',
                flexDirection: 'row',
                gap: 10,
                marginTop: 20,
                marginBottom: 20,
              }}
              showsHorizontalScrollIndicator={false}
              horizontal={true}>
              {forecast.map((item, index) => {
                return (
                  <View
                    key={index}
                    style={{
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      paddingHorizontal: 5,
                      paddingVertical: 10,
                      backgroundColor: 'rgba(255,255,255,0.5)',
                      borderRadius: 10,
                      width: 100,
                    }}>
                    <Text style={{fontSize: 20, fontWeight: 'bold'}}>
                      {dayBuilder(new Date(), index + 1)}
                    </Text>
                    <Icon
                      name={
                        weatherConditions[item.weather.main]?.icon ||
                        'circle-off-outline'
                      }
                      size={80}
                      color={'#5b616b'}
                    />
                    <Text style={{fontSize: 20}}>{item.temp}°C</Text>
                  </View>
                );
              })}
            </ScrollView>
          </View>
        </ScrollView>
      </ImageBackground>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignContent: 'center',
    height: '100%',
  },
  date: {
    marginTop: 10,
    fontSize: 30,
    fontWeight: '300',
    marginBottom: 10,
  },
  icon: {
    marginTop: 10,
  },
  button: {
    width: '50%',
    height: 50,
    marginBottom: 50,
    backgroundColor: 'gold',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 20,
    shadowColor: 'black',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: '300',
    color: 'black',
  },
  temperature: {
    fontSize: 62,
    fontWeight: '100',
    margin: 5,
    marginTop: 20,
  },
  location: {
    fontSize: 16,
    fontWeight: '400',
    marginBottom: 10,
  },
  weatherType: {
    fontSize: 34,
    fontWeight: '500',
  },
  flatList: {
    width: '100%',
    marginTop: 50,
  },
  item: {
    backgroundColor: 'white',
    opacity: 0.9,
    padding: 18,
    marginVertical: 7,
    marginHorizontal: 16,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'baseline',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 20,
  },
  day: {
    fontSize: 20,
    fontFamily: 'Arial',
    marginRight: '0%',
    fontWeight: '200',
  },
  input: {
    borderWidth: 1,
    borderColor: '#666',
    height: 40,
    marginVertical: 20,
    marginHorizontal: 20,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  background: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  searchButton: {
    width: '100%',
    height: 50,
    marginBottom: 200,
    backgroundColor: '#fcf',
  },
});

export default ClimaMapScreen;
