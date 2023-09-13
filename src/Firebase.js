// import firebase from 'firebase/compat/app';
import { getFirestore } from '@firebase/firestore';
import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAKFw0qxJBc4chXy7WiVEB2Zul2AxK9uDM",
  authDomain: "clone-6ad6f.firebaseapp.com",
  projectId: "clone-6ad6f",
  storageBucket: "clone-6ad6f.appspot.com",
  messagingSenderId: "357892836126",
  appId: "1:357892836126:web:adc0c095e2cceb8374d70f",
  measurementId: "G-651RR0HDH8"
};

// Use this to initialize the firebase App
const firebaseApp = initializeApp(firebaseConfig);

// Use these for db & auth
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { auth, db };