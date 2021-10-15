import {LoginPage} from "../pages";
import {useState} from "react";

import {User} from "../models";
import {toast} from "../components";

/**
 * The login controller/presenter
 * @constructor
 */
export default function LoginController() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    async function handleLogin() {
        if (username.length === 0 || password.length === 0) {
            toast('Email and password is required');
            return false;
        }

        const user = new User();
        const login = await user.loginUser(username, password)
        if (login) {
            toast('Successful login!')
            return true;
        }

        return false;
    }

    return (
        <
            LoginPage
            setUsername={setUsername}
            setPassword={setPassword}
            handleLogin={handleLogin}
        />
    )
}