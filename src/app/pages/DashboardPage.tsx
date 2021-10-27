import React from "react";
import {
    IonButton,
    IonButtons, IonContent, IonGrid,
    IonHeader,
    IonIcon, IonList,
    IonPage, IonRow,
    IonTitle,
    IonToolbar
} from "@ionic/react";
import {settingsOutline} from "ionicons/icons";

/**
 * The dashboard view.
 * @constructor
 */
const DashboardPage: React.FC<{
    activityComponents: JSX.Element[]
}> = props => (
    <IonPage>
        <IonHeader>
            <IonToolbar>
                <IonButtons slot="end">
                    <IonButton color="dark" routerLink="/app/settings">
                        <IonIcon icon={settingsOutline} />
                    </IonButton>
                </IonButtons>
                <IonTitle>Dashboard</IonTitle>
            </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
            <IonGrid>
                <IonRow>
                    <h3 className="ion-padding-horizontal ion-margin-bottom">Recent Activities</h3>
                </IonRow>
                <IonRow className="ion-padding-horizontal ion-justify-content-center">
                    <IonList>
                        {props.activityComponents}
                    </IonList>
                </IonRow>
            </IonGrid>
        </IonContent>
    </IonPage>
);

export default DashboardPage;