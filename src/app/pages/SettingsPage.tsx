import React from "react";
import {IonBackButton, IonButton, IonButtons, IonContent, IonHeader, IonPage, IonTitle, IonToolbar} from "@ionic/react";
import {arrowBackOutline} from "ionicons/icons";

/**
 * The dashboard view.
 * @constructor
 */
const SettingsPage: React.FC<{
    handleSignout: () => void;
}> = props => (
    <IonPage>
        <IonHeader>
            <IonToolbar>
                <IonButtons slot="start">
                    <IonBackButton color="dark" icon={arrowBackOutline}/>
                </IonButtons>
                <IonTitle>Settings</IonTitle>
            </IonToolbar>
        </IonHeader>

        <IonContent className="ion-padding">
            <h2>Dashboard</h2>
            <IonButton color="primary" onClick={props.handleSignout}>Sign out</IonButton>
        </IonContent>
    </IonPage>
);

export default SettingsPage;