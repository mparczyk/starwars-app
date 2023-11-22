import { useMoviesQuery } from "../../queries/queries";
import { List, Card } from "antd";
import { IMovie, IPerson } from "../../types/types";
import { Link } from "react-router-dom";
import Meta from "antd/es/card/Meta";

export const MoviesPage = (): JSX.Element => {
  const { data: movies } = useMoviesQuery();

  return (
    <List
      grid={{ gutter: 16, column: 3 }}
      dataSource={movies?.results}
      renderItem={(film: IMovie) => {
        const filmsId = film.url.split("/");
        const id = filmsId[5];
        return (
          <List.Item>
            <Card
              cover={
                <img
                  alt="example"
                  src="https://media.comicbook.com/uploads1/2014/12/star-wars-episode-iv-ogn-hc-cover-granov-115580.jpg"
                />
              }
            >
              <Meta title={<Link to={`/starships/${id}`}>{film.title}</Link>} />
            </Card>
          </List.Item>
        );
      }}
    />
  );
};
