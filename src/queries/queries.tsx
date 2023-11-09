import { useQuery } from "@tanstack/react-query";
import { request } from "../utils/http";
import { IPagination, IPerson } from "../types";

export const usePersonQuery = () =>
  useQuery({
    queryKey: ["characters"],
    queryFn: () =>
      request<IPagination<IPerson>>("get", "https://swapi.dev/api/people"),
  });
