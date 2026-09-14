import { Platform } from 'react-native';
import Constants from 'expo-constants';

// Dynamically obtain the host machine's IP from Expo or fallback to current IP
const hostUri = Constants.expoConfig?.hostUri;
const LOCAL_IP = hostUri ? hostUri.split(':')[0] : '10.147.98.105';
const PORT = 3000;

export const API_CONFIG = {
    BASE_URL: `http://${LOCAL_IP}:${PORT}/api/`,
    HEADERS: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    },
    TIMEOUT: 30000,
};
