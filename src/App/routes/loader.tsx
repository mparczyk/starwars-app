import { redirect } from "react-router-dom";

import { authService } from "../../api/authentication/service";

export const authorizationLoader = async () => {
  try {
    await authService.whoAmI();
    return null;
  } catch {
    return redirect("/auth");
  }
};
