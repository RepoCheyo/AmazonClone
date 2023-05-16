// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBVPf7X6X6rBOsa98_9OL-CrrqNgwaQ6zI",
  authDomain: "clone-7c49e.firebaseapp.com",
  projectId: "clone-7c49e",
  storageBucket: "clone-7c49e.appspot.com",
  messagingSenderId: "885752718623",
  appId: "1:885752718623:web:7a72159917a6d39519bc2a",
  measurementId: "G-Z27EBNGZ83"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };