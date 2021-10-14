import React from "react";
import {IonReactRouter} from "@ionic/react-router";
import {IonIcon, IonLabel, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs} from "@ionic/react";
import {home} from "ionicons/icons";
import {Route} from "react-router";

const AppBottomTabNavigation: React.FC = () => {



    return (
        <IonReactRouter>
            <IonTabs>
                <IonRouterOutlet>
                    <Route path="/home"/>
                </IonRouterOutlet>
                <IonTabBar slot="bottom">
                    <IonTabButton tab="test" href="/home">
                        <IonIcon icon={home} />
                        <IonLabel>Home</IonLabel>
                    </IonTabButton>
                </IonTabBar>
            </IonTabs>
        </IonReactRouter>
    );
};

export default AppBottomTabNavigation;