import firebase from "firebase/app";

import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCes847FWVRY73dj1XKemXTmO9KloMbyOU",
  authDomain: "honyst-db.firebaseapp.com",
  databaseURL: "https://honyst-db.firebaseio.com",
  projectId: "honyst-db",
  storageBucket: "honyst-db.appspot.com",
  messagingSenderId: "787406460861",
  appId: "1:787406460861:web:0129c9b1eaa62f224524d4",
  measurementId: "G-RLLNX69ZV3",
};

// Initialize Firebase
firebase.initializeApp(config);
export const db = firebase.firestore();
