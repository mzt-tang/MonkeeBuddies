import React from "react";
import {IonPage} from "@ionic/react";
import { Link } from "react-router-dom";


export default function FriendsController() {
    return (
        <IonPage>
            <h4>
                ID: <Link to={"/app/users/k6f3oPJ4qZWkHyTjQCwUll2Us7u2"}>some id</Link>
            </h4>
        </IonPage>
    )
}