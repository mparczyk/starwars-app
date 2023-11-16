import { useStarshipsQuery } from "../../queries/queries";
import { List, Card } from "antd";
import { IStarships } from "../../types/types";
import { Link } from "react-router-dom";

export const StarshipsPage = (): JSX.Element => {
  const { data: starships } = useStarshipsQuery();

  return (
    <List
      grid={{ gutter: 16, column: 3 }}
      dataSource={starships?.results}
      renderItem={(starship: IStarships) => {
        const filmsId = starship.url.split("/");
        const id = filmsId[5];
        return (
          <List.Item>
            <Card title={<Link to={`/starships/${id}`}>{starship.name}</Link>}>
              <p>{starship.model}</p>
              <p>{starship.length}</p>
              <p>{starship.pilots}</p>
              <p>{starship.passengers}</p>
            </Card>
          </List.Item>
        );
      }}
    />
  );
};
