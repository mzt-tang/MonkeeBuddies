import React from "react";
import {
    IonBackButton,
    IonButton,
    IonButtons,
    IonContent,
    IonHeader,
    IonIcon,
    IonPage,
    IonTitle,
    IonToolbar
} from "@ionic/react";
import {settingsOutline} from "ionicons/icons";

/**
 * The dashboard view.
 * @constructor
 */
const DashboardPage: React.FC<{

}> = props => (
    <IonPage>
        <IonHeader>
            <IonToolbar>
                <IonButtons slot="end">
                    <IonButton color="dark">
                        <IonIcon icon={settingsOutline} />
                    </IonButton>
                </IonButtons>
                <IonTitle>Dashboard</IonTitle>
            </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
            <h2>Dashboard</h2>
        </IonContent>
    </IonPage>
);

export default DashboardPage;