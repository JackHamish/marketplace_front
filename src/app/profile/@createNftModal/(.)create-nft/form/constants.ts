import z from "zod";

export const MAX_DESCRIPTION_HEIGHT = 192;

export const createNftSchema = z.object({
  title: z.string(),
  description: z.string().max(179, { message: "Description is too long" }),
  file: z.instanceof(File, { message: "Bad file" }),
});
