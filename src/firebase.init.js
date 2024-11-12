// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBf-OzUH5h5ocSLeLyA71-hacLDeD44D1E",
  authDomain: "fir-with-context-c9c23.firebaseapp.com",
  projectId: "fir-with-context-c9c23",
  storageBucket: "fir-with-context-c9c23.firebasestorage.app",
  messagingSenderId: "1050640417452",
  appId: "1:1050640417452:web:6be5c2ec5e6e2ad2035509",
  measurementId: "G-JRN1L8VKWQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();