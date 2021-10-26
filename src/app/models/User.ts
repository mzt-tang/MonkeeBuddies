import {toast} from "../components";
import firebase from "firebase/compat";
import {database} from "../database/firebaseConfig";

/**
 * The user model, handles all authorisation functions.
 */
export default class User {

    private static auth: firebase.auth.Auth = database.auth();
    readonly name: string;
    readonly monkeyName: string;
    readonly monkeyImage: string;
    readonly activity: string[];

    constructor(name: string, monkeyName: string, monkeyImage: string, activity: string[]) {
        this.name = name;
        this.monkeyName = monkeyName;
        this.monkeyImage = monkeyImage;
        this.activity = activity;
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
    static async signupUser(username: string, password: string, name: string, monkeyName: string) {
        try {
            await this.auth.createUserWithEmailAndPassword(username, password).then(async cred => {

                // Get a random monkey image
                const doc = await database.firestore().collection('monkeys').doc('images').get();
                const monkeyList = doc.data()?.list;
                const randomMonkey: string = monkeyList[Math.floor(Math.random() * monkeyList.length)];

                return database.firestore().collection('users').doc(cred.user?.uid).set({
                    name: name,
                    monkeyName: monkeyName,
                    monkeyImage: randomMonkey,
                    friends: [],
                    activity: [],
                });
            });
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
            setUser(new User(userInfo?.name, userInfo?.monkeyName, userInfo?.monkeyImage, userInfo?.activity));
        });
    }

    static getUserFriends(userId: string, setFriendsList: React.Dispatch<React.SetStateAction<User[]>>) {
        database.firestore()
            .collection('users')
            .doc(userId).onSnapshot(async snapshot => {
            const friends = await snapshot.data()?.friends;

            const friendList = [];

            for (let i = 0; i < friends.length; i++) {
                const friend = await database.firestore().collection('users').doc(friends[i]).get();
                const friendData = friend.data();
                friendList.push(new User(friendData?.name, friendData?.monkeyName, friendData?.monkeyImage, friendData?.activity));
            }
            setFriendsList(friendList);
        });
    }

    static addFriend(userId: string, friendId: string) {
        return database.firestore()
            .collection('users')
            .doc(friendId).get().then(async snapshot => {
                if (snapshot.exists) {
                    await database.firestore().collection('users').doc(userId).update({
                        friends: firebase.firestore.FieldValue.arrayRemove(friendId)
                    })
                    await database.firestore().collection('users').doc(userId).update({
                        friends: firebase.firestore.FieldValue.arrayUnion(friendId)
                    })
                    toast("Friend successfully added!");
                } else {
                    toast("User doesn't exist! Please scan a valid QR code!");
                }
        });
    }

}