import type {
  ILogin,
  IMovie,
  IPagination,
  IPerson,
  IPlanet,
  IStarships,
  IVehicles,
  LoginType,
  RegisterType,
} from "../types/types";

import { request } from "../utils/http";

export const authService = {
  whoAmI: () => request<ILogin>("get", "http://localhost:3001/whoami"),
  signIn: (data: LoginType) =>
    request<ILogin>("post", "http://localhost:3001/login", data),
  signUp: (data: RegisterType) =>
    request<ILogin>("post", "http://localhost:3001/register", data),
};

export const characterService = {
  getCharacter: (page: number) =>
    request<IPagination<IPerson>>(
      "get",
      `https://swapi.dev/api/people/?page=${page}`
    ),
  getPerson: (id: string) =>
    request<IPerson>("get", `https://swapi.dev/api/people/${id}`),
};

export const movieService = {
  getMovies: () =>
    request<IPagination<IMovie>>("get", "https://swapi.dev/api/films"),
  getFilm: (id: string) =>
    request<IMovie>("get", `https://swapi.dev/api/films/${id}`),
};

export const planetsService = {
  getPlanets: (page: number) =>
    request<IPagination<IPlanet>>(
      "get",
      `https://swapi.dev/api/planets/?page=${page}`
    ),
  getSinglePlanet: (id: string) =>
    request<IPlanet>("get", `https://swapi.dev/api/planets/${id}`),
};

export const starshipsService = {
  getStarships: (page: number) =>
    request<IPagination<IStarships>>(
      "get",
      `https://swapi.dev/api/starships/?page=${page}`
    ),
  getSingleStarship: (id: string) =>
    request<IStarships>("get", `https://swapi.dev/api/starships/${id}`),
};

export const vehiclesService = {
  getVehicles: (page: number) =>
    request<IPagination<IVehicles>>(
      "get",
      `https://swapi.dev/api/vehicles/?page=${page}`
    ),
  getSingleVehicle: (id: string) =>
    request<IVehicles>("get", `https://swapi.dev/api/vehicles/${id}`),
};
