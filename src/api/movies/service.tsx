import { IMovie, IPagination } from "../../types/types";
import { request } from "../../utils/http";

export const movieService = {
  getMovies: () =>
    request<IPagination<IMovie>>("get", "https://swapi.dev/api/films"),
  getFilm: (id: string) =>
    request<IMovie>("get", `https://swapi.dev/api/films/${id}`),
};
