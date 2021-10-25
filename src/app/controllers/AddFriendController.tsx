import React, {useContext, useRef, useState} from "react";
import {
    getPlatforms,
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
import {QRModal, toast} from "../components";
import {AuthenticatedUserContext} from "../global";


export default function AddFriendController() {
    const {user} = useContext<any>(AuthenticatedUserContext);
    const pageRef = useRef();

    const [ QRData, setQRData ] = useState<any>(false);

    const handleScan = (data: any) => {

        if (data) {
            setQRData(data);
            console.log("webmodal")
            console.log(data.text);
            console.log(data);
            dismissWebModal();
        }
    }

    const handleError = (err: any) => {

        console.error(err)
    }

    const scanQR = async () => {

        const platforms = getPlatforms();
        const isWeb = (platforms.includes("desktop") || platforms.includes("mobileweb") || platforms.includes("pwa"));

        if (!isWeb) {

            const data = await BarcodeScanner.scan();

            if (data) {
                setQRData(data);
                console.log("not web")
                console.log(data);
                console.log(data.text)
                dismissWebModal();
            }
        } else {

            presentWebModal({

                presentingElement: pageRef.current
            });
        }
    }

    const [ presentWebModal, dismissWebModal ] = useIonModal(QRModal, {

        dismiss: () => dismissWebModal(),
        scan: handleScan,
        error: handleError
    });

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