import { useQuery } from "@tanstack/react-query";
import { starshipsService } from "./service";

export const useStarshipsQuery = (page: number) =>
  useQuery({
    queryKey: ["starships", "list", page],
    queryFn: () => starshipsService.getStarships(page),
  });

export const useStarshipQuery = (id: string) =>
  useQuery({
    queryKey: ["starships", "details", id],
    queryFn: () => starshipsService.getStarship(id),
  });
