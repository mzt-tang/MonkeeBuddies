import {LoginPage} from "../pages";
import {useState} from "react";

import {User} from "../models";
import {toast} from "../components";

/**
 * The login controller/presenter
 * @constructor
 */
export default function LoginController() {
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('')
    const [isLoading, setIsLoading] = useState<boolean>(false);

    async function handleLogin() {
        setIsLoading(true);
        if (username.length === 0 || password.length === 0) {
            toast('Email and password is required');
            return;
        }

        const user = new User();
        const login = await user.loginUser(username, password)
        if (login) {
            toast('Successful login!')
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