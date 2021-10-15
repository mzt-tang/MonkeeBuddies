import React from "react";
import {IonRouterOutlet} from "@ionic/react";
import {Redirect, Route} from "react-router";
import {DashboardController, LoginController, SignupController} from "../controllers";
import {IonReactRouter} from "@ionic/react-router";

const RootNavigator: React.FC = () => {



    return (
        <IonReactRouter>
            <IonRouterOutlet>
                <Route path="/login" component={LoginController} exact={true}/>
                <Route path="/signup" component={SignupController} exact={true}/>
                <Route path="/home-feed" component={DashboardController} exact={true}/>
                <Route path="/" render={() => <Redirect to="/login"/>} exact={true}/>
            </IonRouterOutlet>
        </IonReactRouter>
    );
};