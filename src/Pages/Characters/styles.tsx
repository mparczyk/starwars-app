import { Card } from 'antd';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledImg = styled.img`
  width: 100%;
  height: 100%;
`;

export const StyledCard = styled(Card)`
  max-height: 20%;
  max-width: 100 px;
  background-color: rgb(38, 40, 43);
  border-color: transparent;

  .ant-card-body {
    background-color: rgb(38, 40, 43);
  }
`;

export const StyledLink = styled(Link)`
  color: yellow;
`;

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

export const MainWrapper = styled.main`
  display: flex;
  flex-direction: row;
  background-color: rgb(38, 40, 43);
  width: 80%;
  height: 100%;
  padding: 16px;
  gap: 16px;
  border-radius: 8px;
`;

export const StyledAside = styled.aside`
  display: flex;
  width: 50%;
  height: 100%;
  background-color: transparent;
`;

export const StyledSection = styled.section`
  width: 50%;
  height: 100%;
  padding-left: 16px;
  border-radius: 8px;
  background-color: rgb(48, 60, 63);
`;
