import React from "react";
import {
    IonBackButton, IonButton,
    IonButtons,
    IonCard, IonCardContent,
    IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol,
    IonContent,
    IonHeader,
    IonImg, IonItem, IonList, IonListHeader,
    IonPage, IonRow,
    IonToolbar
} from "@ionic/react";
import {arrowBackOutline} from "ionicons/icons";

import {User} from "../models";


const UserProfilePage: React.FC<{
    activityComponents: JSX.Element[]
    playWith: () => void;
    groom: () => void;
    giveBanana: () => void;
    flingPoo: () => void;
    fUser: User | undefined,
}> = props => (
    <IonPage>
        <IonHeader>
            <IonToolbar>
                <IonButtons slot="start">

                    <IonBackButton color="dark" icon={arrowBackOutline}/>
                </IonButtons>
            </IonToolbar>
        </IonHeader>
        <IonContent>
            <IonImg src={props.fUser?.monkeyImage}/>

            <IonCard className="ion-padding ion-margin">
                <IonCardHeader>
                    <IonCardSubtitle>{props.fUser?.monkeyName}</IonCardSubtitle>
                    <IonCardTitle>{props.fUser?.name}</IonCardTitle>
                </IonCardHeader>

                <IonCardContent className="ion-justify-content-center">
                    <IonRow>
                        <IonCol className="ion-no-padding" size="6">
                            <IonButton className="ion-no-margin" expand="full" size="small" color="tertiary" onClick={props.playWith}>
                                Play With
                            </IonButton>
                            <IonButton className="ion-no-margin" expand="full" size="small" color="success" onClick={props.groom}>
                                Groom
                            </IonButton>
                        </IonCol>
                        <IonCol className="ion-no-padding" size="6">
                            <IonButton className="ion-no-margin" expand="full" size="small" color="warning" onClick={props.giveBanana}>
                                Give Banana
                            </IonButton>
                            <IonButton className="ion-no-margin" expand="full" size="small" color="danger" onClick={props.flingPoo}>
                                Fling Poo
                            </IonButton>
                        </IonCol>
                    </IonRow>
                    <IonItem className="ion-justify-content-center">
                        <IonList lines="inset">
                            <IonListHeader>
                                <h2>
                                    Recent Activities
                                </h2>
                            </IonListHeader>
                            {props.activityComponents}
                        </IonList>
                    </IonItem>
                </IonCardContent>
            </IonCard>
        </IonContent>
    </IonPage>
)

export default UserProfilePage;