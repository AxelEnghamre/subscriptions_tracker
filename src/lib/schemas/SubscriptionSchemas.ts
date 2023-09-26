import { z } from "zod";

const subscriptionInputSchema = z.object({
  serviceID: z.number(),
  plan: z.string().min(2, "För kort"),
});

const subscriptionInputDeleteSchema = z.object({
  id: z.string(),
});

const subscriptionInputUpdateSchema = z
  .object({
    id: z.string(),
  })
  .merge(subscriptionInputSchema);

export {
  subscriptionInputSchema,
  subscriptionInputDeleteSchema,
  subscriptionInputUpdateSchema,
};
