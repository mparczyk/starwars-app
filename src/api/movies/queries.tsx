import { useQuery } from "@tanstack/react-query";
import { movieService } from "./service";

export const useMoviesQuery = () =>
  useQuery({
    queryKey: ["movies", "list"],
    queryFn: () => movieService.getMovies(),
  });

export const useMovieQuery = (id: string) =>
  useQuery({
    queryKey: ["movies", "details", id],
    queryFn: () => movieService.getFilm(id),
  });
