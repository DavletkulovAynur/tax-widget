import { httpService } from "@/helpers/api/httpService";
import { useMutation } from "@tanstack/react-query";

const useRegistrationConfirmMutate = () => {
  const mutation = useMutation({
    mutationFn: async (data: any): Promise<void> => {
      await httpService.post("/api/registration/confirm", data);
    },
  });

  return mutation;
};

export { useRegistrationConfirmMutate };
