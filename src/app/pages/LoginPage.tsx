import React from "react";
import {
    IonButton, IonCol,
    IonContent,
    IonGrid,
    IonHeader,
    IonInput, IonItem,
    IonLoading,
    IonPage, IonRow,
    IonTitle,
    IonToolbar
} from "@ionic/react";

/**
 * The login view.
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
        <IonLoading message="Please wait..." duration={0} isOpen={props.isLoading}/>
        <IonContent className="ion-padding">
            <IonGrid className="ion-margin-horizontal">
                <IonItem>
                    <IonInput placeholder="Username (Email)" onIonChange={(e) => props.setUsername(e.detail.value!)}/>
                </IonItem>
                <IonItem>
                    <IonInput type="password" placeholder="Password"
                              onIonChange={(e) => props.setPassword(e.detail.value!)}/>
                </IonItem>
                <IonRow className="ion-text-wrap ion-margin-vertical">
                    <IonCol size="6">
                        <IonButton color="primary" onClick={props.handleLogin}>Login</IonButton>
                    </IonCol>
                    <IonCol size="6">
                        <IonButton color="secondary" routerLink="/signup">Go to signup</IonButton>
                    </IonCol>
                </IonRow>
            </IonGrid>
        </IonContent>
    </IonPage>
);

export default LoginPage;