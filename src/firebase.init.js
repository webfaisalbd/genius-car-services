// Import the functions you need from the SDKs you need
import {getAuth} from 'firebase/auth';
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA8SFe8Ci6yOV07cbUM6MIHPRDSFgB69no",
  authDomain: "genius-car-services-00001.firebaseapp.com",
  projectId: "genius-car-services-00001",
  storageBucket: "genius-car-services-00001.appspot.com",
  messagingSenderId: "25709198165",
  appId: "1:25709198165:web:32670232c20851555b0ddc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// auth add here
const auth = getAuth(app)

export default app;