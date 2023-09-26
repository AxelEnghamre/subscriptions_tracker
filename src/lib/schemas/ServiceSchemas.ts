import { z } from "zod";

const serviceInputSchema = z.object({
  name: z.string().min(2, "För kort"),
  websiteUrl: z.string().url("Ogiltig URL"),
  category: z.string(),
});

const serviceInputUpdateSchema = z
  .object({
    id: z.string(),
  })
  .merge(serviceInputSchema);

const serviceInputDeleteSchema = z.object({
  id: z.string(),
});

export {
  serviceInputSchema,
  serviceInputUpdateSchema,
  serviceInputDeleteSchema,
};
