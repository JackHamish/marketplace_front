import { JWT } from "next-auth/jwt";
import { User } from "./user";
import { SteamUser } from "./steam-user";

declare module "next-auth" {
  interface Session {
    user: User | SteamUser;
    jwtExpiresIn: number;
    accessToken: string;
    refreshToken: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    user: User | SteamUser;
    jwtExpiresIn: number;
    accessToken: string;
    refreshToken: string;
  }
}
