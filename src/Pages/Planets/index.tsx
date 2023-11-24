import { useState } from 'react';
import { List } from 'antd';
import Meta from 'antd/es/card/Meta';

import type { IPlanet } from '../../types/types';

import { usePlanetsQuery } from '../../queries/queries';

import { StyledCard, StyledLink } from '../../styles/styles';
import { CustomPagination } from '../../UI/Pagination';

export const PlanetsPage = (): JSX.Element => {
  const [pageNum, setPageNum] = useState(1);
  const { data: planets } = usePlanetsQuery(pageNum);

  return (
    <>
      <List
        grid={{ gutter: 16, column: 4 }}
        dataSource={planets?.results}
        renderItem={(planet: IPlanet) => {
          const planetsId = planet.url.split('/');
          const id = planetsId[5];
          return (
            <List.Item>
              <StyledCard
                cover={<img alt='example' src='https://icon-library.com/images/darth-vader-icon/darth-vader-icon-2.jpg' />}
              >
                <Meta title={<StyledLink to={`/planets/${id}`}>{planet.name}</StyledLink>} />
              </StyledCard>
            </List.Item>
          );
        }}
      />
      {planets && <CustomPagination totalNum={planets?.count} setPageNum={setPageNum} pageNum={pageNum} />}
    </>
  );
};
