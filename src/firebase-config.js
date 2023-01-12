// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBecbom0dBL-c0nLtUgZ7TR2WjdIpBeAaI",
  authDomain: "fir-test-d8589.firebaseapp.com",
  projectId: "fir-test-d8589",
  storageBucket: "fir-test-d8589.appspot.com",
  messagingSenderId: "1029763922146",
  appId: "1:1029763922146:web:57a6df03d443bdfe7586bb",
  measurementId: "G-KCPGPBXK1V",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
