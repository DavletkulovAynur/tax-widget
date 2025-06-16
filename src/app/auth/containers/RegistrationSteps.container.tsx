import illustrationAuth from "@/assets/illustrationAuth.svg";

interface RegistrationStepsContainerProps {
  currentStep?: number;
}

const RegistrationStepsContainer = ({
  currentStep = 1,
}: RegistrationStepsContainerProps) => {
  return (
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
            <div
              className={`w-7 h-7 rounded-full flex items-center justify-center font-bold text-lg mt-0.5 ${
                currentStep === 1
                  ? "bg-[#258AFF] text-white"
                  : "bg-[#EAF6FF] text-[#B0B7C3] border border-[#B0B7C3]"
              }`}
            >
              1
            </div>
            <div>
              <div
                className={`font-bold text-lg ${
                  currentStep === 1 ? "text-[#258AFF]" : "text-[#222]"
                }`}
              >
                Личные данные
              </div>
              <div className="text-[#6B7683] text-[15px] mt-0.5">
                Укажите ваши контактные данные
              </div>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div
              className={`w-7 h-7 rounded-full flex items-center justify-center font-bold text-lg mt-0.5 ${
                currentStep === 2
                  ? "bg-[#258AFF] text-white"
                  : "bg-[#EAF6FF] text-[#B0B7C3] border border-[#B0B7C3]"
              }`}
            >
              2
            </div>
            <div>
              <div
                className={`font-bold text-lg ${
                  currentStep === 2 ? "text-[#258AFF]" : "text-[#222]"
                }`}
              >
                Подтверждение
              </div>
              <div className="text-[#6B7683] text-[15px] mt-0.5">
                Подтвердите почту и получите пароль
              </div>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div
              className={`w-7 h-7 rounded-full flex items-center justify-center font-bold text-lg mt-0.5 ${
                currentStep === 3
                  ? "bg-[#258AFF] text-white"
                  : "bg-[#EAF6FF] text-[#B0B7C3] border border-[#B0B7C3]"
              }`}
            >
              3
            </div>
            <div>
              <div
                className={`font-bold text-lg ${
                  currentStep === 3 ? "text-[#258AFF]" : "text-[#222]"
                }`}
              >
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
  );
};

export { RegistrationStepsContainer };
