const RegistrationConfirmContainer = ({
  onBack,
  onNext,
}: {
  onBack: () => void;
  onNext: () => void;
}) => (
  <div className="flex-1 pt-14 px-12 pb-0 flex flex-col justify-between">
    <div>
      <h1 className="text-[36px] font-bold text-[#258AFF] mb-8">
        Подтверждение
      </h1>
      <p className="mb-4">
        Мы отправили письмо на вашу почту. Введите временный пароль из письма.
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
  </div>
);

export { RegistrationConfirmContainer };
