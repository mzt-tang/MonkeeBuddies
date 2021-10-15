import firebase from "firebase/compat";

import {database} from "../database/firebaseConfig";
import {toast} from "../components";
import {strategy} from "workbox-streams";

export default class User {

    db;

    /**
     * Initialises firebase
     */
    constructor() {
        this.db = database;
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
        } catch (error) {
            // @ts-ignore
            toast(error.message, 4000);
            return false;
        }
    }

    async signupUser(username: string, password: string) {
        try {
            const signup = await firebase.auth().createUserWithEmailAndPassword(username, password);
            console.log(signup);
            return true;
        } catch (error) {
            // @ts-ignore
            toast(error.message, 4000);
            return false;
        }
    }
}