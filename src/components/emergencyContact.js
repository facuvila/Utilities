import React, { useEffect, useState } from 'react';
import { Text, View, TextInput, Button } from "react-native";
import styles from '../styles/emergencyContact';
import vibrateAlert from '../helpers/vibrateAlert';


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
            {emergencyContact ? <Text>Contacto guardado: {emergencyContact}</Text> : null}
            <TextInput
                onChangeText={text => setNewContact(text)}
                keyboardType = "number-pad"
            />
            <Button title="Guardar" onPress={() => {
                storeData(newContact)
                setEmergencyContact(newContact)
            }
            }></Button>
        </View>
    );
}