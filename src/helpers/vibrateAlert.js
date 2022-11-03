import { Vibration, Alert } from "react-native";
import config from '../config'

export default function vibrateAlert(message) {
  config.vibrate ? Vibration.vibrate() : null
  Alert.alert(message)
}