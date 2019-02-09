import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Initialize Firebase
const config = {
  apiKey: "AIzaSyC3RgNiFk7MEG2r1QpdR87avSSVSPLOOBA",
  authDomain: "rochesterbeermap.firebaseapp.com",
  databaseURL: "https://rochesterbeermap.firebaseio.com",
  projectId: "rochesterbeermap",
  storageBucket: "rochesterbeermap.appspot.com",
  messagingSenderId: "91322029899"
};

firebase.initializeApp(config);

export const db = firebase.firestore();

export default firebase;
