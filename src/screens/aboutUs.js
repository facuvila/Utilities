import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import config from '../config'
import Scanner from '../components/scanner'
import { Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;

function AboutUs() {
    const [data, setData] = useState("");

    return (
        <View
            style={{
            flex: 1,
            paddingTop: "5%",
            alignItems: 'center'
            }}
        >
            <View style={{flexDirection:"row", justifyContent:'space-between'}}>
                <View style={{padding:10}}>
                    <Text style={styles.textStyle}>Escaneá el siguiente QR</Text>
                    <QRCode
                        value={config.creatorName}
                        size={windowWidth * 0.4}
                        logoBackgroundColor='transparent'
                    />
                </View>
                <View style={{padding:10}}>
                    <Text style={styles.textStyle}>Escaneá otros QRs</Text>
                    <Scanner setData={setData} width={windowWidth * 0.4}/> 
                </View>
            </View>
            {data ?
                <Text>Data escaneada:"{data}"</Text>
                : null
            }
        </View>
    );
};

export default AboutUs;

const styles = StyleSheet.create({
    textStyle:{
      color: '#ffffff',
      fontSize: 10,
      fontStyle: 'italic',
      fontWeight: 'bold',
      lineHeight: 40,
      textAlign: 'center',
      textShadowColor: '#000000',
      textShadowRadius: 4,
      textShadowOffset: {width: 2, height: 2},
      textTransform: 'uppercase',
      textAlignVertical : 'top',
    }
});