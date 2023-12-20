import { useQuery } from "@tanstack/react-query";
import { characterService } from "./service";

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
