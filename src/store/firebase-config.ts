
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBp9isyIwotQtni-yaOZEKjuP-KUrOEgsg",
  authDomain: "diplom-cd10a.firebaseapp.com",
  projectId: "diplom-cd10a",
  storageBucket: "diplom-cd10a.firebasestorage.app",
  messagingSenderId: "200951846906",
  appId: "1:200951846906:web:ce89c79a6d86ba67c93643",
  measurementId: "G-J0BGB0JGXX"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);