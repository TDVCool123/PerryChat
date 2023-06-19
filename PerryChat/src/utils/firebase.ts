// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAz_jOI3HGUzy7UySbEOCF1p5jru3_nUmE",
  authDomain: "perrychat-76a4d.firebaseapp.com",
  projectId: "perrychat-76a4d",
  storageBucket: "perrychat-76a4d.appspot.com",
  messagingSenderId: "931572915461",
  appId: "1:931572915461:web:bca952300a658bbad42b6c",
  measurementId: "G-51W6H5RQNK"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);