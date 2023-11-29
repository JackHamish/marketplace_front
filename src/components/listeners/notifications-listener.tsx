"use client";

import { firebaseApp } from "@/utils/firebase/firebase";
import useFcmToken from "@/utils/firebase/useFcmToken";
import { getMessaging, onMessage } from "firebase/messaging";
import { useEffect } from "react";
import { toast } from "react-toastify";

export const NotificationsListener = () => {
  const { fcmToken, notificationPermissionStatus } = useFcmToken();

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    if (typeof window !== "undefined" && "serviceWorker" in navigator) {
      const messaging = getMessaging(firebaseApp);
      const unsubscribe = onMessage(messaging, (payload) => {
        toast.info(payload.notification?.body);
      });
      return () => {
        unsubscribe();
      };
    }
  }, []);

  return null;
};
