import React from 'react';
import { Text, View } from 'react-native';
import QRCode from 'react-native-qrcode-svg';

function AboutUs() {
    return (
        <View
            style={{
            flexDirection: "row",
            padding: 150
            }}
        >
            <QRCode
            value="Hola"
            />
        </View>
    );
};

export default AboutUs;