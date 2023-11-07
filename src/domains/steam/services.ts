import { api } from "@/services/api";
import { SteamUser } from "@/types/steam-user";

export async function loginSteam(data: SteamUser) {
  const res = await api.post("auth/login/steam", {
    ...data,
  });

  return res.data;
}
