import { User } from "@/types/user";

export type NftFullData = NftSmallData & {
  createdAt: string;
  updatedAt: string;
  description: string;
  dbRef: string;
};

export type NftSmallData = {
  id: string;
  title: string;
  url: string;
  user: Pick<User, "name">;
};

export type CreateNftData = {
  title: string;
  description: string;
  file: File;
};
