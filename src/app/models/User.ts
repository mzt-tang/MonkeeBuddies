import firebase from "firebase/compat";
import {database} from "../database/firebaseConfig";

export default class User {

    firebase;

    /**
     * Initialises firebase
     */
    constructor() {
        this.firebase = database;
    }

    /**
     * Logs in a user if it exists, otherwise the error is logged
     * @param username The email to log in
     * @param password
     */
    async loginUser(username: string, password: string) {
        try {
            const login = await firebase.auth().signInWithEmailAndPassword(username, password);
            console.log(login);
            return true;
        } catch (e) {
            console.log(e);
            return false;
        }
    }
}