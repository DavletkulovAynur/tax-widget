import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.svg";
import { InputField } from "@/components/Input/InputField";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registrationFormSchema } from "../infra/RegistrationForm.infra";
import type { TRegistrationFormValues } from "../infra/RegistrationForm.infra";

const RegistrationFormContainer = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TRegistrationFormValues>({
    resolver: zodResolver(registrationFormSchema),
  });

  const onSubmit = (data: TRegistrationFormValues) => {
    // TODO: обработка данных формы
    console.log(data);
  };

  console.log(errors);
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
          <InputField
            label="Ваш e-mail"
            placeholder="Введите"
            required
            {...register("email")}
            error={errors.email?.message}
          />
          <InputField
            mask="+7 (000) 000-00-00"
            label="Номер телефона"
            type="tel"
            placeholder="+7 (___) ___-__-__"
            required
            {...register("phone")}
            error={errors.phone?.message}
          />
          <Button type="submit" className="mt-2 font-medium text-base">
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
        <a href="#" className="text-[#258AFF] font-medium">
          Авторизация
        </a>
      </div>
    </div>
  );
};

export { RegistrationFormContainer };
