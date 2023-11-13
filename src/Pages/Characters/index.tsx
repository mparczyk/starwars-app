import { useCharactersQuery } from "../../queries/queries";
import { List, Card } from "antd";
import { IPerson } from "../../types";
import { Link } from "react-router-dom";

export const CharacterPage = (): JSX.Element => {
  const { data: characters } = useCharactersQuery();

  return (
    <List
      grid={{ gutter: 16, column: 4 }}
      dataSource={characters?.results}
      renderItem={(character: IPerson) => {
        const charactersId = character.url.split("/");
        const id = charactersId[5];
        return (
          <List.Item>
            <Card
              title={<Link to={`/characters/${id}`}>{character.name}</Link>}
            >
              <p>{character.gender}</p>
            </Card>
          </List.Item>
        );
      }}
    />
  );
};
