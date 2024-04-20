// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCCJKQiTb_df53Unl7Vn3ypds245j7SB2E",
  authDomain: "facecat-frontend-projectadvweb.firebaseapp.com",
  projectId: "facecat-frontend-projectadvweb",
  storageBucket: "facecat-frontend-projectadvweb.appspot.com",
  messagingSenderId: "356116850284",
  appId: "1:356116850284:web:14d4c46aa4f042fea91a49",
  measurementId: "G-4PMP5R72JX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
export const databaseauth = getAuth(app);