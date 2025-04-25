import { Platform } from 'react-native';

<<<<<<< HEAD
const LOCAL_IP = "192.168.0.115"; // Replace with your computer's IP

export const API_BASE_URL =
  Platform.OS === 'web'
    ? `http://localhost:8000`
    : `http://${LOCAL_IP}:8000`;
=======
const LOCAL_IP = "192.168.0.115:8000"; // your IP here
const USE_DEPLOYED_BACKEND = true;

export const API_BASE_URL = USE_DEPLOYED_BACKEND
  ? "https://reyne-bot.onrender.com/"
  : Platform.OS === 'web'
    ? "http://localhost:8000"
    : `http://${LOCAL_IP}:8000`;
>>>>>>> 8a5db0f2e90b9a997ae81d0d5ba69d6e434ece0f
