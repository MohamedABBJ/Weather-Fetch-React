import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyA11S6aGucqG5RCH0UcdKLfoCZav85smEc",
    authDomain: "weather-app-2ab80.firebaseapp.com",
    projectId: "weather-app-2ab80",
    storageBucket: "weather-app-2ab80.appspot.com",
    messagingSenderId: "375340723289",
    appId: "1:375340723289:web:a66a1ea9963b6dee2a5548",
    measurementId: "G-L5DMFC0JSB"
  };

  firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth()
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth , provider};


