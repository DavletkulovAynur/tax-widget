import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link } from "@tanstack/react-router";
// api
import { useRegistrationMutate } from "../api/Registration.mutate";
// ui
import { Button } from "@/components/ui/button";
import { InputField } from "@/components/Input/InputField";
// assets
import logo from "@/assets/logo.svg";
// infra
import { registrationFormSchema } from "@/app/auth/infra/RegistrationForm.infra";
import type { TRegistrationFormValues } from "@/app/auth/infra/RegistrationForm.infra";

interface RegistrationFormContainerProps {
  onSuccess?: (data: TRegistrationFormValues) => void;
  initialData?: TRegistrationFormValues | null;
}

const RegistrationFormContainer = ({
  onSuccess,
  initialData,
}: RegistrationFormContainerProps) => {
  const {
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm<TRegistrationFormValues>({
    resolver: zodResolver(registrationFormSchema),
    defaultValues: initialData || undefined,
  });

  // api
  const { mutate: registrationMutate, isPending } = useRegistrationMutate(
    () => {
      // Получаем текущие значения формы для передачи в onSuccess
      const formValues = watch();
      onSuccess?.(formValues);
    }
  );

  const onSubmit = (data: TRegistrationFormValues) => {
    registrationMutate(data);
  };

  return (
    <div className="flex-1 pt-14 px-12 pb-0 flex flex-col justify-between">
      <div className="flex flex-col items-center">
        {/* Логотип */}
        <img src={logo} alt="logo" className="h-8 mb-12" />
        {/* Заголовок */}
        <h1 className="text-[36px] font-bold text-[#258AFF] mb-8">
          Регистрация
        </h1>
        {/* Форма */}
        <form
          className="flex flex-col gap-5 max-w-[400px] w-full mx-auto"
          onSubmit={handleSubmit(onSubmit)}
        >
          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <InputField
                label="Ваш e-mail"
                placeholder="Введите"
                required
                {...field}
                error={errors.email?.message}
              />
            )}
          />
          <Controller
            name="phone"
            control={control}
            render={({ field }) => (
              <InputField
                mask="+7 (000) 000-00-00"
                label="Номер телефона"
                type="tel"
                placeholder="+7 (___) ___-__-__"
                required
                {...field}
                error={errors.phone?.message}
              />
            )}
          />
          <Button
            type="submit"
            disabled={isPending}
            className="mt-2 font-medium text-base"
          >
            Продолжить
          </Button>
        </form>
        {/* Текст соглашения */}
        <div className="text-[13px] text-[#6B7683] mt-6 max-w-[400px]">
          Нажимая на кнопку <b>Продолжить</b> вы соглашаетесь, что расчет налога
          будет производиться только на основании данных, успешно загруженных в
          сервис. Регистрируясь, вы принимаете{" "}
          <a href="#" className="text-[#258AFF] underline">
            условия лицензионного договора
          </a>{" "}
          и соглашаетесь с{" "}
          <a href="#" className="text-[#258AFF] underline">
            политикой обработки персональных данных
          </a>
        </div>
      </div>
      {/* Ссылка на авторизацию */}
      <div className="text-[13px] text-[#B0B7C3] mt-8 mb-6">
        Уже есть профиль?{" "}
        <Link to="/login" className="text-[#258AFF] font-medium">
          Авторизация
        </Link>
      </div>
    </div>
  );
};

export { RegistrationFormContainer };
