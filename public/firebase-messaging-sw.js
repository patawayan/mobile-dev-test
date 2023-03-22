// Scripts for firebase and firebase messaging
importScripts("https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js");

// Initialize the Firebase app in the service worker by passing the generated config
const firebaseConfig = {
  apiKey: "AIzaSyCCf54EpHBu0zo9sMw3LgIcztwxCKqtjbQ",
  authDomain: "mobile-dev-test-a9a29.firebaseapp.com",
  projectId: "mobile-dev-test-a9a29",
  storageBucket: "mobile-dev-test-a9a29.appspot.com",
  messagingSenderId: "177510053627",
  appId: "1:177510053627:web:5b480d2ae6b8c6bae5a25e",
  measurementId: "G-EB9BEB51Q2"
};


firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  console.log("Received background message ", payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});