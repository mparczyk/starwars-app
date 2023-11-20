import { Link } from "react-router-dom";
import { useState } from "react";
import { List, Card, Pagination, Skeleton } from "antd";

import type { IPerson } from "../../types/types";

import { useCharactersQuery } from "../../queries/queries";

export const CharacterPage = (): JSX.Element => {
  const [loading, setLoading] = useState(true);
  const [pageNum, setPageNum] = useState(1);
  const {
    isFetching,
    isLoading,
    data: characters,
  } = useCharactersQuery(pageNum);

  if (isLoading) {
    <Skeleton active />;
  }
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
              {/* <Skeleton loading={isLoading} active> */}
              <Card
                title={<Link to={`/characters/${id}`}>{character.name}</Link>}
              >
                <p>Gender: {character.gender}</p>
                <p>Hair Color: {character.hair_color}</p>
                <p>Height: {character.height}</p>
                <p>Homeworld: {character.homeworld}</p>
              </Card>
              {/* </Skeleton> */}
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
