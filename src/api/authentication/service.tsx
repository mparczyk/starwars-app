import { ILogin, LoginType, RegisterType } from "../../types/types";
import { request } from "../../utils/http";

export const authService = {
  whoAmI: () => request<ILogin>("get", "http://localhost:3001/whoami"),
  signIn: (data: LoginType) =>
    request<ILogin>("post", "http://localhost:3001/login", data),
  signUp: (data: RegisterType) =>
    request<ILogin>("post", "http://localhost:3001/register", data),
};
