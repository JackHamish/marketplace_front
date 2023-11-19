"use client";
import { Button } from "@/components/button";
import { enableNotifications } from "@/domains/notifications";
import { useCurrentUser } from "@/domains/user/hooks";
import { ErrorHelpers } from "@/services/error/helpers";
import useFcmToken from "@/utils/firebase/useFcmToken";
import { toast } from "react-toastify";

export const Notifications = () => {
  const { data: user } = useCurrentUser();
  const { fcmToken, notificationPermissionStatus } = useFcmToken();

  const handleClickEnablePush = async () => {
    try {
      if (!fcmToken) {
        toast.error("Please reload page and try again");
        return;
      }
      await enableNotifications(user.id, {
        deviceType: "Web",
        notificationToken: fcmToken,
      });

      toast.success("Notifications enable successful");
    } catch (error) {
      toast.error(ErrorHelpers.getMessage(error));
    }
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
