import { useMutation, useQuery } from "@tanstack/react-query";
import { getMe, updateUser } from "..";
import { CreateUserData } from "@/domains/auth";
import { useSession } from "next-auth/react";

export const useCurrentUser = () =>
  useQuery({
    queryKey: ["current-user"],
    queryFn: getMe,
  });

export const useUpdateUser = () => {
  const { update } = useSession();

  return useMutation({
    mutationKey: ["update-user"],
    mutationFn: ({ id, data }: { id: string; data: Partial<CreateUserData> }) =>
      updateUser({ id, data }),
    onSuccess: (data) => {
      update({
        id: data.id,
        name: data.name,
        email: data.email,
      });
    },
  });
};
