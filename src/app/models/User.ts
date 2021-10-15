import {database} from "../database/firebaseConfig";
import {toast} from "../components";

export default class User {

    auth;

    /**
     * Initialise authorisation
     */
    constructor() {
        this.auth = database.auth()
    }

    /**
     * Logs in a user if it exists, otherwise the error is logged
     * @param username The email to log in
     * @param password
     */
    async loginUser(username: string, password: string) {
        try {
            const login = await this.auth.signInWithEmailAndPassword(username, password);
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
            const signup = await this.auth.createUserWithEmailAndPassword(username, password);
            console.log(signup);
            return true;
        } catch (error) {
            // @ts-ignore
            toast(error.message, 4000);
            return false;
        }
    }

    async signoutUser() {
        try {
            await this.auth.signOut();
        } catch (error) {
            // @ts-ignore
            toast(error.message, 4000);
        }
    }
}