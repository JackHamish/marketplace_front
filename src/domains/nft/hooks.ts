import { useQuery } from "@tanstack/react-query";
import { getAllUserNfts } from "./services";

export const useUserNfts = () =>
  useQuery({
    queryKey: ["nfts-user"],
    queryFn: getAllUserNfts,
  });
