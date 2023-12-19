import { useMutation, useQuery } from "@tanstack/react-query";
import { NavigateFunction } from "react-router-dom";

import type { ILogin, LoginType, RegisterType } from "../types/types";

import { localStorageTokenKey } from "../utils/token";
import {
  authService,
  characterService,
  movieService,
  planetsService,
  starshipsService,
  vehiclesService,
} from "../API/service";

export const useCharactersQuery = (page: number) =>
  useQuery({
    queryKey: ["characters", "list", page],
    queryFn: () => characterService.getCharacter(page),
  });

export const usePersonQuery = (id: string) =>
  useQuery({
    queryKey: ["character", "details", id],
    queryFn: () => characterService.getPerson(id),
  });

export const useMoviesQuery = () =>
  useQuery({
    queryKey: ["movies"],
    queryFn: () => movieService.getMovies(),
  });

export const useFilmQuery = (id: string) =>
  useQuery({
    queryKey: ["movies", "details", id],
    queryFn: () => movieService.getFilm(id),
  });

export const usePlanetsQuery = (page: number) =>
  useQuery({
    queryKey: ["planets", "list", page],
    queryFn: () => planetsService.getPlanets(page),
  });

export const useSinglePlanetQuery = (id: string) =>
  useQuery({
    queryKey: ["planets", "details", id],
    queryFn: () => planetsService.getSinglePlanet(id),
  });

export const useStarshipsQuery = (page: number) =>
  useQuery({
    queryKey: ["starships", "list", page],
    queryFn: () => starshipsService.getStarships(page),
  });

export const useSingleStarshipQuery = (id: string) =>
  useQuery({
    queryKey: ["starships", "details", id],
    queryFn: () => starshipsService.getSingleStarship(id),
  });

export const useVehiclesQuery = (page: number) =>
  useQuery({
    queryKey: ["vehicles", "list", page],
    queryFn: () => vehiclesService.getVehicles(page),
  });

export const useSingleVehicleQuery = (id: string) =>
  useQuery({
    queryKey: ["vehicles", "details", id],
    queryFn: () => vehiclesService.getSingleVehicle(id),
  });

export const useSignInMutation = (navigate: NavigateFunction) =>
  useMutation({
    mutationKey: ["login", "password"],
    mutationFn: (data: LoginType) => authService.signIn(data),
    onSuccess: (data: ILogin) => {
      localStorage.setItem(localStorageTokenKey, data.data.token);
      navigate("/characters");
    },
  });

export const useSignUpMutation = (navigate: NavigateFunction) =>
  useMutation({
    mutationKey: ["login", "password", "name"],
    mutationFn: (data: RegisterType) => authService.signUp(data),
    onSuccess: () => {
      navigate("/auth/signupsuccess");
    },
  });

export const useAccountQuery = () =>
  useQuery({
    queryKey: ["email", "name", "token"],
    queryFn: () => authService.whoAmI(),
  });
