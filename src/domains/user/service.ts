import { api } from "@/services/api";
import { CreateUserData } from "../auth";
import { UpdateUserData } from "./types";

export async function getMe() {
  return (await api.get("auth/me")).data;
}

export async function updateUser({
  id,
  data,
}: {
  id: string;
  data: UpdateUserData;
}) {
  const res = await api.patch(`${id}`, data);

  return res.data;
}
