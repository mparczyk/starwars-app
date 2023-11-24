import { CharacterPage } from '../../Pages/Characters';
import { MoviesPage } from '../../Pages/Movies';
import { FilmPage } from '../../Pages/Movies/FilmPage';
import { PersonPage } from '../../Pages/Characters/PersonPage';
import { StartSite } from '../../Pages/StartSite';
import { PlanetsPage } from '../../Pages/Planets';
import { StarshipsPage } from '../../Pages/Starships';
import { VehiclesPage } from '../../Pages/Vehicles';
import { PlanetPage } from '../../Pages/Planets/PlanetPage';
import { HomePage } from '../../Pages/Home';
import { LanguageSwitcher } from '../../UI/LanguageSwitcher';

export const routes = [
  {
    path: '/',
    element: <StartSite />,
    children: [
      {
        index: true,
        element: <HomePage />,
        id: 'home',
      },
      {
        path: '/films',
        element: <MoviesPage />,
        id: 'films',
      },
      {
        path: '/films/:id',
        element: <FilmPage />,
      },
      {
        path: '/characters',
        element: <CharacterPage />,
        id: 'characters',
      },
      {
        path: '/characters/:id',
        element: <PersonPage />,
      },
      {
        path: '/planets',
        element: <PlanetsPage />,
        id: 'planets',
      },
      {
        path: '/planets/:id',
        element: <PlanetPage />,
      },
      {
        path: '/starships',
        element: <StarshipsPage />,
        id: 'starships',
      },
      {
        path: '/starships/:id',
        element: <>Starship</>,
      },
      {
        path: '/vehicles',
        element: <VehiclesPage />,
        id: 'vehicles',
      },
      {
        path: '/vehicles/:id',
        element: <>Vehicle</>,
      },
      {
        path: '/typo',
        element: <LanguageSwitcher />,
      },
    ],
  },
];
