import { redirect } from "react-router-dom";
import { authRequest, request } from "../../utils/http";
import { ILogin } from "../../types/types";
import { localStorageTokenKey } from "../../utils/token";

export const authorizationLoader = async () => {
  const url = "http://localhost:3001/";
  const mapService = {
    getConfiguration: () => HTTP.get(`${url}`),
    getGeoObjects: () => request.get(`geo/roi`),
    getGeoCategories: () => HTTP.get(`geo/categories`),
  };
  try {
    await authRequest<ILogin>(
      "http://localhost:3001/whoami",
      `${localStorage.getItem(localStorageTokenKey)}`
    );
    return redirect("/characters");
  } catch {
    return redirect("/auth");
  }
};
