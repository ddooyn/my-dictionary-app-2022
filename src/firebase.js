import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyALZMTUlZMwGcJMdaWeI4qwmfok5adlSmg',
  authDomain: 'my-dictionary-ef8cb.firebaseapp.com',
  projectId: 'my-dictionary-ef8cb',
  storageBucket: 'my-dictionary-ef8cb.appspot.com',
  messagingSenderId: '912417924953',
  appId: '1:912417924953:web:ba23f07ed39930e5240e48',
  measurementId: 'G-2MKRF0KP2Z',
};

initializeApp(firebaseConfig);
export const db = getFirestore();
