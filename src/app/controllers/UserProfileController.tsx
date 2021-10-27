import React, {useContext, useEffect, useState} from "react";
import {IonItem, IonLabel, useIonViewDidLeave, useIonViewWillEnter} from "@ionic/react";
import {useParams} from "react-router-dom";

import {User} from "../models";
import {hideTabs, showTabs} from "../routes";
import {AuthenticatedUserContext} from "../global";
import {UserProfilePage} from "../pages";


export default function UserProfileController() {
    const {id} = useParams<{ id: string }>();
    const [fUser, setFUser] = useState<User | null>(null);
    const [thisUser, setThisUser] = useState<User | null>(null);
    const [activityList, setActivityList] = useState<string[]>([]);
    const {user} = useContext<any>(AuthenticatedUserContext);

    useEffect(() => {
        User.getUserById(id, setFUser);
        User.getUserById(user.uid, setThisUser);
    }, []);

    useEffect(() => {
        User.getUserActivity(fUser?.userId, setActivityList);
    }, [fUser?.userId]);

    useEffect(() => {
        return () => {
            setThisUser(null);
            setFUser(null);
        }
    }, []);

    const activityComponents = () => {
        return activityList.map((activity) => {
            return (
                <IonItem key={activity}>
                    <IonLabel>
                        <p>{activity}</p>
                    </IonLabel>
                </IonItem>
            );
        });
    }

    async function playWith() {
        await User.doActionToFriend(" played with ", thisUser, fUser);
    }

    async function groom() {
        await User.doActionToFriend(" groomed ", thisUser, fUser);
    }

    async function giveBanana() {
        await User.doActionToFriend(" gave a banana to ", thisUser, fUser);
    }

    async function flingPoo() {
        await User.doActionToFriend(" flung poo at ", thisUser, fUser);
    }

    //Show and hide the navigation tabs when in id
    useIonViewWillEnter(() => hideTabs());

    useIonViewDidLeave(() => showTabs());

    return (
        <UserProfilePage activityComponents={activityComponents()} playWith={playWith} groom={groom} giveBanana={giveBanana} flingPoo={flingPoo} fUser={fUser} />
    );
}