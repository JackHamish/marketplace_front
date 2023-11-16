import { api } from "@/services/api";
import { createNotificationData } from "./types";

export async function enableNotifications(
  id: string,
  createNotificationData: createNotificationData,
) {
  const res = await api.post(
    `users/${id}/enable-notifications`,
    createNotificationData,
  );

  return res.data;
}
