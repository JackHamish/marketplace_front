"use client";
import { Button } from "@/components/button";
import { enableNotifications } from "@/domains/notifications";
import { useCurrentUser } from "@/domains/user/hooks";
import useFcmToken from "@/utils/firebase/useFcmToken";

const Notifications = () => {
  const { data: user } = useCurrentUser();
  const { fcmToken, notificationPermissionStatus } = useFcmToken();

  const handleClickEnablePush = async () => {
    try {
      await enableNotifications(user.id, {
        deviceType: "Web",
        notificationToken: fcmToken,
      });
    } catch (error) {}
  };

  return (
    <div className="mt-10 flex gap-5">
      <Button onClick={handleClickEnablePush} fill>
        Enable Notifications
      </Button>
      <Button fill={false}>Disable Notifications</Button>
    </div>
  );
};

export default Notifications;
