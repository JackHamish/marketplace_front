import { api } from "@/services/api";

export function getMe() {
  return api.get("me");
}
