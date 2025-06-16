import { z } from "zod";

export const registrationFormSchema = z.object({
  email: z
    .string({ required_error: "Введите e-mail" })
    .email("Некорректный e-mail"),
  phone: z.string().min(10, "Слишком короткий номер"),
});

export type TRegistrationFormValues = z.infer<typeof registrationFormSchema>;
