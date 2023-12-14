import { redirect } from "react-router-dom";
import { request } from "../../utils/http";
import { ILogin, LoginParams } from "../../types/types";
import { localStorageTokenKey } from "../../utils/token";

type SuccessResponse<T> = T;

const authRequest = async <T,>() => {
  const response = await fetch("http://localhost:3001/whoami", {
    method: "get",
    headers: {
      "Content-Type": "application/json",
      Authorization: `${localStorage.getItem(localStorageTokenKey)}`,
    },
  });

  if (response.ok) {
    const data = (await response.json()) as SuccessResponse<T>;
    return data;
  }

  throw new Error();
};

export const authorizationLoader = async () => {
  // const mapService = {
  //   getConfiguration: () => request.get(`http://localhost:3001/whoami`),
  //   getGeoObjects: () => request.get(`geo/roi`),
  //   getGeoCategories: () => HTTP.get(`geo/categories`),
  // };
  try {
    await authRequest<ILogin>();
    return redirect("/characters");
  } catch {
    return redirect("/auth");
  }
};
