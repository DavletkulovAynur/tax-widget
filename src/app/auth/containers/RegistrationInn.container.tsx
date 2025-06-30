import { Button } from "@/components/ui/button";

const RegistrationInnContainer = () => {
  return (
    <div className="w-full">
      <div className="flex  gap-2">
        <input
          className="border rounded px-3 py-2 w-full mb-4"
          placeholder="ИНН"
        />
        <Button variant="ghost">Проверить</Button>
      </div>

      <div className="mb-4">
        <div className="text-sm text-[#080D13A6]">Название</div>
        <div className="text-sm text-[#080D13A6]">дата регистрации ИП</div>
      </div>

      <Button className="w-full">Продолжить</Button>
    </div>
  );
};

export { RegistrationInnContainer };
