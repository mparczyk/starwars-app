import { CharacterPage } from "../../Pages/Characters";
import { MoviesPage } from "../../Pages/Movies";
import { FilmPage } from "../../Pages/Movies/FilmPage";
import { PersonPage } from "../../Pages/Characters/PersonPage";
import { StartSite } from "../../Pages/StartSite";

export const routes = [
  {
    path: "/",
    element: <StartSite />,
    children: [
      {
        path: "/films",
        element: <MoviesPage />,
      },
      {
        path: "/films/:id",
        element: <FilmPage />,
      },
      {
        path: "/characters",
        element: <CharacterPage />,
      },
      {
        path: "/characters/:id",
        element: <PersonPage />,
      },
    ],
  },
];
