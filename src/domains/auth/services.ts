import { CreateUserData } from ".";
import { api } from "@/services/api";

export async function signup(data: CreateUserData) {
    return await api.post("auth/sign-up", data);
}

export async function login(email: string, password: string) {
    return await api.post("auth/login", {
        email,
        password,
    });
}

export async function refresh(refreshToken: string) {
    return await api.post("auth/refresh", {
        refreshToken,
    });
}
