import {database} from "../database/firebaseConfig";
import {toast} from "../components";

/**
 * The user model, handles all authorisation functions.
 */
export default class User {

    auth;

    /**
     * Initialise authorisation.
     */
    constructor() {
        this.auth = database.auth()
    }

    /**
     * Logs in a user if it exists, otherwise show error message.
     * @param username The email to log in.
     * @param password The password.
     */
    async loginUser(username: string, password: string) {
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
    async signupUser(username: string, password: string) {
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
    async signoutUser() {
        try {
            await this.auth.signOut();
        } catch (error) {
            // @ts-ignore
            toast(error.message, 4000);
        }
    }
}