import { z } from "zod";

export const registrationFormSchema = z.object({
  email: z
    .string({ required_error: "Это поле обязательно для заполнения" })
    .email("Некорректный e-mail"),
  phone: z
    .string({ required_error: "Это поле обязательно для заполнения" })
    .regex(
      /^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/,
      "Неверный формат номера телефона"
    )
    .min(18, "Слишком короткий номер"),
});

export type TRegistrationFormValues = z.infer<typeof registrationFormSchema>;
