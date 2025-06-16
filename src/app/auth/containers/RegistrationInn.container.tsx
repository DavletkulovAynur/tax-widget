const RegistrationInnContainer = ({ onBack }: { onBack: () => void }) => (
  <div className="flex-1 pt-14 px-12 pb-0 flex flex-col justify-between">
    <div>
      <h1 className="text-[36px] font-bold text-[#258AFF] mb-8">
        Дополнительные сведения
      </h1>
      <input
        className="border rounded px-3 py-2 w-full mb-4"
        placeholder="ИНН"
      />
      <div className="flex gap-2">
        <button className="text-[#258AFF] underline" onClick={onBack}>
          Назад
        </button>
        <button className="bg-[#258AFF] text-white px-4 py-2 rounded ml-auto">
          Завершить
        </button>
      </div>
    </div>
  </div>
);

export { RegistrationInnContainer };
