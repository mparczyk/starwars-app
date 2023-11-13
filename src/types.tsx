export interface IPerson {
  name: string;
  gender: string;
  hair_color: string;
  height: number;
  homeworld: string;
  mass: number;
  skin_color: string;
  created: Date;
  edited: Date;
  species: string[];
  starships: string[];
  url: string;
  vehicles: string[];
}

export interface IMovie {
  title: string;
  episode_id: string;
  opening_crawl: string;
  director: number;
  producer: string;
  release_date: Date;
  species: string[];
  starships: string[];
  vehicles: string[];
  characters: string[];
  planets: string[];
  url: string;
}

export interface IPlanent {
  name: string;
  diameter: string;
  rotation_period: string;
  orbital_period: string;
  gravity: string;
  population: string;
  climate: string;
  terrain: string;
  surface_water: string;
  residents: string[];
  films: string[];
  url: string;
  created: string;
  edited: string;
}

export interface IPagination<T> {
  count: number;
  results: T[];
}
