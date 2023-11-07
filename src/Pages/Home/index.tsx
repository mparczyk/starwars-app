import { usePersonQuery } from "../../queries/queries";
import { List, Card } from "antd";
import { IPerson } from "../../types";
import { request } from "../../utils/http";

export const HomePage = (): JSX.Element => {
  const { data: characters } = usePersonQuery();

  return (
    <List
      grid={{ gutter: 16, column: 4 }}
      dataSource={characters}
      renderItem={(person: IPerson) => (
        <List.Item>
          <Card title={person.name}>Card content</Card>
        </List.Item>
      )}
    />
  );
};
