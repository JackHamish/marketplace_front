import { api } from "@/services/api";
import { CreateUserData } from "../auth";

export function getMe() {
  return api.get("me");
}

export async function updateUser({
  id,
  data,
}: {
  id: string;
  data: Partial<CreateUserData>;
}) {
  const res = await api.patch(`${id}`, data);

  return res.data;
}
