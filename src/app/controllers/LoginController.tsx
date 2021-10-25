import React, {useContext, useState} from "react";

import {LoginPage} from "../pages";
import {toast} from "../components";
import {User} from "../models";
import {Redirect} from "react-router";
import {AuthenticatedUserContext} from "../global";

/**
 * The login controller/presenter.
 * @constructor
 */
export default function LoginController() {
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('')
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const {user} = useContext<any>(AuthenticatedUserContext);

    if (user !== null) {
        return <Redirect to="/app/dashboard"/>
    }

    async function handleLogin() {
        setIsLoading(true);
        if (username.length === 0 || password.length === 0) {
            toast('Email and password is required');
            return;
        }

        const login = await User.loginUser(username, password)
        if (login) {
            toast('Welcome back!')
        }

        setIsLoading(false);
    }

    return (
        <
            LoginPage
            setUsername={setUsername}
            setPassword={setPassword}
            handleLogin={handleLogin}
            isLoading={isLoading}
        />
    )
}