import { JWT } from "next-auth/jwt";
import { CreateUserData } from ".";
import { api } from "@/services/api";

export async function signUp(data: CreateUserData) {
    return await api.post("auth/register", data);
}

export async function login(email: string, password: string) {
    return await api.post("auth/login", {
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
