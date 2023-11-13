import { User } from "@/types/user";

export type NftData = {
  title: string;
  image: string;
  user: Pick<User, "name">;
};
