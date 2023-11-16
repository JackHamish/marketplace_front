import z from "zod";

export const editSchema = z.object({
  name: z.string().min(4).optional().or(z.literal("")),
  email: z.string().email().optional().or(z.literal("")),
});
