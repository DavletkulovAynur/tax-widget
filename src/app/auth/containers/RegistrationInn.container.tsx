const RegistrationInnContainer = ({ onBack }: { onBack: () => void }) => (
  <div>
    <input className="border rounded px-3 py-2 w-full mb-4" placeholder="ИНН" />
    <div className="flex gap-2">
      <button className="text-[#258AFF] underline" onClick={onBack}>
        Назад
      </button>
      <button className="bg-[#258AFF] text-white px-4 py-2 rounded ml-auto">
        Завершить
      </button>
    </div>
  </div>
);

export { RegistrationInnContainer };
