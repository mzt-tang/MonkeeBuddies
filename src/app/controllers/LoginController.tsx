import {LoginPage} from "../pages";
import {useEffect, useState} from "react";

/**
 * The login controller/presenter
 * @constructor
 */
export default function LoginController() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    useEffect(()=> {
        console.log(username);
        console.log(password)
    }, [username, password]);

    return (
        <
            LoginPage
            setUsername={setUsername}
            setPassword={setPassword}
        />
    )
}