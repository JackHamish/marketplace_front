import { User } from "@/types/user";

export type NftDetails = Nft & {
  createdAt: string;
  updatedAt: string;
  description: string;
  dbRef: string;
};

export type Nft = {
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
