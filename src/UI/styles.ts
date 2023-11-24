import { Pagination } from 'antd';
import styled from 'styled-components';

export const StyledPagination = styled(Pagination)`
  background-color: rgb(38, 40, 43);
  border-radius: 8px;
  width: 40%;

  .ant-pagination-item > a {
    color: yellow;
  }
  .ant-pagination-item-link > span {
    color: yellow;
  }
  .ant-pagination-item-active {
    background-color: black;
    border-color: yellow;
  }
  .ant-pagination-options-size-changer.ant-select > div,
  span {
    background-color: rgb(38, 40, 43);
    border-color: transparent;
    color: yellow;
  }
  .ant-select-item {
    color: yellow;
  }
`;
