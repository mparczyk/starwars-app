import { Link } from "react-router-dom";
import { useState } from "react";
import { List, Card, Pagination } from "antd";

import type { IStarships } from "../../types/types";

import { useStarshipsQuery } from "../../queries/queries";
import Meta from "antd/es/card/Meta";
import { CustomPagination } from "../../UI/Pagination";

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
                cover={
                  <img
                    alt="example"
                    src="https://icon-library.com/images/darth-vader-icon/darth-vader-icon-2.jpg"
                  />
                }
              >
                <Meta
                  title={<Link to={`/starships/${id}`}>{starship.name}</Link>}
                />
              </Card>
            </List.Item>
          );
        }}
      />
      {starships && <CustomPagination totalNum={starships?.count} />}
    </>
  );
};
