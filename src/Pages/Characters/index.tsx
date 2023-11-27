import { useState } from "react";
import { List } from "antd";
import Meta from "antd/es/card/Meta";

import type { IPerson } from "../../types/types";

import { useCharactersQuery } from "../../queries/queries";

import { StyledImg, StyledCard, StyledLink } from "./styles";
import { CustomPagination } from "../../UI/Pagination";
import { StyledSkeleton } from "../../styles/styles";

export const CharacterPage = (): JSX.Element => {
  const [pageNum, setPageNum] = useState(1);
  const { isLoading, data: characters } = useCharactersQuery(pageNum);

  return (
    <StyledSkeleton loading={isLoading} active paragraph={{ rows: 10 }}>
      <List
        grid={{ gutter: 16, column: 4 }}
        dataSource={characters?.results}
        renderItem={(character: IPerson) => {
          const charactersId = character.url.split("/");
          const id = charactersId[5];
          return (
            <List.Item>
              <StyledCard
                cover={
                  <StyledImg
                    alt="example"
                    src="https://icon-library.com/images/darth-vader-icon/darth-vader-icon-2.jpg"
                  />
                }
              >
                <Meta
                  title={
                    <StyledLink to={`/characters/${id}`}>
                      {character.name}
                    </StyledLink>
                  }
                />
              </StyledCard>
            </List.Item>
          );
        }}
      />
      {characters && (
        <CustomPagination
          totalNum={characters?.count}
          setPageNum={setPageNum}
          pageNum={pageNum}
        />
      )}
    </StyledSkeleton>
  );
};
