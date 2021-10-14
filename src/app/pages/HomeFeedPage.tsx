import React from "react";
import {IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar} from "@ionic/react";


const HomeFeedPage: React.FC = () => {

    return(
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Home Feed Page</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                <h2>Home Feed Page</h2>
                <IonButton color="primary">Test Button</IonButton>
            </IonContent>
        </IonPage>
    );
};

export default HomeFeedPage;