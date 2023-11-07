import z from "zod";

export const editSchema = z
  .object({
    name: z.string().min(4).optional().or(z.literal("")),
    email: z.string().email().optional().or(z.literal("")),
    password: z.string().min(8).optional().or(z.literal("")),
    confirmPassword: z.string().min(8).optional().or(z.literal("")),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });
