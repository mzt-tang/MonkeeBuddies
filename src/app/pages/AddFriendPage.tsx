import React from "react";
import {
    IonBackButton, IonButton,
    IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonCol,
    IonContent,
    IonGrid,
    IonHeader,
    IonPage,
    IonRow,
    IonTitle,
    IonToolbar
} from "@ionic/react";
import {arrowBackOutline} from "ionicons/icons";
import QRCode from "react-qr-code";

/**
 * The visit your monkey friends view.
 */
const AddFriendPage: React.FC<{
    scanQr: () => void;
    userId: string,
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
                <IonRow className="ion-text-center ion-padding">
                    <IonCol size="12">
                        <IonCard color="light">
                            <IonCardHeader>
                                <IonCardTitle>
                                    Scan my QR code to add me as a friend
                                </IonCardTitle>
                            </IonCardHeader>
                            <IonCardContent>

                                <QRCode value={props.userId}/>
                            </IonCardContent>
                        </IonCard>
                    </IonCol>
                </IonRow>

                <IonRow className="ion-margin">
                    <IonCol size="12">
                        <IonButton expand="block" onClick={props.scanQr}>Scan QR Code</IonButton>
                    </IonCol>
                </IonRow>
            </IonGrid>
        </IonContent>
    </IonPage>
);

export default AddFriendPage;