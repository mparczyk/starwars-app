import { redirect } from "react-router-dom";
import { authRequest } from "../../utils/http";
import { ILogin } from "../../types/types";
import { localStorageTokenKey } from "../../utils/token";

export const authorizationLoader = async () => {
  const token = localStorage.getItem(localStorageTokenKey);

  try {
    await authRequest<ILogin>("http://localhost:3001/whoami", token ?? "");
    return redirect("/characters");
  } catch {
    return redirect("/auth");
  }
};
