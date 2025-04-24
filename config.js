import { Platform } from 'react-native';

const LOCAL_IP = "192.168.X.X"; // Replace with your computer's IP

export const API_BASE_URL =
  Platform.OS === 'web'
    ? `http://localhost:8000`
    : `http://${LOCAL_IP}:8000`;
