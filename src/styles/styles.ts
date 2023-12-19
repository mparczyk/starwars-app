import { Card, Skeleton } from "antd";
import { Link } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export const GlobalStyles = createGlobalStyle`
  html {
    font-size: 10px;
    min-height: 100vh;
  }
  body {
    margin: 0;
    min-height: 100vh;
  }`;

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

export const StyledSkeleton = styled(Skeleton)`
  background-color: rgba(38, 40, 43, 0.8);
  border-radius: 8px;
  height: 80%;
  width: 100%;
`;
