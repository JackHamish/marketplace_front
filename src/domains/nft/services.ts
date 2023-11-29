import { api } from "@/services/api";
import { CreateNftData, NftDetails, Nft } from "./types";

export async function getAllUserNfts(): Promise<Nft[]> {
  return (await api.get("nft/user")).data;
}

export async function getAllNfts(): Promise<Nft[]> {
  return (await api.get("nft")).data;
}

export async function getNftById(id: string): Promise<NftDetails> {
  return (await api.get(`nft/${id}`)).data;
}

export async function createNft(
  createNftData: CreateNftData,
): Promise<NftDetails> {
  const res = await api.post("nft", createNftData, {
    headers: { "Content-Type": "multipart/form-data" },
  });

  return res.data;
}

export async function deleteNft(id: string) {
  return await api.delete(`nft/${id}`);
}
