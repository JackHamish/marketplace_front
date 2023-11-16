import { api } from "@/services/api";
import { CreateNftData, NftData } from "./types";

export async function getAllUserNfts(): Promise<NftData[]> {
  return (await api.get("nft/user")).data;
}

export async function getAllNfts(): Promise<NftData[]> {
  return (await api.get("nft")).data;
}

export async function createNft(
  createNftData: CreateNftData,
): Promise<NftData> {
  const res = await api.post(
    "nft",
    { ...createNftData },
    { headers: { "Content-Type": "multipart/form-data" } },
  );

  return res.data;
}

export async function deleteNft(id: string) {
  return await api.delete(`nft/${id}`);
}
