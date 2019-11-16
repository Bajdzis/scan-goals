import * as firebase from 'firebase';
import '../app/firebaseApp';

const firebaseMessaging = firebase.messaging();
firebaseMessaging.usePublicVapidKey('BC88T1xIIjuuZD0o9I_Ru0LmWcNyfx6TUv11J6mumQ5KLSFStrgZeMLHmHWl2QdIRRKyV0pZLGTp2_6EpEsFJTU');

export const requestPermission = async () => {


    return Notification.requestPermission().then((permission) => {
        if (permission === 'granted') {
            console.log('Notification permission granted.');
            firebaseMessaging.getToken().then((currentToken) => {
                if (currentToken) {
                    console.log({currentToken});
                } else {
                    console.log({currentToken:null});
                }
            }).catch((err) => {
                console.log({currentToken:null, err});
            });
        } else {
            console.log('Unable to get permission to notify.');
        }

        // Callback fired if Instance ID token is updated.
        firebaseMessaging.onTokenRefresh(() => {
            firebaseMessaging.getToken().then((refreshedToken) => {
                console.log('Token refreshed.', refreshedToken);
            });
        });
    });
};
