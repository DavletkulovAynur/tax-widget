import { z } from "zod";

export const passwordFormSchema = z.object({
  password: z.string({ required_error: "Это поле обязательно для заполнения" }),
});

export type TPasswordFormValues = z.infer<typeof passwordFormSchema>;
