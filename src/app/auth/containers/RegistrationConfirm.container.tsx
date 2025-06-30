import { InputField } from "@/components/Input/InputField";
import { Button } from "@/components/ui/button";
import { Controller, useForm } from "react-hook-form";

// interface

const RegistrationConfirmContainer = ({
  onBack,
  onNext,
  email,
}: {
  onBack: () => void;
  onNext: () => void;
  email?: string;
}) => {
  const { control } = useForm();
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
              required
              {...field}
              // error={errors.password?.message}
            />
          )}
        />

        <p className="mt-4 text-[#4AA9FF] text-sm">Отправить еще раз</p>
      </form>

      <div className="flex gap-2 mt-4">
        <Button variant="outline" onClick={onBack} className="w-[20%]">
          Назад
        </Button>
        <Button onClick={onNext} className="flex-1">
          Продолжить
        </Button>
      </div>
    </div>
  );
};

export { RegistrationConfirmContainer };
