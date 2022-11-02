import React from 'react';
import { Button, Text, View } from 'react-native';
import vibrateAlert from '../helpers/vibrateAlert';

export default function Home() {
    return (
        <View>
            <Text>Hola</Text>
            <Button title="Asd" onPress={() => vibrateAlert('error')}/>
        </View>
    );
};
