import React, { useEffect, useState } from 'react';
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

export default function emergencyContact() {
    const [contact, setContact] = useState("")
    const [newContact, setNewContact] = useState("")

    return(
        <View styles={styles.container}>
            {contact ? <Text>Contacto guardado: {contact}</Text> : null}
            <TextInput
                onChangeText={text => setNewContact(text)}
            />
            <Button title="Guardar" onPress={() => {
                storeData(newContact)
                setContact(newContact)
            }
            }></Button>
        </View>
    );
}