import {LoginPage} from "../pages";
import {useState} from "react";

/**
 * The login controller/presenter
 * @constructor
 */
export default function LoginController() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    function handleLogin() {

    }

    return (
        <
            LoginPage
            setUsername={setUsername}
            setPassword={setPassword}
        />
    )
}