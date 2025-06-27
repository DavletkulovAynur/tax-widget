import { httpService } from "@/helpers/api/httpService";
import { useMutation } from "@tanstack/react-query";
import type { TRegistrationFormValues } from "../infra/RegistrationForm.infra";

const useRegistrationMutate = (onSuccess?: () => void) => {
  const mutation = useMutation({
    mutationFn: async (data: TRegistrationFormValues): Promise<void> => {
      await httpService.post("/api/registration", data);
    },
    onSuccess: () => {
      onSuccess?.();
    },
    onError: (error) => {
      console.log(error);
      onSuccess?.();
    },
  });

  return mutation;
};

export { useRegistrationMutate };
