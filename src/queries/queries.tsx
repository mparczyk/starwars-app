import { useQuery } from '@tanstack/react-query';

import type { IMovie, IPagination, IPerson, IPlanet, IStarships, IVehicles } from '../types/types';

import { request } from '../utils/http';

export const useCharactersQuery = (page: number) =>
  useQuery({
    queryKey: ['characters', 'list', page],
    queryFn: () => request<IPagination<IPerson>>('get', `https://swapi.dev/api/people/?page=${page}`),
  });

export const usePersonQuery = (id: string) =>
  useQuery({
    queryKey: ['character', 'details', id],
    queryFn: () => request<IPerson>('get', `https://swapi.dev/api/people/${id}`),
  });

export const useMoviesQuery = () =>
  useQuery({
    queryKey: ['movies'],
    queryFn: () => request<IPagination<IMovie>>('get', 'https://swapi.dev/api/films'),
  });

export const useFilmQuery = (id: string) =>
  useQuery({
    queryKey: ['movies', 'details', id],
    queryFn: () => request<IMovie>('get', `https://swapi.dev/api/films/${id}`),
  });

export const usePlanetsQuery = (page: number) =>
  useQuery({
    queryKey: ['planets', 'list', page],
    queryFn: () => request<IPagination<IPlanet>>('get', `https://swapi.dev/api/planets/?page=${page}`),
  });

export const useSinglePlanetQuery = (id: string) =>
  useQuery({
    queryKey: ['planets', 'details', id],
    queryFn: () => request<IPlanet>('get', `https://swapi.dev/api/planets/${id}`),
  });

export const useStarshipsQuery = (page: number) =>
  useQuery({
    queryKey: ['starships', 'list', page],
    queryFn: () => request<IPagination<IStarships>>('get', `https://swapi.dev/api/starships/?page=${page}`),
  });

export const useSingleStarshipQuery = (id: string) =>
  useQuery({
    queryKey: ['starships', 'details', id],
    queryFn: () => request<IStarships>('get', `https://swapi.dev/api/starships/${id}`),
  });

export const useVehiclesQuery = (page: number) =>
  useQuery({
    queryKey: ['vehicles', 'list', page],
    queryFn: () => request<IPagination<IVehicles>>('get', `https://swapi.dev/api/vehicles/?page=${page}`),
  });

export const useSingleVehicleQuery = (id: string) =>
  useQuery({
    queryKey: ['vehicles', 'details', id],
    queryFn: () => request<IVehicles>('get', `https://swapi.dev/api/vehicles/${id}`),
  });
