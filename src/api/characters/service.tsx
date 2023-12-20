import { IPagination, IPerson } from "../../types/types";
import { request } from "../../utils/http";

export const characterService = {
  getCharacter: (page: number) =>
    request<IPagination<IPerson>>(
      "get",
      `https://swapi.dev/api/people/?page=${page}`
    ),
  getPerson: (id: string) =>
    request<IPerson>("get", `https://swapi.dev/api/people/${id}`),
};
