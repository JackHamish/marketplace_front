import { initializeApp } from "firebase/app";
import { getMessaging } from "firebase/messaging/sw";

// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object
const firebaseApp = initializeApp({
  apiKey: "AIzaSyDyoMZH_jCmVOcmFG8vq9TLr2rO9sEsJHc",
  authDomain: "nft-marketplace-7a526.firebaseapp.com",
  projectId: "nft-marketplace-7a526",
  storageBucket: "nft-marketplace-7a526.appspot.com",
  messagingSenderId: "149855962248",
  appId: "1:149855962248:web:712edf0fd07dae12fa0b3d",
  measurementId: "G-1WBRRJLJKM",
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = getMessaging(firebaseApp);

messaging.onBackgroundMessage((payload) => {
  console.log(
    "[firebase-messaging-sw.js] Received background message ",
    payload,
  );
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: "./logo.png",
  };
  self.registration.showNotification(notificationTitle, notificationOptions);
});
