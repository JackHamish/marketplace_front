import z from "zod";

export const createNftSchema = z.object({
  title: z.string(),
  description: z.string().max(179, { message: "Description is too long" }),
  file: z.instanceof(File, { message: "Bad file" }),
});
