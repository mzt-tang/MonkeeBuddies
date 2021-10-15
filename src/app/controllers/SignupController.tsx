import {SignupPage} from "../pages";
import {useState} from "react";
import {toast} from "../components";
import {User} from "../models";

/**
 * The signup controller/presenter
 * @constructor
 */
export default function SignupController() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState<boolean>(false);

    async function handleSignup() {
        setIsLoading(true);
        if (username.length === 0 || password.length === 0) {
            toast('Email and password is required');
            return;
        }

        const user = new User();
        const signup = await user.signupUser(username, password)
        if (signup) {
            toast('Account successfully created!');
        }

        setIsLoading(false);
    }

    return (
        <
            SignupPage
            setUsername={setUsername}
            setPassword={setPassword}
            handleSignup={handleSignup}
            isLoading={isLoading}
        />
    )
}