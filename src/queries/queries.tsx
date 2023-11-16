import { useQuery } from "@tanstack/react-query";
import { request } from "../utils/http";
import {
  IMovie,
  IPagination,
  IPerson,
  IPlanet,
  IStarships,
  IVehicles,
} from "../types/types";

export const useCharactersQuery = (page: number) =>
  useQuery({
    queryKey: ["characters", page],
    queryFn: () =>
      request<IPagination<IPerson>>(
        "get",
        `https://swapi.dev/api/people/?page=${page}`
      ),
  });

export const usePersonQuery = (id: string) =>
  useQuery({
    queryKey: ["charcters", id],
    queryFn: () =>
      request<IPerson>("get", `https://swapi.dev/api/people/${id}`),
  });

export const useMoviesQuery = () =>
  useQuery({
    queryKey: ["movies"],
    queryFn: () =>
      request<IPagination<IMovie>>("get", "https://swapi.dev/api/films"),
  });

export const useFilmQuery = (id: string) =>
  useQuery({
    queryKey: ["movies", id],
    queryFn: () => request<IMovie>("get", `https://swapi.dev/api/films/${id}`),
  });

export const usePlanetsQuery = () =>
  useQuery({
    queryKey: ["planets"],
    queryFn: () =>
      request<IPagination<IPlanet>>("get", "https://swapi.dev/api/planets"),
  });

export const useStarshipsQuery = () =>
  useQuery({
    queryKey: ["starships"],
    queryFn: () =>
      request<IPagination<IStarships>>(
        "get",
        "https://swapi.dev/api/starships"
      ),
  });

export const useVehiclesQuery = () =>
  useQuery({
    queryKey: ["vehicles"],
    queryFn: () =>
      request<IPagination<IVehicles>>("get", "https://swapi.dev/api/vehicles"),
  });
