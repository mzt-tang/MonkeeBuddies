import React, {useContext, useEffect, useState} from "react";

import {AuthenticatedUserContext} from "../global";
import {User} from "../models";
import {MyMonkeyPage} from "../pages";


export default function MyMonkeyController() {
    const [userModel, setUserModel] = useState<User | null>(null);
    const [monkeyText, setMonkeyText] = useState<string>("");
    const {user} = useContext<any>(AuthenticatedUserContext);

    useEffect(() => {
        User.getUserById(user.uid, setUserModel);
    }, [user.uid]);

    useEffect(() => {
        resetText();
    }, [userModel])

    function resetText() {
        setMonkeyText(`${userModel?.monkeyName} is looking at you, waiting...`);
    }

    function helpGibbons() {
        setMonkeyText(`Help ${userModel?.monkeyName} support gibbons at the gibbon conservation society!`);
    }

    function pet() {
        setMonkeyText(`${userModel?.monkeyName} is happy to get a pet!`);
    }

    function feedBanana() {
        setMonkeyText(`${userModel?.monkeyName} BANANA!!!`);
    }

    function playWith() {
        setMonkeyText(`${userModel?.monkeyName} gets rowdy and excited!`);
    }

    function giveGift() {
        setMonkeyText(`${userModel?.monkeyName} loves the gift!`);
    }

    return (
        <
            MyMonkeyPage
            helpGibbons={helpGibbons}
            pet={pet}
            feedBanana={feedBanana}
            playWith={playWith}
            giveGift={giveGift}
            monkeyImage={userModel?.monkeyImage}
            monkeyText={monkeyText}
        />
    )
}