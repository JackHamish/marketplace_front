import { api } from "@/services/api";
import { UpdateUserData } from "./types";

export async function getMe() {
  return (await api.get("auth/me")).data;
}

export async function resetPasswordReq(email: string) {
  return (await api.post("users/reset-password-request", { email })).data;
}
export async function resetPassword(newPassword: string, token: string) {
  return (await api.post("users/reset-password", { token, newPassword })).data;
}

export async function updateUser({
  id,
  data,
}: {
  id: string;
  data: UpdateUserData;
}) {
  const res = await api.patch(`users/${id}`, data);

  return res.data;
}
