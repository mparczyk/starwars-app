import { usePersonQuery } from "../../queries/queries";
import { List, Card } from "antd";
import { IPerson } from "../../types";
import { Link } from "react-router-dom";

export const CharacterPage = (): JSX.Element => {
  const { data: characters } = usePersonQuery();

  return (
    <List
      grid={{ gutter: 16, column: 4 }}
      dataSource={characters?.results}
      renderItem={(person: IPerson) => {
        const id = person.url.split("/");
        return (
          <List.Item>
            <Card
              title={<Link to={`/characters/${id[5]}`}>{person.name}</Link>}
            >
              <p>{person.gender}</p>
            </Card>
          </List.Item>
        );
      }}
    />
  );
};
