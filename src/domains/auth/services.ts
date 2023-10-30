import { JWT } from "next-auth/jwt";
import { CreateUserData } from ".";
import { api } from "@/services/api";

export function signUp(data: CreateUserData) {
  return api.post("auth/register", data);
}

export function login(email: string, password: string) {
  return api.post("auth/login", {
    email,
    password,
  });
}

export async function refresh(token: JWT): Promise<JWT> {
  const res = await api.post("auth/refresh", {
    refreshToken: token.refreshToken,
  });

  return {
    ...token,
    ...res.data,
  };
}
