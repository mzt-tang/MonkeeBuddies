import React, {useContext, useEffect, useState} from "react";
import {IonLoading, IonRouterOutlet} from "@ionic/react";
import {Redirect, Route} from "react-router";
import {IonReactRouter} from "@ionic/react-router";

import {DashboardController, LoginController, SignupController} from "../controllers";
import {AuthenticatedUserContext} from "../global";
import {database} from "../database/firebaseConfig";

const auth = database.auth();

const RootNavigator: React.FC = () => {
    const {user, setUser} = useContext<any>(AuthenticatedUserContext);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // onAuthStateChanged returns an unsubscriber
        const unsubscribeAuth = auth.onAuthStateChanged(async authenticatedUser => {
            try {
                await (authenticatedUser ? setUser(authenticatedUser) : setUser(null));
                setIsLoading(false)
            } catch (error) {
                console.log(error);
            }
        });

        // unsubscribe auth listener on unmount
        return unsubscribeAuth;
    }, [setUser]);

    return (
        <IonReactRouter>
            <IonLoading message="Please wait..." duration={0} isOpen={isLoading} />
            <IonRouterOutlet>
                <Route path="/" render={() => {
                    return user ? <Redirect to="/dashboard"/> : <Redirect to="/login"/>
                }} exact={false}/>
                <Route path="/login" component={LoginController} exact={true}/>
                <Route path="/signup" component={SignupController} exact={true}/>
                <Route path="/dashboard" component={DashboardController} exact={true}/>
            </IonRouterOutlet>
        </IonReactRouter>
    );
};

export default RootNavigator;