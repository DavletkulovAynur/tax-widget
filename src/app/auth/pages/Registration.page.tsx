import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.svg";
import illustrationAuth from "@/assets/illustrationAuth.svg";
import { InputField } from "@/components/Input/InputField";

const RegistrationPage = () => {
  return (
    <div className="min-h-screen w-full">
      <div className="mx-auto flex flex-col min-h-screen">
        <div className="flex flex-1 bg-white overflow-hidden">
          {/* Левая часть */}
          <div className="flex-1 pt-14 px-12 pb-0 flex flex-col justify-between">
            <div className="flex flex-col items-center">
              {/* Логотип */}
              <img src={logo} alt="logo" className="h-8 mb-12" />
              {/* Заголовок */}
              <h1 className="text-[36px] font-bold text-[#258AFF] mb-8">
                Регистрация
              </h1>
              {/* Форма */}
              <form className="flex flex-col gap-5 max-w-[400px] w-full mx-auto">
                <InputField
                  label="Ваш e-mail"
                  type="email"
                  placeholder="Введите"
                  required
                />
                <InputField
                  mask="+7 (000) 000-00-00"
                  label="Номер телефона"
                  type="tel"
                  placeholder="+7 (___) ___-__-__"
                  required
                />
                <Button type="submit" className="mt-2 font-medium text-base">
                  Продолжить
                </Button>
              </form>
              {/* Текст соглашения */}
              <div className="text-[13px] text-[#6B7683] mt-6 max-w-[400px]">
                Нажимая на кнопку <b>Продолжить</b> вы соглашаетесь, что расчет
                налога будет производиться только на основании данных, успешно
                загруженных в сервис. Регистрируясь, вы принимаете{" "}
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
          {/* Правая часть */}
          <div className="flex-1 bg-[#EAF6FF] flex flex-col items-center justify-center relative px-10">
            {/* Иллюстрация */}
            <img
              src={illustrationAuth}
              alt="auth-illustration"
              className="w-[220px] mb-12 -mt-10"
            />
            {/* Шаги */}
            <div className="w-[340px] bg-transparent rounded-xl p-0 mt-0">
              <div className="flex flex-col gap-8">
                <div className="flex items-start gap-4">
                  <div className="w-7 h-7 rounded-full bg-[#258AFF] text-white flex items-center justify-center font-bold text-lg mt-0.5">
                    1
                  </div>
                  <div>
                    <div className="font-bold text-[#258AFF] text-lg">
                      Личные данные
                    </div>
                    <div className="text-[#6B7683] text-[15px] mt-0.5">
                      Укажите ваши контактные данные
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-7 h-7 rounded-full bg-[#EAF6FF] text-[#B0B7C3] border border-[#B0B7C3] flex items-center justify-center font-bold text-lg mt-0.5">
                    2
                  </div>
                  <div>
                    <div className="font-bold text-[#222] text-lg">
                      Подтверждение
                    </div>
                    <div className="text-[#6B7683] text-[15px] mt-0.5">
                      Подтвердите почту и получите пароль
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-7 h-7 rounded-full bg-[#EAF6FF] text-[#B0B7C3] border border-[#B0B7C3] flex items-center justify-center font-bold text-lg mt-0.5">
                    3
                  </div>
                  <div>
                    <div className="font-bold text-[#222] text-lg">
                      Дополнительные сведения
                    </div>
                    <div className="text-[#6B7683] text-[15px] mt-0.5">
                      Укажите ИНН
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { RegistrationPage };
