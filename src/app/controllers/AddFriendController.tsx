import React, {useContext, useRef, useState} from "react";
import {
    getPlatforms,
    useIonModal,
} from "@ionic/react";
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

import {AddFriendPage} from "../pages";
import {QRModal, toast} from "../components";
import {AuthenticatedUserContext} from "../global";


export default function AddFriendController() {
    const {user} = useContext<any>(AuthenticatedUserContext);
    const [ QRData, setQRData ] = useState<any>(false);
    const pageRef = useRef();

    async function scanQR() {

        const platforms = getPlatforms();
        const isWeb = (platforms.includes("desktop") || platforms.includes("mobileweb") || platforms.includes("pwa"));

        if (!isWeb) {

            const data = await BarcodeScanner.scan();

            if (data) {
                setQRData(data);
                console.log("not web");
                toast("not web");
                console.log(data);
                console.log(data.text);
                dismissWebModal();
            }
        } else {
            presentWebModal({
                presentingElement: pageRef.current
            });
        }
    }

    function handleScan(data: any) {
        if (data) {
            setQRData(data);
            dismissWebModal();
        }
    }

    function handleError(err: any) {
        toast(err)
    }

    function handleDismiss() {
        dismissWebModal();
    }

    const [ presentWebModal, dismissWebModal ] = useIonModal(QRModal, {
        handleDismiss: handleDismiss,
        handleScan: handleScan,
        handleError: handleError
    });

    return (
        <AddFriendPage scanQr={scanQR} userId={user.uid}/>
    );
};