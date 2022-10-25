import React from 'react';
import { Text, View } from 'react-native';
import WeatherChart from '../components/weatherChart'

function Home() {
    return (
        <WeatherChart weather={"Clouds"} temperature={17}/>
    );
};

export default Home;