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
        const user = new User();
        const login = await user.loginUser(username, password)
        if (!login) {
            toast('Error: Wrong username or password!')
        }
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