import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDCDW8bYXT4HdCKqVcoP2PJzzIaBS6DH0E",
  authDomain: "e-commerce-c04ab.firebaseapp.com",
  projectId: "e-commerce-c04ab",
  storageBucket: "e-commerce-c04ab.appspot.com",
  messagingSenderId: "112863834336",
  appId: "1:112863834336:web:f9043920d7beec76686085",
  measurementId: "G-17CP7E4TV9",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
