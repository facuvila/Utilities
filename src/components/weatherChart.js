import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { weatherConditions } from '../utils/WeatherConditions';
import styles from '../styles/weatherChart';
import vibrateAlert from '../helpers/vibrateAlert';
import { API_KEY } from '../utils/weatherAPIKey';

const Weather = () => {
  const [state, setState] = useState({
    isLoading: false,
    temperature: 0,
    weatherCondition: null,
    error: null
  });

  useEffect(() => {
    fetchWeather();
  });

  function fetchWeather(lat = 20, lon = 20) {
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${API_KEY}&units=metric`
    )
      .then(res => res.json())
      .then(json => {
        setState({
          isLoading: false,
          temperature: json.main.temp,
          weatherCondition: json.weather[0].main,
          error: null
        })
      })
      .catch(error => {
        vibrateAlert(error)
      }
      );
  }

  return (
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
        <Text style={styles.title}>{weatherConditions[state.weatherCondition].title}</Text>
        <Text style={styles.subtitle}>
          {weatherConditions[state.weatherCondition].subtitle}
        </Text>
      </View>
    </View>
  );
};

export default Weather;

//https://blog.expo.dev/building-a-minimalist-weather-app-with-react-native-and-expo-fe7066e02c09