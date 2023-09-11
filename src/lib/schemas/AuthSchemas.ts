import { z } from "zod";

const signInSchema = z.object({
  email: z.string().email("Fel format"),
  password: z.string().min(5, "För kort"),
});

const signUpSchema = z
  .object({
    name: z.string().min(2, "För kort").max(50, "För långt"),
    email: z.string().email("Fel format"),
    password: z.string().min(5, "För kort"),
    confirmPassword: z.string().min(5, "För kort"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Lösenorden matchar inte",
    path: ["confirmPassword"], // path of error
  });

export { signInSchema, signUpSchema };
