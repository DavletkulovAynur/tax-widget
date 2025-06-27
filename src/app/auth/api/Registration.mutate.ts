import { httpService } from "@/helpers/api/httpService";
import { useMutation } from "@tanstack/react-query";
import type { TRegistrationFormValues } from "../infra/RegistrationForm.infra";

const useRegistrationMutate = () => {
  const mutation = useMutation({
    mutationFn: async (data: TRegistrationFormValues): Promise<void> => {
      await httpService.post("/api/registration", data);
    },
  });

  return mutation;
};

export { useRegistrationMutate };
