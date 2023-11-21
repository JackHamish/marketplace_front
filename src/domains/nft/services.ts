import { api } from "@/services/api";
import { CreateNftData, NftFullData, NftSmallData } from "./types";

export async function getAllUserNfts(): Promise<NftSmallData[]> {
  return (await api.get("nft/user")).data;
}

export async function getAllNfts(): Promise<NftSmallData[]> {
  return (await api.get("nft")).data;
}

export async function getNftById(id: string): Promise<NftFullData> {
  return (await api.get(`nft/${id}`)).data;
}

export async function createNft(
  createNftData: CreateNftData,
): Promise<NftFullData> {
  const res = await api.post("nft", createNftData, {
    headers: { "Content-Type": "multipart/form-data" },
  });

  return res.data;
}

export async function deleteNft(id: string) {
  return await api.delete(`nft/${id}`);
}
