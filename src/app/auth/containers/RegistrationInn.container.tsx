import { InputField } from "@/components/Input/InputField";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
// ui
import { Button } from "@/components/ui/button";
// infra
import {
  innFormSchema,
  type TInnFormSchema,
} from "@/app/auth/infra/InnFormSchema.infra";

const RegistrationInnContainer = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<TInnFormSchema>({
    resolver: zodResolver(innFormSchema),
  });

  const onSubmit = (data: TInnFormSchema) => {
    console.log("Отправлено:", data);
    // здесь можно вызвать API, переход на следующий шаг и т.д.
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full">
      <div className="flex gap-2 items-end w-full">
        <div className="flex-1">
          <Controller
            name="inn"
            control={control}
            render={({ field }) => (
              <InputField
                label="ИНН"
                type="tel"
                placeholder="Введите"
                required
                {...field}
                error={errors.inn?.message}
              />
            )}
          />
        </div>
        <div className="w-1/4">
          <Button type="submit" variant="ghost" className="w-full">
            Проверить
          </Button>
        </div>
      </div>

      <div className="mb-8 mt-8">
        <div className="text-sm text-[#080D13A6]">Название</div>
        <div className="mt-2 text-sm text-[#080D13A6]">дата регистрации ИП</div>
      </div>

      <Button disabled className="w-full">
        Продолжить
      </Button>
    </form>
  );
};

export { RegistrationInnContainer };
