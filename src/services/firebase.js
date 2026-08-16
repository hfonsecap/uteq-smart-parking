import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAIyePg5ZoM4LKGqaoV9PF77779HXlumlE",
  authDomain: "uteq-smart-parking-6783d.firebaseapp.com",
  databaseURL: "https://uteq-smart-parking-6783d-default-rtdb.firebaseio.com",
  projectId: "uteq-smart-parking-6783d",
  storageBucket: "uteq-smart-parking-6783d.firebasestorage.app",
  messagingSenderId: "669904232745",
  appId: "1:669904232745:web:34487e9e97cfc049a85738"
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);