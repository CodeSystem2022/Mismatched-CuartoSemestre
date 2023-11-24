import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyDOsGYa8u7ByvDFNnmnAYQptNAZiS8eKCM",
  authDomain: "fir-react-7ac45.firebaseapp.com",
  projectId: "fir-react-7ac45",
  storageBucket: "fir-react-7ac45.appspot.com",
  messagingSenderId: "945101350782",
  appId: "1:945101350782:web:9c8efc135f9bfd984cb52f"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db}