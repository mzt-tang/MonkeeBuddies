import {IonPage} from "@ionic/react";
import {User} from "../models";


export default function SettingsController() {

    async function handleSignout() {
        await User.signoutUser();
    }

    return (
        <IonPage>

        </IonPage>
    )
}