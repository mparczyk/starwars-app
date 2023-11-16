import { useCharactersQuery } from "../../queries/queries";
import { List, Card, Pagination } from "antd";
import { IPerson } from "../../types/types";
import { Link } from "react-router-dom";
import { useState } from "react";

export const CharacterPage = (): JSX.Element => {
  const [pageNum, setPageNum] = useState(1);
  const { data: characters } = useCharactersQuery(pageNum);
  return (
    <>
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
                <p>Gender: {character.gender}</p>
                <p>Hair Color: {character.hair_color}</p>
                <p>Height: {character.height}</p>
                <p>Species: {character.species}</p>
                <p>Homeworld: {character.homeworld}</p>
              </Card>
            </List.Item>
          );
        }}
      />
      <Pagination
        style={{ backgroundColor: "white", width: "500px" }}
        pageSize={10}
        total={characters?.count}
        onChange={(page) => {
          setPageNum(page);
        }}
      />
    </>
  );
};
