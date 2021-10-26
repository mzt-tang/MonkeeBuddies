import React, {useContext} from "react";
import {IonIcon, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs} from "@ionic/react";
import {Redirect, Route} from "react-router-dom";
import {homeOutline, pawOutline, peopleOutline} from "ionicons/icons";

import {AddFriendController, DashboardController, FriendsController, UserProfileController} from "../controllers";
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
                <Route exact path="/app/dashboard" component={DashboardController}/>
                <Route exact path="/app/my-monkey" component={AddFriendController}/>
                <Route exact path="/app/friends" component={FriendsController}/>
                <Route exact path="/app/friends/add" component={AddFriendController}/>
                <Route path="/app/users/:id" component={UserProfileController}/>
                <Route exact path="/app/settings"/>
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

export function hideTabs() {
    const tabsEl = document.querySelector('ion-tab-bar');
    if (tabsEl) {
        tabsEl.hidden = true;
    }
}

export function showTabs() {
    const tabsEl = document.querySelector('ion-tab-bar');
    if (tabsEl) {
        tabsEl.hidden = false;
    }
}