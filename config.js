import { Platform } from 'react-native';

const LOCAL_IP = "192.168.0.115:8000"; // your IP here
const USE_DEPLOYED_BACKEND = true;

export const API_BASE_URL = USE_DEPLOYED_BACKEND
  ? "https://reyne-bot.onrender.com/"
  : Platform.OS === 'web'
    ? "http://localhost:8000"
    : `http://${LOCAL_IP}:8000`;
