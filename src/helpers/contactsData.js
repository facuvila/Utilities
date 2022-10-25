import * as Contacts from 'expo-contacts';

export default async function contactsData() {
    const [conctacts, setContacts] = useState([])

    const { status } = await Contacts.requestPermissionsAsync();
        
    if (status === 'granted') {
        const { data } = await Contacts.getContactsAsync({
            fields: [Contacts.Fields.Emails, Contacts.Fields.PhoneNumbers],
        });

        setContacts(data)
    }

    return data;
}