import { CharacterPage } from "../../Pages/Characters";
import { MoviesPage } from "../../Pages/Movies";
import { FilmPage } from "../../Pages/Movies/FilmPage";
import { PersonPage } from "../../Pages/Characters/PersonPage";
import { StartSite } from "../../Pages/StartSite";
import { PlanetsPage } from "../../Pages/Planets";
import { StarshipsPage } from "../../Pages/Starships";
import { VehiclesPage } from "../../Pages/Vehicles";
import { PlanetPage } from "../../Pages/Planets/PlanetPage";

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
      {
        path: "/planets",
        element: <PlanetsPage />,
      },
      {
        path: "/planets/:id",
        element: <PlanetPage />,
      },
      {
        path: "/starships",
        element: <StarshipsPage />,
      },
      {
        path: "/starships/:id",
        element: <>Starship</>,
      },
      {
        path: "/vehicles",
        element: <VehiclesPage />,
      },
      {
        path: "/vehicles/:id",
        element: <>Vehicle</>,
      },
    ],
  },
];
