import type { MenuProps } from "antd";
import { Link } from "react-router-dom";

type MenuItems = Required<MenuProps>["items"];

export const menu: MenuItems = [
  {
    key: "characters",
    label: <Link to={"/"}>Characters</Link>,
  },
  {
    key: "films",
    label: <Link to={"/films"}>Films</Link>,
  },
  {
    key: "planets",
    label: <Link to={"/planets"}>Planets</Link>,
  },
  {
    key: "starships",
    label: <Link to={"/starships"}>Starships</Link>,
  },
  {
    key: "vehicles",
    label: <Link to={"/vehicles"}>Vehicles</Link>,
  },
];
