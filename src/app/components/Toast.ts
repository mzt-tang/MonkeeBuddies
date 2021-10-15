/**
 * The toast component, shows a message pop up.
 * @param message The message to be displayed
 * @param duration The duration of the message to be displayed.
 */
export default function toast(message: string, duration: number = 2000) {
    const toast = document.createElement('ion-toast');
    toast.message = message;
    toast.duration = duration;

    document.body.appendChild(toast);
    return toast.present();
}