// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyB4WmvbpLvN4VB9VXOKXDuzvpAI9hU2pFw",
  authDomain: "cumulative-points-calcul-73190.firebaseapp.com",
  projectId: "cumulative-points-calcul-73190",
  storageBucket: "cumulative-points-calcul-73190.appspot.com",
  messagingSenderId: "995137744269",
  appId: "1:995137744269:web:0ea304473383e4be3b61c4",
  measurementId: "G-PSSDZ70MMY",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const storage = getStorage(app);
