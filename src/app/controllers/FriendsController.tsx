import React, {useContext, useEffect, useState} from "react";
import {IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonImg} from "@ionic/react";
import {User} from "../models";
import {AuthenticatedUserContext} from "../global";
import {FriendsPage} from "../pages";


export default function FriendsController() {
    const [friendsList, setFriendsList] = useState<User[]>([]);
    const {user} = useContext<any>(AuthenticatedUserContext);

    useEffect(() => {
        User.getUserFriends(user.uid, setFriendsList);
    }, [user.uid]);

    const friendsListComponents = () => {
        return friendsList.map((friend) => {
            return (
                <IonCard key={friend.userId} routerLink={`/app/users/${friend.userId}`}>
                    <IonImg src={friend.monkeyImage}/>
                    <IonCardHeader>
                        <IonCardSubtitle>{friend.monkeyName}</IonCardSubtitle>
                        <IonCardTitle>{friend.name}</IonCardTitle>
                    </IonCardHeader>
                </IonCard>
            );
        })
    }

    return (
        <FriendsPage friendsListComponents={friendsListComponents()}/>
    );
}