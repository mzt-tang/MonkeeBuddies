import {DashboardPage} from "../pages";
import {User} from "../models";

/**
 * The dashboard controller/presenter.
 * @constructor
 */
export default function DashboardController() {

    async function handleSignout() {
        const user = new User();
        await user.signoutUser();
    }

    return (
        <DashboardPage handleSignout={handleSignout}/>
    )
}