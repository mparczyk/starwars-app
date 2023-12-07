import { localStorageTokenKey } from "./token";

type MethodType = "post" | "get" | "put" | "delete";

type SuccessResponse<T> = T;

const createBody = (data?: object) => {
  if (!data) {
    return undefined;
  }

  return JSON.stringify(data);
};

export const request = async <T,>(
  method: MethodType,
  url: string,
  data?: object
) => {
  const response = await fetch(url, {
    method: method,
    headers: {
      "Content-Type": "application/json",
      Authorization: `${localStorage.getItem("token")}`,
    },
    body: createBody(data),
  });

  if (response.ok) {
    const data = (await response.json()) as SuccessResponse<T>;
    return data;
  }

  throw new Error();
};
