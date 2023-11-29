import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
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
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["create-nft"],
    mutationFn: (data: CreateNftData) => createNft(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["nfts-user"] });
    },
  });
};

export const useDeleteNft = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["delete-nft"],
    mutationFn: (id: string) => deleteNft(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["nfts-user"] });
    },
  });
};
