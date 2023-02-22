// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCIWOPXvYhmJdlUmDLu__888rYslGps_NQ",
  authDomain: "netflix-6e5d4.firebaseapp.com",
  projectId: "netflix-6e5d4",
  storageBucket: "netflix-6e5d4.appspot.com",
  messagingSenderId: "1010619211540",
  appId: "1:1010619211540:web:6c3c072fbd6b863d866c01"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export {auth, db}