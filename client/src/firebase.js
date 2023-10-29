// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-2f1e5.firebaseapp.com",
  projectId: "mern-auth-2f1e5",
  storageBucket: "mern-auth-2f1e5.appspot.com",
  messagingSenderId: "873988129875",
  appId: "1:873988129875:web:e2244c1e7c7256a79772a6"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);