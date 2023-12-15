
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyCm_piLtZLn85985HHkFzCJ4iU8wufPTyI",
  authDomain: "mycloset-c256e.firebaseapp.com",
  projectId: "mycloset-c256e",
  storageBucket: "mycloset-c256e.appspot.com",
  messagingSenderId: "530556573277",
  appId: "1:530556573277:web:6e2c3427c4ed4788929fb4",
  measurementId: "G-CJ7SWGN35B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);