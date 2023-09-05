import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCnakUb3_yVsyj5OKELLnYFJjoQJSc5mn0",
  authDomain: "react-chat-app-20883.firebaseapp.com",
  projectId: "react-chat-app-20883",
  storageBucket: "react-chat-app-20883.appspot.com",
  messagingSenderId: "402577336064",
  appId: "1:402577336064:web:8ce6df154d5a5db183f5e5",
  measurementId: "G-SMJV5KQ7XF"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);