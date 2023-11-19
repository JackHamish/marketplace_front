// eslint-disable-next-line no-undef
importScripts("https://www.gstatic.com/firebasejs/8.8.0/firebase-app.js");
// eslint-disable-next-line no-undef
importScripts("https://www.gstatic.com/firebasejs/8.8.0/firebase-messaging.js");

const firebaseConfig = {
  apiKey: "AIzaSyDyoMZH_jCmVOcmFG8vq9TLr2rO9sEsJHc",
  authDomain: "nft-marketplace-7a526.firebaseapp.com",
  projectId: "nft-marketplace-7a526",
  storageBucket: "nft-marketplace-7a526.appspot.com",
  messagingSenderId: "149855962248",
  appId: "1:149855962248:web:712edf0fd07dae12fa0b3d",
  measurementId: "G-1WBRRJLJKM",
};
// eslint-disable-next-line no-undef
firebase.initializeApp(firebaseConfig);
// eslint-disable-next-line no-undef
const messaging = firebase.messaging();

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
