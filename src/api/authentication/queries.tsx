import { useMutation, useQuery } from "@tanstack/react-query";
import { NavigateFunction } from "react-router-dom";
import { authService } from "./service";
import { ILogin, LoginType, RegisterType } from "../../types/types";
import { localStorageTokenKey } from "../../utils/token";

export const useSignInMutation = (navigate: NavigateFunction) =>
  useMutation({
    mutationFn: (data: LoginType) => authService.signIn(data),
    onSuccess: (data: ILogin) => {
      localStorage.setItem(localStorageTokenKey, data.data.token);
      navigate("/characters");
    },
  });

export const useSignUpMutation = (navigate: NavigateFunction) =>
  useMutation({
    mutationFn: (data: RegisterType) => authService.signUp(data),
    onSuccess: () => {
      navigate("/auth/signupsuccess");
    },
  });

export const useAccountQuery = () =>
  useQuery({
    queryKey: ["whoami", "login"],
    queryFn: () => authService.whoAmI(),
  });
