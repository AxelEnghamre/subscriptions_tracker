import { z } from "zod";

const subscriptionPriceInputSchema = z.object({
  subscriptionID: z.number(),
  pricePerMonth: z.number(),
  createdAt: z.string(),
});

const subscriptionPriceInputDeleteSchema = z.object({
  id: z.string(),
});

const subscriptionPriceInputUpdateSchema = z
  .object({
    id: z.string(),
  })
  .merge(subscriptionPriceInputSchema);

export {
  subscriptionPriceInputSchema,
  subscriptionPriceInputDeleteSchema,
  subscriptionPriceInputUpdateSchema,
};
