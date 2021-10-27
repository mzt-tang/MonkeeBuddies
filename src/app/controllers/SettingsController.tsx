import {User} from "../models";
import {SettingsPage} from "../pages";


export default function SettingsController() {

    async function handleSignout() {
        await User.signoutUser();
    }

    return (
        <SettingsPage handleSignout={handleSignout}/>
    )
}