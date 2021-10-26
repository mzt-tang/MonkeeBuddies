import React, {useContext, useState} from "react";

import {SignupPage} from "../pages";
import {toast} from "../components";
import {User} from "../models";
import {AuthenticatedUserContext} from "../global";
import {Redirect} from "react-router";

/**
 * The signup controller/presenter.
 * @constructor
 */
export default function SignupController() {
    const [name, setName] = useState('');
    const [monkeyName, setMonkeyName] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const {user} = useContext<any>(AuthenticatedUserContext);

    if (user !== null) {
        return <Redirect to="/app/dashboard"/>
    }

    async function handleSignup() {
        setIsLoading(true);
        if (username.length === 0 || password.length === 0) {
            toast('Email and password is required');
            setIsLoading(false);
            return;
        }

        const signup = await User.signupUser(username, password, name, monkeyName)
        if (signup) {
            toast('Account successfully created!');
        }

        setIsLoading(false);
    }

    return (
        <
            SignupPage
            setName={setName}
            setMonkeyName={setMonkeyName}
            setUsername={setUsername}
            setPassword={setPassword}
            handleSignup={handleSignup}
            isLoading={isLoading}
        />
    )
}