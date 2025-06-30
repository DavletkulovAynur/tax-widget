import { useState } from "react";
import { RegistrationFormContainer } from "@/app/auth/containers/RegistrationForm.container";
import { RegistrationStepsContainer } from "@/app/auth/containers/RegistrationSteps.container";
import { RegistrationConfirmContainer } from "@/app/auth/containers/RegistrationConfirm.container";
import { RegistrationInnContainer } from "@/app/auth/containers/RegistrationInn.container";
import type { TRegistrationFormValues } from "../infra/RegistrationForm.infra"; // assets
import logo from "@/assets/logo.svg";

import { Link } from "@tanstack/react-router";

const RegistrationWizardContainer = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<TRegistrationFormValues | null>(
    null
  );

  const handleRegistrationSuccess = (data: TRegistrationFormValues) => {
    setFormData(data);
    setStep(2);
  };

  return (
    <div className="mx-auto flex flex-col min-h-screen">
      <div className="flex flex-1 bg-white overflow-hidden">
        <div className="flex-1 pt-14 px-12 pb-0 flex flex-col justify-between">
          {/* Логотип */}
          <img src={logo} alt="logo" className="h-8 mb-12" />

          <div className="flex flex-col items-center">
            <div className="max-w-[400px] w-full">
              <h1 className="text-[36px] font-bold text-[#258AFF] mb-8">
                Регистрация
              </h1>

              {step === 1 && (
                <RegistrationFormContainer
                  onSuccess={handleRegistrationSuccess}
                  initialData={formData}
                />
              )}
              {step === 2 && (
                <RegistrationConfirmContainer
                  onBack={() => setStep(1)}
                  onNext={() => setStep(3)}
                  email={formData?.email}
                />
              )}
              {step === 3 && <RegistrationInnContainer />}
            </div>
          </div>

          {/* Ссылка на авторизацию */}
          <div className="text-[13px] text-[#B0B7C3] mt-8 mb-6 flex justify-center">
            Уже есть профиль?{" "}
            <Link to="/login" className="text-[#258AFF] font-medium">
              Авторизация
            </Link>
          </div>
        </div>

        {/* Правая часть: шаги */}
        <RegistrationStepsContainer currentStep={step} />
      </div>
    </div>
  );
};

export { RegistrationWizardContainer };
