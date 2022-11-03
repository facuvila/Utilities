import React, { useState } from 'react';
import { Text, View, TextInput, Button } from "react-native";
import styles from '../styles/emergencyContact';
import vibrateAlert from '../helpers/vibrateAlert';
import AsyncStorage from '@react-native-async-storage/async-storage';


async function storeData(value) {
    try {
        await AsyncStorage.setItem('@emergency_Number', value)
    } catch (e) {
        vibrateAlert('Error guardando contacto')
    }
}

export default function emergencyContact({emergencyContact, setEmergencyContact}) {
    const [newContact, setNewContact] = useState("")

    return(
        <View styles={styles.container}>
            {emergencyContact ? <Text style={{ alignSelf: 'center', paddingTop: 10}}>Contacto guardado: {emergencyContact}</Text> : null}
            <TextInput
                onChangeText={text => setNewContact(text)}
                keyboardType = "number-pad"
                style={styles.input}
            />
            <Button title="Guardar" onPress={() => {
                storeData(newContact)
                setEmergencyContact(newContact)
            }
            }></Button>
        </View>
    );
}