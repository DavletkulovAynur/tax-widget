import { httpService } from "@/helpers/api/httpService";
import { useMutation } from "@tanstack/react-query";

const RegistrationMutate = () => {
  const mutation = useMutation({
    mutationFn: async (): Promise<void> => {
      await httpService.post("/api/registration");
    },
  });

  return mutation;
};

export { RegistrationMutate };
