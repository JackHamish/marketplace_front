import z from "zod";

export const createNftSchema = z.object({
  title: z.string(),

  file: z.instanceof(File, { message: "Image is required" }),
});
