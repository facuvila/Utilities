import { AlphabetList } from "react-native-section-alphabet-list";
import React from 'react';
import { contactsData } from '../helpers/contactsData';
import { Text, View } from "react-native";
import styles from '../styles/contactList';

export default async function ContactList() {
    data = await contactsData()
    console.log(data)
    return (
        <Text>Hola</Text>
    )
}