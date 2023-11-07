import { SteamUser } from "./steam-user";

export type User = {
  id: string;
  email: string;
  name: string;
  steamUser?: SteamUser;
};
