import React, {useEffect, useState} from "react";
import {
    IonBackButton,
    IonButton,
    IonButtons,
    IonCard,
    IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonContent,
    IonGrid,
    IonHeader,
    IonIcon, IonImg, IonItem, IonLabel, IonList, IonListHeader,
    IonPage, IonRow, IonText,
    IonToolbar, useIonViewDidLeave, useIonViewWillEnter
} from "@ionic/react";
import {arrowBackOutline} from "ionicons/icons";
import {useParams} from "react-router-dom";

import {User} from "../models";
import {hideTabs, showTabs} from "../routes";


export default function UserProfileController() {
    const {id} = useParams<{ id: string }>();
    const [user, setUser] = useState<User>();

    useEffect(() => {
        User.getUserById(id, setUser);
    }, [id]);

    //Show and hide the navigation tabs when in id
    useIonViewWillEnter(() => hideTabs());

    useIonViewDidLeave(() => showTabs());

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">

                        <IonBackButton color="dark" icon={arrowBackOutline}/>
                    </IonButtons>
                </IonToolbar>
            </IonHeader>
            <IonContent>

                {/*monkey image*/}
                <IonImg src={user?.monkeyImage}/>

                <IonCard className="ion-padding ion-margin">
                    <IonCardHeader>
                        <IonCardSubtitle>{user?.monkeyName}</IonCardSubtitle>
                        <IonCardTitle>{user?.name}</IonCardTitle>
                    </IonCardHeader>
                    <IonCardContent className="ion-justify-content-center">
                        <IonItem className="ion-justify-content-center">
                            <IonList>
                                <IonListHeader>Activity</IonListHeader>
                            </IonList>
                        </IonItem>
                    </IonCardContent>
                </IonCard>
            </IonContent>
        </IonPage>
    );
}