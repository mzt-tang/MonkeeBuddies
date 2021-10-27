import React from "react";
import {
    IonBackButton,
    IonButton,
    IonButtons, IonCol,
    IonContent,
    IonGrid,
    IonHeader, IonInput, IonItem, IonLoading,
    IonPage, IonRow, IonText,
    IonTitle,
    IonToolbar
} from "@ionic/react";
import {arrowBackOutline} from "ionicons/icons";

/**
 * The dashboard view.
 * @constructor
 */
const SettingsPage: React.FC<{
    setName: React.Dispatch<React.SetStateAction<string>>;
    setMonkeyName: React.Dispatch<React.SetStateAction<string>>;
    handleChangeName: () => void;
    handleChangeMonkeyName: () => void;
    handleSignout: () => void;
    isLoading: boolean,
}> = props => (
    <IonPage>
        <IonHeader>
            <IonToolbar>
                <IonButtons slot="start">
                    <IonBackButton color="dark" icon={arrowBackOutline}/>
                </IonButtons>
                <IonTitle>Settings</IonTitle>
            </IonToolbar>
        </IonHeader>
        <IonLoading message="Please wait..." duration={0} isOpen={props.isLoading}/>
        <IonContent className="ion-padding">
            <IonGrid>
                <IonRow>
                    <IonCol size="12">
                        <IonItem>
                            <IonInput placeholder="Change Your Name"
                                      onIonChange={(e) => props.setName(e.detail.value!)}/>
                            <IonButton onClick={props.handleChangeName}>
                                Confirm
                            </IonButton>
                        </IonItem>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol size="12">
                        <IonItem>
                            <IonInput placeholder="Change Your Monkey's Name"
                                      onIonChange={(e) => props.setMonkeyName(e.detail.value!)}/>
                            <IonButton onClick={props.handleChangeMonkeyName}>
                                Confirm
                            </IonButton>
                        </IonItem>
                    </IonCol>
                </IonRow>
                <IonRow className="ion-margin-bottom ion-padding ion-text-center">
                    <IonText>Note: if you change your or your monkey's name you'll be signed out and have to log back in again.</IonText>
                </IonRow>
                <IonRow>
                    <IonCol size="12">
                        <IonButton expand="block" color="primary" onClick={props.handleSignout}>Sign out</IonButton>
                    </IonCol>
                </IonRow>
            </IonGrid>
        </IonContent>
    </IonPage>
);

export default SettingsPage;