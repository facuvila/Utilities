import * as Contacts from 'expo-contacts';
import { useEffect } from 'react';

export default async function contactsData() {

    useEffect(() => {
        (async () => {
          const { status } = await Contacts.requestPermissionsAsync();
          if (status === 'granted') {
            const { data } = await Contacts.getContactsAsync({
              fields: [Contacts.Fields.Emails, Contacts.Fields.PhoneNumbers],
            });
            console.log(data)
          }
        })();
    }, []);

}