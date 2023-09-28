import { z } from "zod";

const userSubscriptionInputSchema = z.object({
  subscriptionID: z.number(),
  pricePerMonth: z.number(),
  startDate: z.string(),
  renewalDate: z.string(),
  noticePeriodMonths: z.number(),
});

const userSubscriptionInputDeleteSchema = z.object({
  id: z.string(),
});

const userSubscriptionInputUpdateSchema = z
  .object({
    id: z.string(),
  })
  .merge(userSubscriptionInputSchema);

export {
  userSubscriptionInputSchema,
  userSubscriptionInputDeleteSchema,
  userSubscriptionInputUpdateSchema,
};
