import { useParams } from "react-router-dom";
import { Card } from "antd";

import { useFilmQuery } from "../../queries/queries";

export const FilmPage = (): JSX.Element => {
  const { id } = useParams();
  const { data: film } = useFilmQuery(id!);
  return (
    <Card title={<h3>{film?.title}</h3>}>
      <p>Episode: {film?.episode_id}</p>
      <p>Opening Crawl: {film?.opening_crawl}</p>
      <p>Director: {film?.director}</p>
    </Card>
  );
};
