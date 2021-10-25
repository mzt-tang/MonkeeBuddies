import React, {useState} from "react";
import {
    IonButton,
    IonCol,
    IonContent,
    IonGrid,
    IonHeader,
    IonItem,
    IonLabel,
    IonPage,
    IonRow,
    IonTextarea, IonTitle,
    IonToolbar, useIonModal
} from "@ionic/react";
import QRCode from "react-qr-code";

import {AddFriendPage} from "../pages";
import {toast} from "../components";


export default function AddFriendController() {
    const [data, setData] = useState("");
    const [present, dismiss] = useIonModal(QRCode)

    const handleAdd = async () => {

        if (data === "") {
            toast("Please enter some data to store.", 4000);
        } else {

            toast("QR Code stored successfully.", 4000);
            setData("");
        }
    }

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Generate QR Code</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large">Generate QR Code</IonTitle>
                    </IonToolbar>
                </IonHeader>

                <IonGrid>

                    <IonRow>
                        <IonCol size="12">
                            <IonItem lines="none">
                                <IonLabel className="ion-text-wrap">
                                    <h1>You can generate a QR code to store or share with friends.</h1>
                                    <p>You'll see a live preview of the QR Code</p>
                                </IonLabel>
                            </IonItem>
                        </IonCol>
                    </IonRow>

                    <IonRow>
                        <IonCol size="12">
                            <IonItem>
                                <IonLabel position="stacked">Data to store</IonLabel>
                                <IonTextarea rows={3} placeholder="Enter a URL or secret information" inputMode="text" inputmode="text" value={ data } onIonChange={ e => setData(e.detail.value!) } />
                            </IonItem>
                        </IonCol>
                    </IonRow>

                    <IonRow className="ion-text-center ion-margin-top">
                        <IonCol size="12">
                            <QRCode value={ "data" } />
                        </IonCol>
                    </IonRow>

                    <IonRow className="ion-text-center ion-justify-content-center">
                        <IonCol size="10">
                            <IonItem lines="none">
                                <IonLabel className="ion-text-wrap ion-text-center">
                                    <p>When you're ready, you can store the generated QR Code</p>
                                </IonLabel>
                            </IonItem>
                        </IonCol>
                    </IonRow>

                    <IonRow>
                        <IonCol size="12">
                            <IonButton expand="block" onClick={ handleAdd }></IonButton>
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonContent>
        </IonPage>
    );
};