import AsyncStorage from '@react-native-async-storage/async-storage';
import { View, Text} from 'react-native';
import config from '../config'
import styles from '../styles/contacts';

export default function EmergencyContact() {

    const storeData = async (tag, value) => {
        try {
          await AsyncStorage.setItem(tag, value)
        } catch (e) {
          console.log(e)
        }
    }

    
    const getData = async (tag) => {
        try {
            const value = await AsyncStorage.getItem(tag)
            if(value !== null) {
                console.log('Tag does not exist')
            }
        } catch(e) {
            console.log(e)
        }
    }

    return (
        <View style={styles.emergencyContainer}>
            <Text>NUMERO DE EMERGENCIA</Text>
        </View>

    );
}