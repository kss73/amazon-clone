import firebase from "firebase";


const firebaseApp = firebase.initializeApp({
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  apiKey: "AIzaSyDBymou9ujCzcnemkzoBmIt2HgsFwjLW1I",
  authDomain: "clone-ecd2d.firebaseapp.com",
  databaseURL: "https://clone-ecd2d.firebaseio.com",
  projectId: "clone-ecd2d",
  storageBucket: "clone-ecd2d.appspot.com",
  messagingSenderId: "664484124721",
  appId: "1:664484124721:web:9a37da73ac9e7e7a36dd10",
  measurementId: "G-317JEFDVPZ"

});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth};
