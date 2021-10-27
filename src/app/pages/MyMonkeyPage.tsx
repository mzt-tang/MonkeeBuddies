import React from "react";
import {
    IonButton,
    IonCard,
    IonCol,
    IonContent,
    IonHeader,
    IonImg,
    IonPage,
    IonRow,
    IonTitle,
    IonToolbar
} from "@ionic/react";

/**
 * The dashboard view.
 * @constructor
 */
const MyMonkeyPage: React.FC<{
    resetText: () => void;
    pet: () => void;
    feedBanana: () => void;
    playWith: () => void;
    giveGift: () => void;
    monkeyImage: string | undefined,
    monkeyText: string
}> = props => (
    <IonPage>
        <IonHeader>
            <IonToolbar>
                <IonTitle>My Monkey</IonTitle>
            </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
            <IonImg src={props.monkeyImage}/>
            <IonRow>
                <IonCol className="ion-no-padding" size="12">
                    <IonCard className="ion-no-margin ion-padding ion-text-center" color="light" onClick={props.resetText}>
                        <h2>{props.monkeyText}</h2>
                    </IonCard>
                </IonCol>
            </IonRow>
            <IonRow>
                <IonCol className="ion-no-padding" size="6">
                    <IonButton className="ion-no-margin" expand="full" size="small" color="tertiary" onClick={props.pet}>
                        Pet
                    </IonButton>
                    <IonButton className="ion-no-margin" expand="full" size="small" color="warning" onClick={props.feedBanana}>
                        Feed Banana
                    </IonButton>
                </IonCol>
                <IonCol className="ion-no-padding" size="6">
                    <IonButton className="ion-no-margin" expand="full" size="small" color="success" onClick={props.playWith}>
                        Play With
                    </IonButton>
                    <IonButton className="ion-no-margin" expand="full" size="small" color="danger" onClick={props.giveGift}>
                        Give Gift
                    </IonButton>
                </IonCol>
            </IonRow>
        </IonContent>
    </IonPage>
);

export default MyMonkeyPage;