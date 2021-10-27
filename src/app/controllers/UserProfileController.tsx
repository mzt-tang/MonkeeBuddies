import React, {useContext, useEffect, useState} from "react";
import {IonItem, IonLabel, useIonViewDidLeave, useIonViewWillEnter} from "@ionic/react";
import {useParams} from "react-router-dom";

import {User} from "../models";
import {hideTabs, showTabs} from "../routes";
import {AuthenticatedUserContext} from "../global";
import {UserProfilePage} from "../pages";


export default function UserProfileController() {
    const {id} = useParams<{ id: string }>();
    const [fUser, setFUser] = useState<User>();
    const [activityList, setActivityList] = useState<string[]>([]);
    const {user} = useContext<any>(AuthenticatedUserContext);

    useEffect(() => {
        User.getUserById(id, setFUser);
    }, [id]);

    useEffect(() => {
        User.getUserActivity(fUser?.userId, setActivityList, false);
    }, [fUser]);

    const activityComponents = () => {
        return activityList.map((activity) => {
            return (
                <IonItem>
                    <IonLabel>
                        <p>{activity}</p>
                    </IonLabel>
                </IonItem>
            );
        });
    }

    async function playWith() {
        await User.doActionToFriend(" played with ", user.uid, fUser?.userId, fUser?.name, fUser?.monkeyName);
    }

    async function groom() {
        await User.doActionToFriend(" groomed ", user.uid, fUser?.userId, fUser?.name, fUser?.monkeyName).then();
    }

    async function giveBanana() {
        await User.doActionToFriend(" gave a banana to ", user.uid, fUser?.userId, fUser?.name, fUser?.monkeyName).then();
    }

    async function flingPoo() {
        await User.doActionToFriend(" flung poo at ", user.uid, fUser?.userId, fUser?.name, fUser?.monkeyName).then();
    }

    //Show and hide the navigation tabs when in id
    useIonViewWillEnter(() => hideTabs());

    useIonViewDidLeave(() => showTabs());

    return (
        <UserProfilePage activityComponents={activityComponents()} playWith={playWith} groom={groom} giveBanana={giveBanana} flingPoo={flingPoo} fUser={fUser} />
    );
}