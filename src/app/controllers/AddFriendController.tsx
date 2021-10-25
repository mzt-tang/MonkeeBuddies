import React, {useContext, useState} from "react";
import {
    IonBackButton,
    IonButton, IonButtons,
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
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import QRCode from "react-qr-code";

import {AddFriendPage} from "../pages";
import {toast} from "../components";
import {AuthenticatedUserContext} from "../global";


export default function AddFriendController() {
    const [data, setData] = useState<any>("");
    const [present, dismiss] = useIonModal(QRCode);
    const {user} = useContext<any>(AuthenticatedUserContext);

    const scanQR = async () => {

        //const platforms = getPlatforms();
        //const isWeb = (platforms.includes("desktop") || platforms.includes("mobileweb") || platforms.includes("pwa"));

        //if (!isWeb) {

            const dataa = await BarcodeScanner.scan();

            if (dataa) {
                setData(dataa);
            }
        //}
    }

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonBackButton/>
                    </IonButtons>
                    <IonTitle>Generate QR Code</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonGrid>

                    <IonRow>
                        <IonCol size="12">
                            <IonLabel className="ion-text-wrap">
                                <h1>You can generate a QR code to store or share with friends.</h1>
                                <p>You'll see a live preview of the QR Code</p>
                            </IonLabel>
                        </IonCol>
                    </IonRow>

                    <IonRow className="ion-text-center ion-margin-top">
                        <IonCol size="12">
                            <QRCode value={user.uid}/>
                        </IonCol>
                    </IonRow>

                    <IonRow>
                        <IonCol size="12">
                            <IonButton expand="block" onClick={scanQR}></IonButton>
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonContent>
        </IonPage>
    );
};