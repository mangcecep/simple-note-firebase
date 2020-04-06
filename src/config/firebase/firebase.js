import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

const firebaseConfig = {
    apiKey: "AIzaSyAAXbW9d3fDQTJtRznLeRQ3Fs35IDFrj84",
    authDomain: "simple-notes-firebase-4118d.firebaseapp.com",
    databaseURL: "https://simple-notes-firebase-4118d.firebaseio.com",
    projectId: "simple-notes-firebase-4118d",
    storageBucket: "simple-notes-firebase-4118d.appspot.com",
    messagingSenderId: "915053139363",
    appId: "1:915053139363:web:e0047a9aa572b796d93616",
    measurementId: "G-EHG55V0TTL"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export const database = firebase.database();

  export default firebase;