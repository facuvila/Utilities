import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { weatherConditions } from '../utils/WeatherConditions';
import styles from '../styles/weatherChart';
import { API_KEY } from '../utils/weatherAPIKey';
import * as Location from 'expo-location';

const Weather = () => {
  const [state, setState] = useState({
    isLoading: true,
    temperature: 0,
    weatherCondition: "Rain",
    error: null
  });

  const [location, setLocation] = useState(false);

  const [time, setTime] = useState(null);

  useEffect(() => {
    setInterval(function() {
      let time = getCurrentTime();
      setTime(time);
    }, 1000);
  }, []);

  const getCurrentTime = () => {
    let today = new Date();
    let hours = (today.getHours() < 10 ? '0' : '') + today.getHours();
    let minutes = (today.getMinutes() < 10 ? '0' : '') + today.getMinutes();
    let seconds = (today.getSeconds() < 10 ? '0' : '') + today.getSeconds();
    return hours + ':' + minutes + ':' + seconds;
  }

  useEffect(() => {
    if(state.isLoading) {
      if(!location) {
        (async () => {
          const { status } = await Location.requestForegroundPermissionsAsync();
            if (status === 'granted') {
              const location = await Location.getCurrentPositionAsync({});
              setLocation(location);
          }
        })();
      }
      if (location) {
        fetch(
          `http://api.openweathermap.org/data/2.5/weather?lat=${location.coords.latitude}&lon=${location.coords.longitude}&APPID=${API_KEY}&units=metric`
        )
          .then(res => res.json())
          .then(json => {
            console.log(json)
            setState({
              isLoading: false,
              temperature: json.main.temp,
              weatherCondition: json.weather[0].main,
              error: null,
              location: json.name + ', ' + json.sys.country
            })
          });
      }
    }
  });

  return (
    state.isLoading ?
    <Text>Cargando...</Text> :
    <View
      style={[
        styles.weatherContainer,
        { backgroundColor: weatherConditions[state.weatherCondition].color }
      ]}
    >
      <View style={styles.headerContainer}>
        <MaterialCommunityIcons
          size={72}
          name={weatherConditions[state.weatherCondition].icon}
          color={'#fff'}
        />
        <Text style={styles.tempText}>{state.temperature}˚</Text>
      </View>
      <View style={styles.bodyContainer}>
        <Text style={styles.title}>{time}</Text>
        <Text style={styles.title}>{weatherConditions[state.weatherCondition].title}</Text>
        <Text style={styles.subtitle}>
          {weatherConditions[state.weatherCondition].subtitle}
        </Text>
        <Text style={styles.subtitle}>
        {state.location}
        </Text>
      </View>
    </View>
  );
};

export default Weather;