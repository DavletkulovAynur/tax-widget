const RegistrationConfirmContainer = ({
  onBack,
  onNext,
  email,
}: {
  onBack: () => void;
  onNext: () => void;
  email?: string;
}) => (
  <div>
    <p className="mb-4">
      Мы отправили письмо на почту {email || "example@mail.ru"}.
    </p>

    <p>
      Пожалуйста, пройдите по ссылке из письма для подтверждения почты и
      получения пароля. Вы сможете сменить пароль на собственный после
      регистрации
    </p>
    <input
      className="border rounded px-3 py-2 w-full mb-4"
      placeholder="Пароль из письма"
    />
    <div className="flex gap-2">
      <button className="text-[#258AFF] underline" onClick={onBack}>
        Назад
      </button>
      <button
        className="bg-[#258AFF] text-white px-4 py-2 rounded ml-auto"
        onClick={onNext}
      >
        Продолжить
      </button>
    </div>
  </div>
);

export { RegistrationConfirmContainer };
