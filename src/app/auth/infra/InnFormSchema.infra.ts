import { z } from "zod";

function validateInn(value: string): boolean {
  if (!/^\d{10}$|^\d{12}$/.test(value)) return false;

  const digits = value.split("").map(Number);

  if (value.length === 10) {
    const coeffs = [2, 4, 10, 3, 5, 9, 4, 6, 8];
    const controlSum = coeffs.reduce(
      (sum, coeff, i) => sum + coeff * digits[i],
      0
    );
    const checkDigit = (controlSum % 11) % 10;
    return checkDigit === digits[9];
  }

  if (value.length === 12) {
    const coeffs1 = [7, 2, 4, 10, 3, 5, 9, 4, 6, 8];
    const coeffs2 = [3, 7, 2, 4, 10, 3, 5, 9, 4, 6, 8];

    const control1 =
      (coeffs1.reduce((sum, coeff, i) => sum + coeff * digits[i], 0) % 11) % 10;
    const control2 =
      (coeffs2.reduce((sum, coeff, i) => sum + coeff * digits[i], 0) % 11) % 10;

    return control1 === digits[10] && control2 === digits[11];
  }

  return false;
}

export const innFormSchema = z.object({
  inn: z
    .string({ required_error: "Это поле обязательно для заполнения" })
    .min(10, "ИНН должен содержать минимум 10 цифр")
    .max(12, "ИНН должен содержать максимум 12 цифр")
    .refine((val) => /^\d+$/.test(val), {
      message: "ИНН должен содержать только цифры",
    })
    .refine((val) => validateInn(val), {
      message: "Неверный ИНН — не проходит контрольную проверку",
    }),
});

export type TInnFormSchema = z.infer<typeof innFormSchema>;
