// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBbvF4hrLfvj3bNchqsOkw6M3Bw5FOehXg",
  authDomain: "fir-99-c6fda.firebaseapp.com",
  projectId: "fir-99-c6fda",
  storageBucket: "fir-99-c6fda.appspot.com",
  messagingSenderId: "487989031398",
  appId: "1:487989031398:web:bc519b0764e0739a7e2627",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore();
