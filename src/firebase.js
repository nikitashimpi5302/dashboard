import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseKeys = {
  apiKey: "AIzaSyC-zQHZgekKTap1Q39tc-zTA3jtyMM5QCw",
  authDomain: "android-temp-3f6a5.firebaseapp.com",
  projectId: "android-temp-3f6a5",
  storageBucket: "android-temp-3f6a5.appspot.com",
  messagingSenderId: "896291511288",
  appId: "1:896291511288:web:cb662e8250aa4eddb6140d",
  measurementId: "G-ZC72CNBLF9",
};

firebase.initializeApp(firebaseKeys);
const db = firebase.firestore();
const auth = firebase.auth();

export { db, auth };
