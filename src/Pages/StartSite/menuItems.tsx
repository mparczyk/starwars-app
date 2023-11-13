import type { MenuProps } from "antd";
import { Link } from "react-router-dom";

type MenuItems = Required<MenuProps>["items"];

export const menu: MenuItems = [
  {
    key: "home",
    label: <Link to={"/"}>Home</Link>,
  },
  {
    key: "characters",
    label: <Link to={"/characters"}>Characters</Link>,
  },
  {
    key: "films",
    label: <Link to={"/films"}>Films</Link>,
  },
  {
    key: "planets",
    label: "Planets",
  },
  {
    key: "starships",
    label: "Starships",
  },
  {
    key: "vehicles",
    label: "Vehicles",
  },
];
