import { z } from "zod";

export const registrationFormSchema = z.object({
  email: z.string().email("Некорректный e-mail"),
  phone: z
    .string()
    .min(10, "Слишком короткий номер")
    .regex(
      /^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/,
      "Введите телефон в формате +7 (XXX) XXX-XX-XX"
    ),
});

export type TRegistrationFormValues = z.infer<typeof registrationFormSchema>;
