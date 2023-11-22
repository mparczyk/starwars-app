import { Link } from "react-router-dom";
import { useState } from "react";
import { List, Card, Pagination, Skeleton } from "antd";

import type { IPerson } from "../../types/types";

import { useCharactersQuery } from "../../queries/queries";
import Meta from "antd/es/card/Meta";
import { StyledImg } from "./styles";

export const CharacterPage = (): JSX.Element => {
  const [pageNum, setPageNum] = useState(1);
  const {
    isFetching,
    isLoading,
    data: characters,
  } = useCharactersQuery(pageNum);

  return (
    <Skeleton loading={isLoading} active>
      <List
        grid={{ gutter: 16, column: 5 }}
        dataSource={characters?.results}
        renderItem={(character: IPerson) => {
          const charactersId = character.url.split("/");
          const id = charactersId[5];
          return (
            <List.Item>
              <Card
                cover={
                  <StyledImg
                    alt="example"
                    src="https://icon-library.com/images/darth-vader-icon/darth-vader-icon-2.jpg"
                  />
                }
              >
                <Meta
                  title={<Link to={`/starships/${id}`}>{character.name}</Link>}
                />
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
    </Skeleton>
  );
};
