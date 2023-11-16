import z from "zod";

export const editSchema = z
  .object({
    password: z.string().min(8).optional().or(z.literal("")),
    confirmPassword: z.string().min(8).optional().or(z.literal("")),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });
