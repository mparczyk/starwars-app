import { IPagination, IStarships } from "../../types/types";
import { request } from "../../utils/http";

export const starshipsService = {
  getStarships: (page: number) =>
    request<IPagination<IStarships>>(
      "get",
      `https://swapi.dev/api/starships/?page=${page}`
    ),
  getStarship: (id: string) =>
    request<IStarships>("get", `https://swapi.dev/api/starships/${id}`),
};
