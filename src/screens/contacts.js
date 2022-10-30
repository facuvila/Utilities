import React from 'react';
import { View } from 'react-native';
import ContactList from '../components/contactList.js'
import EmergencyContact from '../components/emergencyContact.js'

export default function Contacts() {
    return (
        <View>
            <EmergencyContact/>
            <ContactList/>
        </View>
    );
};