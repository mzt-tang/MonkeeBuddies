import React, {useContext, useEffect, useState} from "react";

import {DashboardPage} from "../pages";
import {User} from "../models";
import {IonCard, IonCardHeader, IonCardTitle} from "@ionic/react";
import {AuthenticatedUserContext} from "../global";
import {toast} from "../components";

/**
 * The dashboard controller/presenter.
 * @constructor
 */
export default function DashboardController() {
    const [activityList, setActivityList] = useState<string[]>([]);
    const {user} = useContext<any>(AuthenticatedUserContext);

    useEffect(() => {
        User.getUserActivity(user.uid, setActivityList);
    }, [user.uid]);

    useEffect(() => {
        toast(activityList[0]);
    }, [activityList]);

    const activityComponents = () => {


        return activityList.map((activity) => {
            return (
                <IonCard key={activity}>
                    <IonCardHeader>
                        <IonCardTitle>{activity}</IonCardTitle>
                    </IonCardHeader>
                </IonCard>
            );
        });
    }

    return (
        <DashboardPage activityComponents={activityComponents()}/>
    )
}