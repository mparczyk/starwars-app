import { List } from 'antd';
import Meta from 'antd/es/card/Meta';

import type { IMovie } from '../../types/types';

import { useMoviesQuery } from '../../queries/queries';

import { StyledCard, StyledLink } from '../../styles/styles';

export const MoviesPage = (): JSX.Element => {
  const { data: movies } = useMoviesQuery();

  return (
    <List
      grid={{ gutter: 16, column: 4 }}
      dataSource={movies?.results}
      renderItem={(film: IMovie) => {
        const filmsId = film.url.split('/');
        const id = filmsId[5];
        return (
          <List.Item>
            <StyledCard
              cover={
                <img
                  alt='example'
                  src='https://media.comicbook.com/uploads1/2014/12/star-wars-episode-iv-ogn-hc-cover-granov-115580.jpg'
                />
              }
            >
              <Meta title={<StyledLink to={`/starships/${id}`}>{film.title}</StyledLink>} />
            </StyledCard>
          </List.Item>
        );
      }}
    />
  );
};
