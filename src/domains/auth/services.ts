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

export async function refresh(refreshToken: string) {
    return await api.post("auth/refresh", {
        refreshToken,
    });
}
