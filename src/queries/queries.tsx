import { useMutation, useQuery } from "@tanstack/react-query";

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
import { NavigateFunction, redirect, useNavigate } from "react-router-dom";
import { localStorageTokenKey } from "../utils/token";

export const useCharactersQuery = (page: number) =>
  useQuery({
    queryKey: ["characters", "list", page],
    queryFn: () =>
      request<IPagination<IPerson>>(
        "get",
        `https://swapi.dev/api/people/?page=${page}`
      ),
  });

export const usePersonQuery = (id: string) =>
  useQuery({
    queryKey: ["character", "details", id],
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
    queryKey: ["movies", "details", id],
    queryFn: () => request<IMovie>("get", `https://swapi.dev/api/films/${id}`),
  });

export const usePlanetsQuery = (page: number) =>
  useQuery({
    queryKey: ["planets", "list", page],
    queryFn: () =>
      request<IPagination<IPlanet>>(
        "get",
        `https://swapi.dev/api/planets/?page=${page}`
      ),
  });

export const useSinglePlanetQuery = (id: string) =>
  useQuery({
    queryKey: ["planets", "details", id],
    queryFn: () =>
      request<IPlanet>("get", `https://swapi.dev/api/planets/${id}`),
  });

export const useStarshipsQuery = (page: number) =>
  useQuery({
    queryKey: ["starships", "list", page],
    queryFn: () =>
      request<IPagination<IStarships>>(
        "get",
        `https://swapi.dev/api/starships/?page=${page}`
      ),
  });

export const useSingleStarshipQuery = (id: string) =>
  useQuery({
    queryKey: ["starships", "details", id],
    queryFn: () =>
      request<IStarships>("get", `https://swapi.dev/api/starships/${id}`),
  });

export const useVehiclesQuery = (page: number) =>
  useQuery({
    queryKey: ["vehicles", "list", page],
    queryFn: () =>
      request<IPagination<IVehicles>>(
        "get",
        `https://swapi.dev/api/vehicles/?page=${page}`
      ),
  });

export const useSingleVehicleQuery = (id: string) =>
  useQuery({
    queryKey: ["vehicles", "details", id],
    queryFn: () =>
      request<IVehicles>("get", `https://swapi.dev/api/vehicles/${id}`),
  });

export const useSignInMutation = (navigate: NavigateFunction) =>
  useMutation({
    mutationKey: ["login", "password"],
    mutationFn: (data: LoginType) =>
      request<ILogin>("post", "http://localhost:3001/login", data),
    onSuccess: (data: ILogin) => {
      localStorage.setItem("token", data.data.token);
      navigate("/characters");
    },
  });

export const useSignUpMutation = (navigate: NavigateFunction) =>
  useMutation({
    mutationKey: ["login", "password", "name"],
    mutationFn: (data: RegisterType) =>
      request<ILogin>("post", "http://localhost:3001/register", data),
    onSuccess: () => {
      navigate("/characters");
    },
  });

export const useAccountQuery = () =>
  useQuery({
    queryKey: ["email", "name", "token"],
    queryFn: () => request<ILogin>("get", "http://localhost:3001/whoami"),
  });
