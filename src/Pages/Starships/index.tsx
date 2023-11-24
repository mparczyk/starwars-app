import { useState } from 'react';
import { List } from 'antd';
import Meta from 'antd/es/card/Meta';

import type { IStarships } from '../../types/types';

import { useStarshipsQuery } from '../../queries/queries';

import { CustomPagination } from '../../UI/Pagination';
import { StyledLink, StyledCard } from '../../styles/styles';

export const StarshipsPage = (): JSX.Element => {
  const [pageNum, setPageNum] = useState(1);
  const { data: starships } = useStarshipsQuery(pageNum);

  return (
    <>
      <List
        grid={{ gutter: 16, column: 4 }}
        dataSource={starships?.results}
        renderItem={(starship: IStarships) => {
          const starshipsId = starship.url.split('/');
          const id = starshipsId[5];
          return (
            <List.Item>
              <StyledCard
                cover={<img alt='example' src='https://icon-library.com/images/darth-vader-icon/darth-vader-icon-2.jpg' />}
              >
                <Meta title={<StyledLink to={`/starships/${id}`}>{starship.name}</StyledLink>} />
              </StyledCard>
            </List.Item>
          );
        }}
      />
      {starships && <CustomPagination totalNum={starships?.count} setPageNum={setPageNum} pageNum={pageNum} />}
    </>
  );
};
