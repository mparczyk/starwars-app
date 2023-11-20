import { useParams } from "react-router-dom";
import { Card } from "antd";

import { usePersonQuery } from "../../queries/queries";

export const PersonPage = (): JSX.Element => {
  const { id } = useParams();
  const { data: person } = usePersonQuery(id!);
  return (
    <Card title={<h3>{person?.name}</h3>}>
      <p>{person?.height}</p>
      <p>{person?.gender}</p>
      <p>{person?.homeworld}</p>
    </Card>
  );
};
