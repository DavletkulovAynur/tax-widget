import { useState } from "react";
import { RegistrationFormContainer } from "@/app/auth/containers/RegistrationForm.container";
import { RegistrationStepsContainer } from "@/app/auth/containers/RegistrationSteps.container";
import { RegistrationConfirmContainer } from "@/app/auth/containers/RegistrationConfirm.container";
import { RegistrationInnContainer } from "@/app/auth/containers/RegistrationInn.container";

const RegistrationWizardContainer = () => {
  const [step, setStep] = useState(1);

  return (
    <div className="mx-auto flex flex-col min-h-screen">
      <div className="flex flex-1 bg-white overflow-hidden">
        {/* Левая часть: шаги */}
        {step === 1 && <RegistrationFormContainer />}
        {step === 2 && (
          <RegistrationConfirmContainer
            onBack={() => setStep(1)}
            onNext={() => setStep(3)}
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
