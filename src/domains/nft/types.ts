import { User } from "@/types/user";

export type NftData = {
  id: string;
  createdAt: string;
  updatedAt: string;
  title: string;
  url: string;
  dbRef: string;
  userId: string;
  user: Pick<User, "name">;
};

export type CreateNftData = {
  title: string;
  file: File;
};
