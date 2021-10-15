import React from "react";
import {IonButton, IonContent, IonHeader, IonInput, IonLoading, IonPage, IonTitle, IonToolbar} from "@ionic/react";

/**
 * The login view
 * @constructor
 */
const LoginPage: React.FC<{
    setUsername: React.Dispatch<React.SetStateAction<string>>;
    setPassword: React.Dispatch<React.SetStateAction<string>>;
    handleLogin: () => void;
    isLoading: boolean,
}> = props => (
    <IonPage>
        <IonHeader>
            <IonToolbar>
                <IonTitle>Login Page</IonTitle>
            </IonToolbar>
        </IonHeader>
        <IonLoading message="Please wait..." duration={0} isOpen={props.isLoading} />
        <IonContent className="ion-padding">
            <IonInput placeholder="Username (Email)" onIonChange={(e) => props.setUsername(e.detail.value!)}/>
            <IonInput type="password" placeholder="Password" onIonChange={(e) => props.setPassword(e.detail.value!)}/>
            <IonButton color="primary" onClick={props.handleLogin}>Login</IonButton>
            <IonButton color="secondary" routerLink="/signup">Go to signup</IonButton>
        </IonContent>
    </IonPage>
);

export default LoginPage;