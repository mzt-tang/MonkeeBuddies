import { IonButton, IonButtons, IonCol, IonContent, IonGrid, IonHeader, IonPage, IonRow, IonTitle, IonToolbar } from "@ionic/react";
import QrReader from "react-qr-reader";
import React from "react";



const QRModal: React.FC<{
    dismiss: () => void;
    handleScan: () => void;
    handleError: () => void;
}> = props => (
    <IonPage>
        <IonHeader>
            <IonToolbar>
                <IonTitle>Scan Friend QR</IonTitle>
                <IonButtons slot="end">
                    <IonButton onClick={ props.dismiss }>Close</IonButton>
                </IonButtons>
            </IonToolbar>
        </IonHeader>

        <IonContent>
            <IonGrid className="ion-padding-top ion-margin-top">
                <IonRow className="ion-justify-content-center ion-text-center animate__animated animate__lightSpeedInLeft animate__faster">
                    <IonCol size="12">

                        <QrReader
                            delay={ 500 }
                            onError={ props.handleError }
                            onScan={ props.handleScan }
                            style={{ width: "100%", height: "100%" }}
                        />
                    </IonCol>
                </IonRow>
            </IonGrid>
        </IonContent>
    </IonPage>
);

export default QRModal;