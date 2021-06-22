import firebase from "firebase";
import "firebase/app";
import "firebase/auth";

const firebaseConfig = {

};
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
