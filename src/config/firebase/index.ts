import firebase from "firebase/app";
import "firebase/functions";

const firebaseConfig = {
  apiKey: "AIzaSyCVRxIQFZYIvgzdjMyFN4DJjkPO4GB5iYU",
  authDomain: "ocean-bites.firebaseapp.com",
  projectId: "ocean-bites",
  storageBucket: "ocean-bites.appspot.com",
  messagingSenderId: "208394480618",
  appId: "1:208394480618:web:549073ccc9da9143a96093",
  measurementId: "G-M6P6HH8SWM",
};

// initialize a Firebase instance
firebase.initializeApp(firebaseConfig);

// initialize Cloud Functions through Firebase
firebase.functions();

// export the `firebase` namespace to import it in src/App.js
export default firebase;
