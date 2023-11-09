import { usePersonQuery } from "../../queries/queries";
import { List, Card } from "antd";
import { IPerson } from "../../types";

export const CharacterPage = (): JSX.Element => {
  const { data: characters } = usePersonQuery();

  return (
    <List
      grid={{ gutter: 16, column: 4 }}
      dataSource={characters?.results}
      renderItem={(person: IPerson) => (
        <List.Item>
          <Card title={person.name}>
            <p>{person.gender}</p>
          </Card>
        </List.Item>
      )}
    />
  );
};
