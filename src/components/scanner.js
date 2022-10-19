import React, { useEffect, useState } from 'react';
import {  BarCodeScanner  } from 'expo-barcode-scanner';
import { Text, View } from 'react-native';

export default function Scanner({setData, width}) {
    const [hasPermission, setHasPermission] = useState(null);
    const askForCameraPermission = () => {
        (async () => {
            const { status } = await BarCodeScanner.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    };

    useEffect(() => {
        askForCameraPermission();
    }, []);

    const handleBarCodeScanned = async ({ data }) => {
        setData(data);
    };

    return (
        <>
            {        
            !hasPermission ?
                <View>
                    <Text style={{ margin: 10 }}>Sin acceso a la cámara.</Text>
                </View>
            :
                <BarCodeScanner
                    onBarCodeScanned={handleBarCodeScanned}
                    style={{ height: width, width: width }}
                />
            }
        </>
    );
}