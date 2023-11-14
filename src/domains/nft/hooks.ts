import { useMutation, useQuery, } from "@tanstack/react-query";
import { createNft, deleteNft, getAllUserNfts } from "./services";
import { CreateNftData } from ".";

export const useUserNfts = () =>
  useQuery({
    queryKey: ["nfts-user"],
    queryFn: getAllUserNfts,
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
    mutationFn: (id: string) => deleteNft(id)
  });
};
