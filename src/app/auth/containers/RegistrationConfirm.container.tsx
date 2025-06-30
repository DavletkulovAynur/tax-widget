import { InputField } from "@/components/Input/InputField";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
// ui
import { Button } from "@/components/ui/button";
// infra
import {
  passwordFormSchema,
  type TPasswordFormValues,
} from "@/app/auth/infra/ConfirmForm.infra";

const RegistrationConfirmContainer = ({
  onBack,
  onNext,
  email,
}: {
  onBack: () => void;
  onNext: () => void;
  email?: string;
}) => {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<TPasswordFormValues>({
    resolver: zodResolver(passwordFormSchema),
  });

  const onSubmit = (data: TPasswordFormValues) => {
    console.log("Отправлено:", data);
    // здесь можно вызвать API, переход на следующий шаг и т.д.
    //TODO: переход на следующий шаг (временно)
    onNext();
  };

  return (
    <div>
      <p className="mb-4 text-[#080D13A6]">
        Мы отправили письмо на почту{" "}
        <span className="font-bold">{email || "example@mail.ru"}</span>.
      </p>

      <p className="mb-4 text-[#080D13A6]">
        Пожалуйста, пройдите по ссылке из письма для подтверждения почты и
        получения пароля. Вы сможете сменить пароль на собственный после
        регистрации
      </p>

      <form>
        <Controller
          name="password"
          control={control}
          render={({ field }) => (
            <InputField
              label="Пароль из письма"
              placeholder="Введите"
              requiredField
              {...field}
              error={errors.password?.message}
            />
          )}
        />

        <p className="mt-4 text-[#4AA9FF] text-sm">Отправить еще раз</p>
      </form>

      <div className="flex gap-2 mt-4">
        <Button variant="outline" onClick={onBack} className="w-[20%]">
          Назад
        </Button>
        <Button onClick={handleSubmit(onSubmit)} className="flex-1">
          Продолжить
        </Button>
      </div>
    </div>
  );
};

export { RegistrationConfirmContainer };
