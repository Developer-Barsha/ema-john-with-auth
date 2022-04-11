// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyATSIWZ_eAAwJP6ekgWssKipvL9DDXvx-o",
  authDomain: "ema-john-simple-554af.firebaseapp.com",
  projectId: "ema-john-simple-554af",
  storageBucket: "ema-john-simple-554af.appspot.com",
  messagingSenderId: "136702075953",
  appId: "1:136702075953:web:f739f26bc3448865fb2110"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;