import { api } from "@/services/api";

export async function getMe() {
    return await api.get("me");
}
