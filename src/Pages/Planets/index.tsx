import { usePlanetsQuery } from "../../queries/queries";
import { List, Card } from "antd";
import { IPagination, IPlanet } from "../../types/types";
import { Link } from "react-router-dom";
import { useInfiniteQuery } from "@tanstack/react-query";
import { request } from "../../utils/http";

export const PlanetsPage = (): JSX.Element => {
  const {
    fetchNextPage,
    fetchPreviousPage,
    hasNextPage,
    hasPreviousPage,
    isFetchingNextPage,
    isFetchingPreviousPage,
    ...result
  } = useInfiniteQuery({
    queryKey: ["planets"],
    queryFn: ({ pageParam = 1 }) =>
      request<IPagination<IPlanet>>(
        "get",
        `https://swapi.dev/api/planets/?page=${pageParam}`
      ),
    ...options,
    getNextPageParam: (lastPage, allPages) => lastPage.nextCursor,
    getPreviousPageParam: (firstPage, allPages) => firstPage.prevCursor,
  });

  return (
    <List
      grid={{ gutter: 16, column: 3 }}
      dataSource={planets?.results}
      renderItem={(planet: IPlanet) => {
        const filmsId = planet.url.split("/");
        const id = filmsId[5];
        return (
          <List.Item>
            <Card title={<Link to={`/planets/${id}`}>{planet.name}</Link>}>
              <p>{planet.residents}</p>
            </Card>
          </List.Item>
        );
      }}
    />
  );
};
