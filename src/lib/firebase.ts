import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Week 12: replace these values with YOUR config.
// Firebase console > Project settings (gear icon) > Your apps > TaskFlow (web app) > SDK setup and configuration > Config
const firebaseConfig = {
  apiKey: 'PASTE_YOUR_API_KEY',
  authDomain: 'taskflow-lastname.firebaseapp.com',
  projectId: 'taskflow-lastname',
  storageBucket: 'taskflow-lastname.firebasestorage.app',
  messagingSenderId: 'PASTE_YOUR_SENDER_ID',
  appId: 'PASTE_YOUR_APP_ID',
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

// Week 13: you will add `auth` here (see the Week 13 slides, Step 2).
// @react-native-async-storage/async-storage is already installed for you.
