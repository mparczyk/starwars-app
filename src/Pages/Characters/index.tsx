import { useCharactersQuery } from "../../queries/queries";
import InfiniteScroll from "react-infinite-scroll-component";
import { List, Card, Pagination } from "antd";
import { IPagination, IPerson } from "../../types";
import { Link } from "react-router-dom";
import { request } from "../../utils/http";
import { useState } from "react";

type PaginationPosition = "top" | "bottom" | "both";

type PaginationAlign = "start" | "center" | "end";

export const CharacterPage = (): JSX.Element => {
  const [position, setPosition] = useState<PaginationPosition>("bottom");
  const [align, setAlign] = useState<PaginationAlign>("center");
  const [pageNum, setPageNum] = useState<number>(1);
  const { data: characters } = useCharactersQuery(pageNum);
  return (
    <>
      <List
        pagination={{
          position,
          align,
          pageSize: 10,
          total: 85,
          onChange: (page) => {
            setPageNum(page);
          },
        }}
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
                <p>{character.gender}</p>
                <p>{character.gender}</p>
                <p>{character.gender}</p>
                <p>{character.gender}</p>
              </Card>
            </List.Item>
          );
        }}
      />
    </>
  );
};
