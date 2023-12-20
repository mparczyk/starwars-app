import { useQuery } from "@tanstack/react-query";
import { vehiclesService } from "./service";

export const useVehiclesQuery = (page: number) =>
  useQuery({
    queryKey: ["vehicles", "list", page],
    queryFn: () => vehiclesService.getVehicles(page),
  });

export const useVehicleQuery = (id: string) =>
  useQuery({
    queryKey: ["vehicles", "details", id],
    queryFn: () => vehiclesService.getVehicle(id),
  });
