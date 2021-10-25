import React, {useContext, useEffect, useState} from "react";
import {IonLoading} from "@ionic/react";
import {Redirect, Route, Switch} from "react-router";
import {IonReactRouter} from "@ionic/react-router";

import {LoginController, SignupController} from "../controllers";
import {AuthenticatedUserContext} from "../global";
import {database} from "../database/firebaseConfig";
import {HomeNavigator} from "./index";

const auth = database.auth();

/**
 * The root navigation stack, handles the login/sign in/sign out and splits the authentication and app stacks.
 * @constructor .
 */
const RootNavigator: React.FC = () => {
    const {setUser} = useContext<any>(AuthenticatedUserContext);
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


    // The app stack
    return (
        <IonReactRouter>
            <IonLoading message="Please wait..." duration={0} isOpen={isLoading}/>
            <Switch>
                <Route path="/login" component={LoginController} exact={true}/>
                <Route path="/signup" component={SignupController} exact={true}/>
                <Route path="/app" component={HomeNavigator}/>
                <Redirect from="/" to="/app/dashboard" exact={true}/>
            </Switch>
        </IonReactRouter>
    );

};

export default RootNavigator;