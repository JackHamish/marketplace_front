import { useEffect, useState } from "react";
import { getToken } from "firebase/messaging";
import { messaging } from "./firebase";

const useFcmToken = () => {
  const [token, setToken] = useState<string>();
  const [notificationPermissionStatus, setNotificationPermissionStatus] =
    useState<NotificationPermission>();

  useEffect(() => {
    const retrieveToken = async () => {
      if (typeof window == "undefined" && !("serviceWorker" in navigator)) {
        return;
      }
      try {
        const permission = await Notification.requestPermission();
        setNotificationPermissionStatus(permission);

        if (permission !== "granted") {
          return;
        }

        const currentToken = await getToken(messaging, {
          vapidKey:
            "BLIF4OvAvhPpYjtPCgsWn44TWjQStvuTA9l3T7jSN2yTtsz4QiJ_DV7jiZdKmY5HF2qU6TFMmWOiIILkC6RQQaU",
        });

        if (currentToken) {
          setToken(currentToken);
        } else {
          console.log(
            "No registration token available. Request permission to generate one.",
          );
        }
      } catch (error) {
        console.log("An error occurred while retrieving token:", error);
      }
    };

    retrieveToken();
  }, []);

  return { fcmToken: token, notificationPermissionStatus };
};

export default useFcmToken;
