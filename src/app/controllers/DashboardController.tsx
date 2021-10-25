import React from "react";

import {DashboardPage} from "../pages";
import {User} from "../models";

/**
 * The dashboard controller/presenter.
 * @constructor
 */
export default function DashboardController() {

    async function handleSignout() {
        await User.signoutUser();
    }

    return (
        <DashboardPage handleSignout={handleSignout}/>
    )
}