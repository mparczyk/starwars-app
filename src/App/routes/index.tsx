import { CharacterPage } from "../../Pages/Characters";
import { MoviesPage } from "../../Pages/Movies";
import { FilmPage } from "../../Pages/Movies/FilmPage";
import { PersonPage } from "../../Pages/Characters/PersonPage";
import { StartSite } from "../../Pages/StartSite";
import { PlanetsPage } from "../../Pages/Planets";
import { StarshipsPage } from "../../Pages/Starships";
import { VehiclesPage } from "../../Pages/Vehicles";
import { PlanetPage } from "../../Pages/Planets/PlanetPage";
import { SignInPage } from "../../Pages/Login/SingInPage";
import { LoginPage } from "../../Pages/Login";
import { redirect } from "react-router-dom";
import { SignUpPage } from "../../Pages/Login/SignUpPage";
import { AuthorizationLoader } from "./loader";

export const routes = [
  // {
  //   index: true,
  //   loader: () => redirect("/auth"),
  // },
  {
    path: "/auth",
    element: <LoginPage />,
    children: [
      {
        index: true,
        loader: () => redirect("/auth/login"),
      },
      {
        path: "/auth/login",
        element: <SignInPage />,
      },
      {
        path: "/auth/register",
        element: <SignUpPage />,
      },
    ],
  },
  {
    path: "/",
    element: <StartSite />,
    children: [
      {
        index: true,
        loader: () => AuthorizationLoader,
      },
      {
        path: "/characters",
        element: <CharacterPage />,
        id: "characters",
      },
      {
        path: "/characters/:id",
        element: <PersonPage />,
      },
      {
        path: "/films",
        element: <MoviesPage />,
        id: "films",
      },
      {
        path: "/films/:id",
        element: <FilmPage />,
      },

      {
        path: "/planets",
        element: <PlanetsPage />,
        id: "planets",
      },
      {
        path: "/planets/:id",
        element: <PlanetPage />,
      },
      {
        path: "/starships",
        element: <StarshipsPage />,
        id: "starships",
      },
      {
        path: "/starships/:id",
        element: <>Starship</>,
      },
      {
        path: "/vehicles",
        element: <VehiclesPage />,
        id: "vehicles",
      },
      {
        path: "/vehicles/:id",
        element: <>Vehicle</>,
      },
      {
        path: "/account",
        element: <>Account</>,
      },
    ],
  },
];
