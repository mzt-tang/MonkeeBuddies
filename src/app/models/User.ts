import {toast} from "../components";
import firebase from "firebase/compat";
import {database} from "../database/firebaseConfig";

/**
 * The user model, handles all authorisation functions.
 */
export default class User {

    private static auth: firebase.auth.Auth = database.auth();
    public name: string;
    public monkeyName: string;
    readonly monkeyImage: string;
    readonly posts: string[];

    constructor(name: string, monkeyName: string, monkeyImage: string, posts: string[]) {
        this.name = name;
        this.monkeyName = monkeyName;
        this.monkeyImage = monkeyImage;
        this.posts = posts;
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

    static getUserById(id: string, setUser: React.Dispatch<React.SetStateAction<User | undefined>>) {
        database.firestore()
            .collection('users')
            .doc(id).get().then(async snapshot => {
            const userInfo = await snapshot.data();
            setUser(new User(userInfo?.name, userInfo?.monkeyName, userInfo?.monkeyImage, userInfo?.posts));
        });
    }

}