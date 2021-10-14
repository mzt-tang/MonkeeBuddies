import {SignupPage} from "../pages";
import {useState} from "react";

/**
 * The signup controller/presenter
 * @constructor
 */
export default function SignupController() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return (
        <
            SignupPage
            setUsername={setUsername}
            setPassword={setPassword}
        />
    )
}