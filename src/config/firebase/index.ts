import firebase from "firebase/app";
// eslint-disable-next-line import/no-duplicates
import "firebase/functions";
// eslint-disable-next-line import/no-duplicates
import "firebase/firestore";
// eslint-disable-next-line import/no-duplicates
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCVRxIQFZYIvgzdjMyFN4DJjkPO4GB5iYU",
  authDomain: "ocean-bites.firebaseapp.com",
  projectId: "ocean-bites",
  storageBucket: "ocean-bites.appspot.com",
  messagingSenderId: "208394480618",
  appId: "1:208394480618:web:549073ccc9da9143a96093",
  measurementId: "G-M6P6HH8SWM",
};

firebase.initializeApp(firebaseConfig);

firebase.functions();

export const auth = firebase.auth();
export const db = firebase.firestore();
export default firebase;
