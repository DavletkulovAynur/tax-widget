import { useState } from "react";
import { RegistrationFormContainer } from "@/app/auth/containers/RegistrationForm.container";
import { RegistrationStepsContainer } from "@/app/auth/containers/RegistrationSteps.container";
import { RegistrationConfirmContainer } from "@/app/auth/containers/RegistrationConfirm.container";
import { RegistrationInnContainer } from "@/app/auth/containers/RegistrationInn.container";
import type { TRegistrationFormValues } from "../infra/RegistrationForm.infra";

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
        {/* Левая часть: шаги */}
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
        {step === 3 && <RegistrationInnContainer onBack={() => setStep(2)} />}
        {/* Правая часть: шаги */}
        <RegistrationStepsContainer currentStep={step} />
      </div>
    </div>
  );
};

export { RegistrationWizardContainer };
