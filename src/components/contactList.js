import { AlphabetList } from "react-native-section-alphabet-list";
import React, { useEffect, useState } from 'react';
    import { Text, View } from "react-native";
import styles from '../styles/contactList';
import * as Contacts from 'expo-contacts';

function modifier(item) {
    return { value: item.name, key: item.id, phoneNumber: item.phoneNumbers[0].digits}
}

export default function ContactList() {
    const [contacts, setContacts] = useState([])

    useEffect(() => {
        (async () => {
        const { status } = await Contacts.requestPermissionsAsync();
        if (status === 'granted') {
            const { data } = await Contacts.getContactsAsync({
                fields: [Contacts.Fields.Emails, Contacts.Fields.PhoneNumbers],
            });

            let dataFix = data.reduce((dataFix, item) => {
                if (item.name) dataFix.push(modifier(item))
                return dataFix
            }, [])

            setContacts(dataFix)
        }
        })();
    }, []);
    
    if(contacts.length > 0) {
        return (
            <AlphabetList
            data={contacts}
            indexLetterStyle={{ 
                color: 'black', 
                fontSize: 15,
            }}
            renderCustomListHeader={() => (
                <View style={styles.listHeaderContainer}>
                    <Text style={styles.listHeaderLabel}>{contacts.length} contactos</Text>
                </View>
            )}
            renderCustomItem={(item) => (
                <View style={styles.listItemContainer}>
                    <Text style={styles.listItemLabel}>{item.value} ({item.phoneNumber})</Text>
                </View>
            )}
            renderCustomSectionHeader={(section) => (
                <View style={styles.sectionHeaderContainer}>
                    <Text style={styles.sectionHeaderLabel}>{section.title}</Text>
                </View>
            )}
            />
        )
    }
}