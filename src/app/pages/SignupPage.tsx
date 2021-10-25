import {
    IonButton, IonCol,
    IonContent, IonGrid,
    IonHeader,
    IonInput, IonItem,
    IonLoading,
    IonPage,
    IonRow,
    IonTitle,
    IonToolbar
} from "@ionic/react";
import React from "react";

/**
 * The signup view.
 * @constructor
 */
const SignupPage: React.FC<{
    setUsername: React.Dispatch<React.SetStateAction<string>>;
    setPassword: React.Dispatch<React.SetStateAction<string>>;
    handleSignup: () => void;
    isLoading: boolean,
}> = props => (
    <IonPage>
        <IonHeader>
            <IonToolbar>
                <IonTitle>Signup Page</IonTitle>
            </IonToolbar>
        </IonHeader>
        <IonLoading message="Please wait..." duration={0} isOpen={props.isLoading}/>
        <IonContent className="ion-padding">
            <IonGrid className="ion-margin-horizontal">
                <IonItem>
                    <IonInput placeholder="Email" onIonChange={(e) => props.setUsername(e.detail.value!)}/>
                </IonItem>
                <IonItem>
                    <IonInput type="password" placeholder="Password"
                              onIonChange={(e) => props.setPassword(e.detail.value!)}/>
                </IonItem>
                <IonRow className="ion-text-wrap ion-margin-vertical">
                    <IonCol size="6">
                        <IonButton color="primary" onClick={props.handleSignup}>Register</IonButton>
                    </IonCol>
                    <IonCol size="6">
                        <IonButton color="secondary" routerLink="/login">Go to login</IonButton>
                    </IonCol>
                </IonRow>
            </IonGrid>
        </IonContent>
    </IonPage>
);

export default SignupPage;