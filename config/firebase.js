// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "creditsnap-2f93b.firebaseapp.com",
  projectId: "creditsnap-2f93b",
  storageBucket: "creditsnap-2f93b.appspot.com",
  messagingSenderId: REACT_APP_FIREBASE_MESSAGE_ID,
  appId: "1:513549962946:web:7b39ce8d103c81ddfcf55b",
  measurementId: "G-E0X7DTX087"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);