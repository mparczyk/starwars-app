import { IPagination, IPlanet } from "../../types/types";
import { request } from "../../utils/http";

export const planetsService = {
  getPlanets: (page: number) =>
    request<IPagination<IPlanet>>(
      "get",
      `https://swapi.dev/api/planets/?page=${page}`
    ),
  getPlanet: (id: string) =>
    request<IPlanet>("get", `https://swapi.dev/api/planets/${id}`),
};
