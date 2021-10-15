import React from "react";
import {IonButton, IonContent, IonHeader, IonInput, IonPage, IonTitle, IonToolbar} from "@ionic/react";

/**
 * The login view
 * @constructor
 */
const LoginPage: React.FC<{
    setUsername: React.Dispatch<React.SetStateAction<string>>;
    setPassword: React.Dispatch<React.SetStateAction<string>>;
    handleLogin: () => void;
}> = props => (
    <IonPage>
        <IonHeader>
            <IonToolbar>
                <IonTitle>Login Page</IonTitle>
            </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
            <IonInput placeholder="Username" onIonChange={(e) => props.setUsername(e.detail.value!)}/>
            <IonInput placeholder="Password" onIonChange={(e) => props.setPassword(e.detail.value!)}/>
            <IonButton color="primary" onClick={props.handleLogin}>Login</IonButton>
            <IonButton color="secondary" routerLink="/signup">Go to signup</IonButton>
        </IonContent>
    </IonPage>
);

export default LoginPage;