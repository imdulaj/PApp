import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyBZD2ibGpFEKLXKUmtiRiXk0Iu6bYM3ndw",
  authDomain: "blog-admin-1e875.firebaseapp.com",
  projectId: "blog-admin-1e875",
  storageBucket: "blog-admin-1e875.appspot.com",
  messagingSenderId: "78719536174",
  appId: "1:78719536174:web:9b071aaf32849e9cb6e3bf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
