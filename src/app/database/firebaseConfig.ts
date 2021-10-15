import firebase from "firebase/compat";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

// MonkeeBuddies's Firebase configuration
const firebaseConfig = {

    apiKey: "AIzaSyCNQwE4aOw79spI6DhixJkLa9QubjQ5lSQ",

    authDomain: "monkeebuddies.firebaseapp.com",

    projectId: "monkeebuddies",

    storageBucket: "monkeebuddies.appspot.com",

    messagingSenderId: "648755785064",

    appId: "1:648755785064:web:cf4bf7e74bb5c1fecd7add"

};

// Initialize Firebase
const initialiseFirebase = () => {
    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }else {
        firebase.app(); // if already initialized, use that one
    }
    return firebase;
}

export const database = initialiseFirebase();