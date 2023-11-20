import { Link } from "react-router-dom";
import { useState } from "react";
import { List, Card, Pagination } from "antd";

import type { IStarships } from "../../types/types";

import { useStarshipsQuery } from "../../queries/queries";

export const StarshipsPage = (): JSX.Element => {
  const [pageNum, setPageNum] = useState(1);
  const { data: starships } = useStarshipsQuery(pageNum);

  return (
    <>
      <List
        grid={{ gutter: 16, column: 3 }}
        dataSource={starships?.results}
        renderItem={(starship: IStarships) => {
          const starshipsId = starship.url.split("/");
          const id = starshipsId[5];
          return (
            <List.Item>
              <Card
                title={<Link to={`/starships/${id}`}>{starship.name}</Link>}
              >
                <p>{starship.model}</p>
                <p>{starship.length}</p>
                <p>{starship.pilots}</p>
                <p>{starship.passengers}</p>
              </Card>
            </List.Item>
          );
        }}
      />
      <Pagination
        style={{ backgroundColor: "white", width: "500px" }}
        pageSize={10}
        total={starships?.count}
        onChange={(page) => {
          setPageNum(page);
        }}
      />
    </>
  );
};
