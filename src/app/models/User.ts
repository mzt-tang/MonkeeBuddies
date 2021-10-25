import {toast} from "../components";
import firebase from "firebase/compat";
import {database} from "../database/firebaseConfig";

/**
 * The user model, handles all authorisation functions.
 */
export default class User {

    private user: firebase.User;
    private static auth: firebase.auth.Auth = database.auth();

    /**
     * Initialise authorisation.
     */
    constructor(user: firebase.User) {
        this.user = user;
    }

    /**
     * Logs in a user if it exists, otherwise show error message.
     * @param username The email to log in.
     * @param password The password.
     */
    static async loginUser(username: string, password: string) {
        try {
            await this.auth.signInWithEmailAndPassword(username, password);
            return true;
        } catch (error) {
            // @ts-ignore
            toast(error.message, 4000);
            return false;
        }
    }

    /**
     * Signs user up if it doesn't exist already, otherwise show error message.
     * @param username The email to register.
     * @param password The password.
     */
    static async signupUser(username: string, password: string) {
        try {
            await this.auth.createUserWithEmailAndPassword(username, password);
            return true;
        } catch (error) {
            // @ts-ignore
            toast(error.message, 4000);
            return false;
        }
    }

    /**
     * Signs out the user.
     */
    static async signoutUser() {
        try {
            await this.auth.signOut();
        } catch (error) {
            // @ts-ignore
            toast(error.message, 4000);
        }
    }

    getUserID(): string {
        return this.user.uid;
    }
}