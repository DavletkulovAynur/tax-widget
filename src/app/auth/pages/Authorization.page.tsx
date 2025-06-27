import { InputField } from "@/components/Input/InputField";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import Logo from "@/assets/logo.svg";
import IllustrationAuth from "@/assets/illustrationAuth.svg";

// контролируем тут

const AuthorizationPage = () => {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-gradient-to-tr from-white to-[#eaf6ff] relative">
      <div className="absolute top-6 left-6 flex items-center gap-2">
        <img src={Logo} alt="Модульбухгалтерия" className="h-8" />
        <span className="text-lg font-semibold text-[#4AA9FF]">
          Модульбухгалтерия
        </span>
      </div>
      <div className="w-full max-w-md p-8 flex flex-col items-center">
        <h1 className="text-3xl font-bold text-[#4AA9FF] mb-8 text-center">
          Вход в онлайн бухгалтерию
        </h1>
        <form className="w-full flex flex-col gap-4">
          <div className="flex gap-2 items-end">
            <InputField
              label="Телефон"
              name="phone"
              mask={"+7 (000) 000-00-00"}
              placeholder="+7 (___) ___-__-__"
              required
              className="flex-1"
            />
            <Button
              type="button"
              variant="outline"
              className="h-9 whitespace-nowrap"
            >
              Отправить СМС
            </Button>
          </div>
          <InputField
            label="Код из СМС"
            name="code"
            type="password"
            placeholder="••••"
            required
          />
          <Button type="submit" className="mt-2 w-full" disabled>
            Продолжить
          </Button>
        </form>
      </div>
      <img src={IllustrationAuth} alt="Иллюстрация" className="w-64 mt-12" />
      <div className="absolute bottom-6 w-full flex justify-center text-sm text-muted-foreground">
        Уже есть профиль?{" "}
        <Link to="/register" className="text-[#4AA9FF] ml-1 hover:underline">
          Регистрация
        </Link>
      </div>
    </div>
  );
};

export { AuthorizationPage };
