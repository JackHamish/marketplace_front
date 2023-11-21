import { useMutation, useQuery } from "@tanstack/react-query";
import { createNft, deleteNft, getAllUserNfts, getNftById } from "./services";
import { CreateNftData } from ".";

export const useUserNfts = () =>
  useQuery({
    queryKey: ["nfts-user"],
    queryFn: getAllUserNfts,
  });

export const useCurrentNft = (id: string) =>
  useQuery({
    queryKey: ["nfts-current"],
    queryFn: () => getNftById(id),
  });

export const useAddNft = () => {
  return useMutation({
    mutationKey: ["create-nft"],
    mutationFn: (data: CreateNftData) => createNft(data),
  });
};

export const useDeleteNft = () => {
  return useMutation({
    mutationKey: ["delete-nft"],
    mutationFn: (id: string) => deleteNft(id),
  });
};
