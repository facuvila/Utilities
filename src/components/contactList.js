import { AlphabetList } from "react-native-section-alphabet-list";
import React from 'react';
import contactsData from '../helpers/contactsData';
import { Text, View } from "react-native";
import styles from '../styles/contactList';

export default async function ContactList() {
    data = await contactsData()
    return (
        <AlphabetList
        data={data}
        indexLetterStyle={{ 
            color: 'black', 
            fontSize: 15,
        }}
        renderCustomListHeader={() => (
            <View style={styles.listHeaderContainer}>
                <Text style={styles.listHeaderLabel}>{data.length} contactos</Text>
            </View>
        )}
        renderCustomItem={(item) => (
            <View style={styles.listItemContainer}>
                <Text style={styles.listItemLabel}>{item.value} ({item.phone})</Text>
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