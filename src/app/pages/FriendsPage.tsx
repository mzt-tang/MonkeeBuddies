import React from "react";
import {
    IonBackButton,
    IonButton,
    IonButtons, IonCol,
    IonContent,
    IonGrid,
    IonHeader, IonList,
    IonPage, IonRow,
    IonTitle,
    IonToolbar
} from "@ionic/react";
import {arrowBackOutline} from "ionicons/icons";

const FriendsPage: React.FC<{
    friendsListComponents: JSX.Element[],
}> = props => (
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
                        {props.friendsListComponents}
                    </IonList>
                </IonRow>
            </IonGrid>
        </IonContent>
    </IonPage>
);

export default FriendsPage;