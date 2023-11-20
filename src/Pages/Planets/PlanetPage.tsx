import { useParams } from "react-router-dom";
import { Card } from "antd";

import { useSinglePlanetQuery } from "../../queries/queries";

export const PlanetPage = (): JSX.Element => {
  const { id } = useParams();
  const { data: planet } = useSinglePlanetQuery(id!);
  return (
    <Card title={<h3>{planet?.name}</h3>}>
      <p>Population: {planet?.population}</p>
      <p>Residents: {planet?.residents}</p>
      <p>Gravity: {planet?.gravity}</p>
      <p>Films: {planet?.films}</p>
    </Card>
  );
};
