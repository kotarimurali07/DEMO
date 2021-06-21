import firebase from "firebase";
import "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDocAAF-MJ8bNTXbpDHY3r_fW8oPwLdxjw",
  authDomain: "slack-28304.firebaseapp.com",
  projectId: "slack-28304",
  storageBucket: "slack-28304.appspot.com",
  messagingSenderId: "583976248013",
  appId: "1:583976248013:web:940c8de43414f376137f84",
};
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };