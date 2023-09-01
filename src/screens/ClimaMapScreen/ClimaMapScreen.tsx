import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  ScrollView,
  TextInput,
  Image,
} from 'react-native';
import MapView from 'react-native-map-clustering';
import {Marker} from 'react-native-maps';

// ClimaMapScreen component
const ClimaMapScreen = () => {
  const [weatherData, setWeatherData] = useState<any[]>([]);

  const fetchWeatherData = async () => {
    try {
      const response = await axios.get(
        'https://api.openweathermap.org/data/2.5/group?id=3601783,3613527,3613319,3612907,3583101,3595259,3608503,3608248,3607986,3607948,3604584,3604318,3601689,3601494,3600949,3587586,3600193&units=metric&lang=es&appid=375ad56fecf53f31f4fbd2eec65df87c',
      );
      setWeatherData(response.data.list);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  useEffect(() => {
    fetchWeatherData();
  }, []);

  const renderMarker = (data: any) => (
    <Marker
      key={index}
      coordinate={{
        latitude: data.coord.lat,
        longitude: data.coord.lon,
      }}>
      <View
        style={{
          backgroundColor: 'rgba(0,0,0,0.5)',
          padding: 10,
          borderRadius: 15,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{color: 'white'}}>{data.name}</Text>
        <Image
          source={{
            uri: `http://openweathermap.org/img/w/${data.weather[0].icon}.png`,
          }}
          style={{
            width: 50,
            height: 50,
          }}
          resizeMode="contain"
        />
      </View>
    </Marker>
  );

  return (
    <View style={{flex: 1, padding: 20}}>
      <MapView
        key={weatherData.length}
        style={{flex: 1}}
        initialRegion={{
          latitude: 14.748565839046684,
          longitude: -86.50627791881561,
          latitudeDelta: 9.05024342388414,
          longitudeDelta: 6.465283110737801,
        }}
        tracksViewChanges={false}
        extent={300}
        animationEnabled={false}>
        {weatherData.map((data, index) => (
          <Marker.Animated
            key={index}
            coordinate={{
              latitude: data.coord.lat,
              longitude: data.coord.lon,
            }}
            tracksViewChanges={false}>
            <View
              style={{
                backgroundColor: 'rgba(0,0,0,0.2)',
                padding: 10, // Adjust padding to reduce the size
                borderRadius: 15,
                justifyContent: 'center',
                alignItems: 'center',
                minWidth: 80, // Set minimum width to reduce the size
              }}>
              <Text
                style={{
                  color: 'white',
                  textAlign: 'center',
                  fontSize: 12, // Adjust font size to fit the text
                  maxWidth: 80, // Set a maximum width for the text container
                  textTransform: 'capitalize',
                }}>
                {data.name}
              </Text>
              <Text
                style={{
                  color: 'white',
                  textAlign: 'center',
                  fontSize: 12, // Adjust font size to fit the text
                  maxWidth: 80, // Set a maximum width for the text container
                  textTransform: 'capitalize',
                }}>
                {data.weather[0].description}
              </Text>
              <Image
                source={{
                  uri: `https://openweathermap.org/img/w/${data.weather[0].icon}.png`,
                }}
                style={{
                  width: 30, // Adjust image size to fit the reduced container
                  height: 30, // Adjust image size to fit the reduced container
                }}
                resizeMode="contain"
              />
            </View>
          </Marker.Animated>
        ))}
      </MapView>
      {/* <MapView
        style={{flex: 1}}
        initialRegion={{
          latitude: 14.0827,
          longitude: -87.20681,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        onRegionChange={region => {
          console.log(region);
        }}>
        <Marker
          coordinate={{
            latitude: 14.0827,
            longitude: -87.20681,
          }}
          //image={`http://openweathermap.org/img/w/${'10d'}.png`}
          title="Mi ubicación"
          description="Descripción de mi ubicación">
          <View
            style={{
              backgroundColor: 'rgba(255,0,0,0.5)',
              padding: 10,

              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{color: 'white'}}>Mi ubicación</Text>
            <Image
              //source={(uri = `http://openweathermap.org/img/w/${'10d'}.png`)}
              source={{
                uri: `http://openweathermap.org/img/w/10d.png`,
              }}
              style={{
                width: 50,
                height: 50,
                backgroundColor: 'rgba(0,0,0,0.5)',
              }}
              resizeMode="contain"
            />
          </View>
        </Marker>
      </MapView> */}
    </View>
  );
};

export default ClimaMapScreen;
