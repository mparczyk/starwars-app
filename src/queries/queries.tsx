import { useQuery } from "@tanstack/react-query";
import { request } from "../utils/http";
import { IPerson } from "../types";

export const usePersonQuery = () =>
  useQuery({
    queryKey: ["characters"],
    queryFn: () => request<IPerson[]>("get", "https://swapi.dev/api/people"),
  });
