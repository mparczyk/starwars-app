import { Link } from "react-router-dom";
import { useState } from "react";
import { List, Card, Pagination } from "antd";

import type { IPlanet } from "../../types/types";

import { usePlanetsQuery } from "../../queries/queries";

export const PlanetsPage = (): JSX.Element => {
  const [pageNum, setPageNum] = useState(1);
  const { data: planets } = usePlanetsQuery(pageNum);

  return (
    <>
      <List
        grid={{ gutter: 16, column: 3 }}
        dataSource={planets?.results}
        renderItem={(planet: IPlanet) => {
          const planetsId = planet.url.split("/");
          const id = planetsId[5];
          return (
            <List.Item>
              <Card title={<Link to={`/planets/${id}`}>{planet.name}</Link>}>
                <p>{planet.residents}</p>
              </Card>
            </List.Item>
          );
        }}
      />
      <Pagination
        style={{ backgroundColor: "white", width: "500px" }}
        pageSize={10}
        total={planets?.count}
        onChange={(page) => {
          setPageNum(page);
        }}
      />
    </>
  );
};
