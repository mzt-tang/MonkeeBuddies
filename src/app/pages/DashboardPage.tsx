import React from "react";
import {IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar} from "@ionic/react";

/**
 * The home feed view
 * @constructor
 */
const DashboardPage: React.FC<{
    handleSignout: () => void;
}> = props => (
    <IonPage>
        <IonHeader>
            <IonToolbar>
                <IonTitle>Dashboard</IonTitle>
            </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
            <h2>Dashboard</h2>
            <IonButton color="primary" onClick={props.handleSignout}>Sign out</IonButton>
        </IonContent>
    </IonPage>
);

export default DashboardPage;