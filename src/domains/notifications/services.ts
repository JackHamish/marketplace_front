import { api } from "@/services/api";
import { CreateNotificationData } from "./types";

export async function enableNotifications(
  id: string,
  createNotificationData: CreateNotificationData,
) {
  const res = await api.post(
    `users/${id}/enable-notifications`,
    createNotificationData,
  );

  return res.data;
}
