import React, {useContext, useState} from "react";

import {User} from "../models";
import {SettingsPage} from "../pages";
import {AuthenticatedUserContext} from "../global";


export default function SettingsController() {
    const [name, setName] = useState<string>('');
    const [monkeyName, setMonkeyName] = useState<string>('');
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const {user} = useContext<any>(AuthenticatedUserContext);

    async function handleSignout() {
        setIsLoading(true);
        await User.signoutUser();
        setIsLoading(false);
    }

    async function handleChangeName() {
        setIsLoading(true);
        await User.changeName(user.uid, name);
        await User.signoutUser();
        setIsLoading(false);
    }

    async function handleChangeMonkeyName() {
        setIsLoading(true);
        await User.changeMonkeyName(user.uid, monkeyName);
        await User.signoutUser();
        setIsLoading(false);
    }

    return (
        <
            SettingsPage
            setName={setName}
            setMonkeyName={setMonkeyName}
            handleChangeName={handleChangeName}
            handleChangeMonkeyName={handleChangeMonkeyName}
            handleSignout={handleSignout}
            isLoading={isLoading}
        />
    )
}