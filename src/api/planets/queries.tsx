import { useQuery } from "@tanstack/react-query";
import { planetsService } from "./service";

export const usePlanetsQuery = (page: number) =>
  useQuery({
    queryKey: ["planets", "list", page],
    queryFn: () => planetsService.getPlanets(page),
  });

export const usePlanetQuery = (id: string) =>
  useQuery({
    queryKey: ["planets", "details", id],
    queryFn: () => planetsService.getPlanet(id),
  });
