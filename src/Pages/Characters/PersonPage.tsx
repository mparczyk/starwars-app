import { useParams } from 'react-router-dom';
import { Card, Flex } from 'antd';
import { useTranslation, Trans } from 'react-i18next';

import { usePersonQuery } from '../../queries/queries';
import { MainWrapper, StyledAside, StyledSection, Wrapper } from './styles';

export const PersonPage = (): JSX.Element => {
  const { t } = useTranslation();
  const { id } = useParams();
  const { data: person } = usePersonQuery(id!);
  return (
    <Wrapper>
      <MainWrapper>
        <StyledAside>
          <img
            style={{ height: '100%', width: '100%', borderRadius: '8px' }}
            alt='example'
            src='https://icon-library.com/images/darth-vader-icon/darth-vader-icon-2.jpg'
          />
        </StyledAside>
        <StyledSection>
          <h1>{person?.name}</h1>
          <p>Gender: {person?.gender}</p>
          <p>Height: {person?.height} cm</p>
          <p>Mass: {person?.mass} kg</p>
          <p>Hair Color: {person?.hair_color}</p>
          <p>Skin Color: {person?.skin_color}</p>
          <p>{t('description.part2')}</p>
        </StyledSection>
      </MainWrapper>
    </Wrapper>
  );
};
