import {toast} from "../components";
import firebase from "firebase/compat";
import {database} from "../database/firebaseConfig";

/**
 * The user model, handles all authorisation functions.
 */
export default class User {

    private static auth: firebase.auth.Auth = database.auth();
    private static username: string;
    private static monkeyName: string;

    readonly userId: string;
    readonly name: string;
    readonly monkeyName: string;
    readonly monkeyImage: string;

    constructor(userId: string, name: string, monkeyName: string, monkeyImage: string) {
        this.userId = userId;
        this.name = name;
        this.monkeyName = monkeyName;
        this.monkeyImage = monkeyImage;
    }

    /**
     * Logs in a user if it exists, otherwise show error message.
     * @param username The email to log in.
     * @param password The password.
     */
    static async loginUser(username: string, password: string) {
        try {
            await this.auth.signInWithEmailAndPassword(username, password).then(async cred => {
                const doc = await database.firestore()
                    .collection('users')
                    .doc(cred.user?.uid).get();
                this.username = doc.data()?.name;
                this.monkeyName = doc.data()?.monkeyName;
            });
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
                this.username = name;
                this.username = monkeyName;

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
            this.username = '';
            this.monkeyName = '';
            await this.auth.signOut();
        } catch (error) {
            // @ts-ignore
            toast(error.message, 4000);
        }
    }

    /**
     * Returns a user and their information given the user id.
     * @param id .
     * @param setUser The return function (a set hook)
     */
    static getUserById(id: string, setUser: React.Dispatch<React.SetStateAction<User | undefined>>) {
        database.firestore()
            .collection('users')
            .doc(id).get().then(async snapshot => {
            const userInfo = await snapshot.data();
            setUser(new User(id, userInfo?.name, userInfo?.monkeyName, userInfo?.monkeyImage));
        });
    }

    /**
     * Returns a friend list given a user id.
     * @param userId .
     * @param setFriendsList The return function (a set hook).
     */
    static getUserFriends(userId: string, setFriendsList: React.Dispatch<React.SetStateAction<User[]>>) {
        database.firestore()
            .collection('users')
            .doc(userId).onSnapshot(async snapshot => {
            const friends = await snapshot.data()?.friends;

            const friendList = [];

            for (let i = 0; i < friends.length; i++) {
                const friend = await database.firestore().collection('users').doc(friends[i]).get();
                const friendData = friend.data();
                friendList.push(new User(friends[i], friendData?.name, friendData?.monkeyName, friendData?.monkeyImage));
            }
            setFriendsList(friendList);
        });
    }

    /**
     * Adds a friend to the user's firestore friend list
     * @param userId .
     * @param friendId .
     */
    static addFriend(userId: string, friendId: string) {
        return database.firestore()
            .collection('users')
            .doc(friendId).get().then(async snapshot => {
                if (snapshot.exists) {
                    // add the user to the friend's friend list
                    await database.firestore().collection('users').doc(friendId).update({
                        friends: firebase.firestore.FieldValue.arrayRemove(userId)
                    });
                    await database.firestore().collection('users').doc(friendId).update({
                        friends: firebase.firestore.FieldValue.arrayUnion(userId)
                    });

                    // add the friend to the user's friend list
                    await database.firestore().collection('users').doc(userId).update({
                        friends: firebase.firestore.FieldValue.arrayRemove(friendId)
                    });
                    await database.firestore().collection('users').doc(userId).update({
                        friends: firebase.firestore.FieldValue.arrayUnion(friendId)
                    });
                    toast("Friend successfully added!");
                } else {
                    toast("User doesn't exist! Please scan a valid QR code!");
                }
        });
    }

    /**
     * Method for the user to action to a friend and update it within firestore.
     * @param activity The action to that's going to be done to the friend.
     * @param userId .
     * @param friendId .
     * @param friendName .
     * @param friendMonkeyName .
     */
    static doActionToFriend(activity: string, userId: string, friendId: string | undefined, friendName: string | undefined, friendMonkeyName: string | undefined) {
        const friendActivityStatement = this.username + "'s " + this.monkeyName + activity + friendMonkeyName + "!";
        const userActivityStatement = this.monkeyName + activity + friendName + "'s " + friendMonkeyName + "!";

        return database.firestore()
            .collection('users')
            .doc(friendId).get().then(async snapshot => {
                if (snapshot.exists) {
                    // Add the activity to the user
                    await database.firestore().collection('users').doc(userId).update({
                        activity: firebase.firestore.FieldValue.arrayRemove(userActivityStatement)
                    });
                    await database.firestore().collection('users').doc(userId).update({
                        activity: firebase.firestore.FieldValue.arrayUnion(userActivityStatement)
                    });

                    // Add the activity to the friend
                    await database.firestore().collection('users').doc(friendId).update({
                        activity: firebase.firestore.FieldValue.arrayUnion(friendActivityStatement)
                    });
                    await database.firestore().collection('users').doc(friendId).update({
                        activity: firebase.firestore.FieldValue.arrayUnion(friendActivityStatement)
                    });

                    toast(userActivityStatement, 3000);
                } else {
                    toast("Friend doesn't exist!");
                }
            });
    }

    /**
     * Returns an activity list given a user id.
     * @param userId .
     */
    static getUserActivity(userId: string | undefined, setActivityList: React.Dispatch<React.SetStateAction<string[]>>, user: boolean) {
        if (user && userId !== undefined) {
            database.firestore()
                .collection('users')
                .doc(userId).onSnapshot(async snapshot => {
                const activities = await snapshot.data()?.activity;

                const activityList = [];

                for (let i = 0; i < activities.length; i++) {
                    activityList.push(activities[i]);
                }
                setActivityList(activityList);
            });
        } else if (userId !== undefined) {
            database.firestore()
                .collection('users')
                .doc(userId).get().then(async snapshot => {
                const activities = await snapshot.data()?.activity;

                const activityList = [];

                for (let i = 0; i < activities.length; i++) {
                    activityList.push(activities[i]);
                }
                setActivityList(activityList);
            });
        } else {
        }
    }
}