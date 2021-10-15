import {IonButton, IonContent, IonHeader, IonInput, IonPage, IonTitle, IonToolbar} from "@ionic/react";
import React from "react";

/**
 * The signup view
 * @constructor
 */
const SignupPage: React.FC<{
    setUsername: React.Dispatch<React.SetStateAction<string>>;
    setPassword: React.Dispatch<React.SetStateAction<string>>;
    handleSignup: () => void;
}> = props => (
    <IonPage>
        <IonHeader>
            <IonToolbar>
                <IonTitle>Signup Page</IonTitle>
            </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
            <IonInput placeholder="Email" onIonChange={(e) => props.setUsername(e.detail.value!)}/>
            <IonInput placeholder="Password" onIonChange={(e) => props.setPassword(e.detail.value!)}/>
            <IonButton color="primary" onClick={props.handleSignup}>Register</IonButton>
            <IonButton color="secondary" routerLink="/login">Go to login</IonButton>
        </IonContent>
    </IonPage>
);

export default SignupPage;