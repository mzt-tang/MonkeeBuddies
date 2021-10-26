import React, {useContext, useEffect, useState} from "react";
import {
    IonBackButton, IonButton,
    IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol,
    IonContent,
    IonGrid,
    IonHeader, IonImg, IonItem, IonList,
    IonPage,
    IonRow, IonSlide, IonSlides,
    IonTitle,
    IonToolbar
} from "@ionic/react";
import {Link} from "react-router-dom";
import {arrowBackOutline} from "ionicons/icons";
import {User} from "../models";
import {AuthenticatedUserContext} from "../global";


export default function FriendsController() {
    const [friendsList, setFriendsList] = useState<User[]>([]);
    const {user} = useContext<any>(AuthenticatedUserContext);

    useEffect(() => {
        User.getUserFriends(user.uid, setFriendsList);
    }, [user.uid]);

    const friendsListComponents = () => {
        return friendsList.map((friend) => {
            return (
                <IonCard routerLink={"/app/users/k6f3oPJ4qZWkHyTjQCwUll2Us7u2"}>
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
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonBackButton color="dark" icon={arrowBackOutline}/>
                    </IonButtons>
                    <IonTitle>My QR Code</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonGrid>
                    <IonRow className="ion-padding-horizontal ion-padding-top">
                        <IonCol size="12">
                            <IonButton expand="block" routerLink="/app/friends/add">Add Monkey Friend</IonButton>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <h3 className="ion-padding-horizontal ion-margin-bottom">Last Visited Friends</h3>
                    </IonRow>
                    <IonRow className="ion-padding-horizontal ion-justify-content-center">
                        <IonList>
                            {friendsListComponents()}
                        </IonList>
                    </IonRow>
                </IonGrid>
            </IonContent>
        </IonPage>

    )
}