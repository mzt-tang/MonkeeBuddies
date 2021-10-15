import {IonButton, IonContent, IonHeader, IonInput, IonLoading, IonPage, IonTitle, IonToolbar} from "@ionic/react";
import React from "react";

/**
 * The signup view
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
        <IonLoading message="Please wait..." duration={0} isOpen={props.isLoading} />
        <IonContent className="ion-padding">
            <IonInput placeholder="Email" onIonChange={(e) => props.setUsername(e.detail.value!)}/>
            <IonInput type="password" placeholder="Password" onIonChange={(e) => props.setPassword(e.detail.value!)}/>
            <IonButton color="primary" onClick={props.handleSignup}>Register</IonButton>
            <IonButton color="secondary" routerLink="/login">Go to login</IonButton>
        </IonContent>
    </IonPage>
);

export default SignupPage;