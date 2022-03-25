// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB8CKepHE5ydMg8avm09m1N7hF0Pz1iLwQ",
  authDomain: "linkedin-clone-efc77.firebaseapp.com",
  projectId: "linkedin-clone-efc77",
  storageBucket: "linkedin-clone-efc77.appspot.com",
  messagingSenderId: "416832640805",
  appId: "1:416832640805:web:80cad2814fb2633724accc",
  measurementId: "G-W44K2DYFXX",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
