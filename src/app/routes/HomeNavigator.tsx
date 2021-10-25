import React, {useContext} from "react";
import {IonIcon, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs} from "@ionic/react";
import {Redirect, Route} from "react-router";
import {homeOutline, pawOutline, peopleOutline} from "ionicons/icons";

import {AddFriendController, DashboardController} from "../controllers";
import {AuthenticatedUserContext} from "../global";

import './floating-tab-bar.css';

/**
 * The Home navigator.
 * @constructor
 */
const HomeNavigator: React.FC = () => {
    const {user} = useContext<any>(AuthenticatedUserContext);

    if (user === null) {
        return <Redirect exact to="/login"/>
    }


    return (
        <IonTabs>
            <IonRouterOutlet>
                <Route path="/app/dashboard" component={DashboardController} exact={true}/>
                <Route path="/app/my-monkey" component={AddFriendController} exact={true}/>
                <Route path="/app/friends" component={AddFriendController} exact={true}/>
            </IonRouterOutlet>
            <IonTabBar slot="bottom">
                <IonTabButton tab="dashboard" href="/app/dashboard">
                    <IonIcon icon={homeOutline}/>
                </IonTabButton>
                <IonTabButton tab="my-monkey" href="/app/my-monkey">
                    <IonIcon icon={pawOutline}/>
                </IonTabButton>
                <IonTabButton tab="friends" href="/app/friends">
                    <IonIcon icon={peopleOutline}/>
                </IonTabButton>
            </IonTabBar>
        </IonTabs>

    );
};

export default HomeNavigator;