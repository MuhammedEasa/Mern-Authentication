// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-61fbc.firebaseapp.com",
  projectId: "mern-auth-61fbc",
  storageBucket: "mern-auth-61fbc.appspot.com",
  messagingSenderId: "254555384123",
  appId: "1:254555384123:web:d1f4b2d424a1df72ef6f1e"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);