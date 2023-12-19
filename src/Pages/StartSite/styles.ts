import { Layout, Menu } from "antd";
import styled from "styled-components";

const { Header, Content, Footer } = Layout;

export const StyledLayout = styled(Layout)`
  height: 100vh;
  background-image: url(https://coursework.vschool.io/content/images/2016/08/iirl45r4u6vg4y6plviu.jpg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  opacity: 0.9;

  .ant-layout-content {
    overflow-y: auto;
  }
  .ant-pagination {
  }
`;

export const StyledHeader = styled(Header)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  background-color: black;
`;

export const StyledContent = styled(Content)`
  padding: 50px;
  height: 100%;
  width: 100%;
`;

export const StyledMenu = styled(Menu)`
  display: flex;
  justify-content: center;
  background-color: transparent;
  width: 100%;
  color: yellow;
  font-size: 1.3em;
`;

export const StyledFooter = styled(Footer)`
  text-align: center;
  background-color: black;
  color: yellow;
`;
