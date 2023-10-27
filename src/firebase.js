import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
 apiKey: "AIzaSyCN4KB82aEF-f1jQsu_41Os_QcMH9EAqhA",
  authDomain: "brookx3-73468.firebaseapp.com",
  databaseURL: "https://brookx3-73468-default-rtdb.firebaseio.com",
  projectId: "brookx3-73468",
  storageBucket: "brookx3-73468.appspot.com",
  messagingSenderId: "1004382599882",
  appId: "1:1004382599882:web:ddc82414810326d2855233"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
