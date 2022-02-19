import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyChlpA1Mijl5B9a6F16jP_stLt4VB069pA",
  authDomain: "weather-ce55c.firebaseapp.com",
  projectId: "weather-ce55c",
  storageBucket: "weather-ce55c.appspot.com",
  messagingSenderId: "607099810427",
  appId: "1:607099810427:web:1fe99a4a15ac6976ac28de",
  measurementId: "G-PH5DTGC8P8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);