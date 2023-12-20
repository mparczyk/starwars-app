import { IPagination, IVehicles } from "../../types/types";
import { request } from "../../utils/http";

export const vehiclesService = {
  getVehicles: (page: number) =>
    request<IPagination<IVehicles>>(
      "get",
      `https://swapi.dev/api/vehicles/?page=${page}`
    ),
  getVehicle: (id: string) =>
    request<IVehicles>("get", `https://swapi.dev/api/vehicles/${id}`),
};
