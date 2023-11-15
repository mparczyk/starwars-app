import { useQuery } from "@tanstack/react-query";
import { request } from "../utils/http";
import { IMovie, IPagination, IPerson } from "../types";

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
