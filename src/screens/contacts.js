import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import ContactList from '../components/contactList.js'
import EmergencyContact from '../components/emergencyContact.js'

export default function Contacts() {
    const [emergencyContact, setEmergencyContact] = useState("")

    useEffect(() => {
        (async () => {
            try {
                const value = await AsyncStorage.getItem('@emergency_Number')
                    if(value !== null) {
                        setEmergencyContact(value)
                    }
            } catch(e) {
                vibrateAlert('Error obteniendo contacto')
            }
        })();
    }, []);

    return (
        emergencyContact ?
        <View>
            <EmergencyContact emergencyContact={emergencyContact} setEmergencyContact={setEmergencyContact}/>
            <ContactList emergencyContact={emergencyContact}/>
        </View> :
        <Text>Cargando...</Text>
    );
};