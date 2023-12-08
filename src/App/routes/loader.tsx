import { redirect } from "react-router-dom";
import { useAccountQuery } from "../../queries/queries";

export const AuthorizationLoader = () => {
  try {
    useAccountQuery();
    return redirect("/characters");
  } catch (error) {
    return redirect("/auth");
  }
};
