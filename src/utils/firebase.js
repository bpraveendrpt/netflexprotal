// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDVwldydDifQN8LHool-rjL3lKSAFa-4fw",
  authDomain: "netfixgdp.firebaseapp.com",
  projectId: "netfixgdp",
  storageBucket: "netfixgdp.appspot.com",
  messagingSenderId: "832045943912",
  appId: "1:832045943912:web:4301ff89791c2907c8ffdd",
  measurementId: "G-JS9RZKRPKB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();