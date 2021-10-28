import React, {useContext, useRef} from "react";
import {
    getPlatforms,
    useIonModal, useIonViewDidLeave, useIonViewWillEnter,
} from "@ionic/react";
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

import {AddFriendPage} from "../pages";
import {QrWebScanModal, toast} from "../components";
import {AuthenticatedUserContext} from "../global";
import {User} from "../models";
import {hideTabs, showTabs} from "../routes";


export default function AddFriendController() {
    const {user} = useContext<any>(AuthenticatedUserContext);
    const pageRef = useRef();

    async function scanQR() {

        const platforms = getPlatforms();
        const isWeb = (platforms.includes("desktop") || platforms.includes("mobileweb") || platforms.includes("pwa"));

        if (!isWeb) {

            const data = await BarcodeScanner.scan();

            if (data) {
                await User.addFriend(user.uid, data.text);
                dismissWebModal();
            }
        } else {
            presentWebModal({
                presentingElement: pageRef.current
            });
        }
    }

    async function handleScan(data: any) {
        if (data) {
            await User.addFriend(user.uid, data.text);
            dismissWebModal();
        }
    }

    function handleError(err: any) {
        toast(err)
    }

    function handleDismiss() {
        dismissWebModal();
    }

    const [ presentWebModal, dismissWebModal ] = useIonModal(QrWebScanModal, {
        handleDismiss: handleDismiss,
        handleScan: handleScan,
        handleError: handleError
    });


    //Show and hide the navigation tabs when in id
    useIonViewWillEnter(() => hideTabs());

    useIonViewDidLeave(() => showTabs())

    return (
        <AddFriendPage scanQr={scanQR} userId={user.uid}/>
    );
};