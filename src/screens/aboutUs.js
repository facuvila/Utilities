import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import config from '../config'
function AboutUs() {
    return (
        <View
            style={{
            flex: 1,
            paddingTop: "5%",
            alignItems: 'center'
            }}
        >
            <Text style={styles.textStyle}>Escaneá el siguiente QR</Text>
            <QRCode
                value={config.creatorName}
                size={300}
                logoBackgroundColor='transparent'
            />
        </View>
    );
};

export default AboutUs;

const styles = StyleSheet.create({
    textStyle:{
      color: '#ffffff',
      fontSize: 40,
      fontStyle: 'italic',
      fontWeight: 'bold',
      lineHeight: 40,
      textAlign: 'center',
      textShadowColor: '#000000',
      fontFamily: 'sans-serif',
      textShadowRadius: 4,
      textShadowOffset: {width: 2, height: 2},
      textTransform: 'uppercase',
      textAlignVertical : 'top',
    }
});