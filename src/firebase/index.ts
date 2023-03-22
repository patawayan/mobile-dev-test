// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

import { getMessaging, getToken, onMessage } from "firebase/messaging";
import { useUserStore } from '@/stores/user';



const firebaseConfig = {
  apiKey: "AIzaSyCCf54EpHBu0zo9sMw3LgIcztwxCKqtjbQ",
  authDomain: "mobile-dev-test-a9a29.firebaseapp.com",
  projectId: "mobile-dev-test-a9a29",
  storageBucket: "mobile-dev-test-a9a29.appspot.com",
  messagingSenderId: "177510053627",
  appId: "1:177510053627:web:5b480d2ae6b8c6bae5a25e",
  measurementId: "G-EB9BEB51Q2"
};


// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);

// const analytics = getAnalytics(firebaseApp);




const messaging = getMessaging();
getToken(messaging, { vapidKey: 'BD_ySxzul17fzBF5sErb1wbGLmvqVab8iqZSZWAXjIOSP-LTEccWjQPa3dC5RWejGx8K8SaKGac-tN5d7C9rTu0' }).then((currentToken) => {
  if (currentToken) {
    console.log(currentToken);
    // this.postFcmToken(currentToken)
  } else {
    // Show permission request UI
    console.log('No registration token available. Request permission to generate one.');
    // ...
  }
}).catch((err) => {
  console.log('An error occurred while retrieving token. ', err);
  // ...
});


onMessage(messaging, (payload) => {
  console.log("Message received. ", payload);
  // ...
});


// var fcmToken = await FCM.getToken()
// console.log('mob', fcmToken)

document.addEventListener('deviceready', () => {
  const userStore = useUserStore();

  // @ts-expect-error
  FCMPlugin.getToken(function(token:string) {
    //this is the FCM token which can be used
    //to send notification to specific device
    console.log(token);
    userStore.setToken(token);
    //FCMPlugin.onNotification( onNotificationCallback(data), successCallback(msg), errorCallback(err) )
    //Here you define your application behaviour based on the notification data.
    // @ts-expect-error
    FCMPlugin.onNotification(function(data:any) {
        console.log(data);
        //data.wasTapped == true means in Background :  Notification was received on device tray and tapped by the user.
        //data.wasTapped == false means in foreground :  Notification was received in foreground. Maybe the user needs to be notified.
        // if (data.wasTapped) {
        //     //Notification was received on device tray and tapped by the user.
        //     alert(JSON.stringify(data));
        // } else {
        //     //Notification was received in foreground. Maybe the user needs to be notified.
        //     alert(JSON.stringify(data));
        // }
    });
  });

}, false)
