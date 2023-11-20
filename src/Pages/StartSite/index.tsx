import { Layout, Menu } from "antd";
import { Outlet } from "react-router-dom";

import { menu } from "./menuItems";

const { Header, Content, Footer } = Layout;

export const StartSite = (): JSX.Element => {
  return (
    <Layout
      className="layout"
      style={{
        height: "100vh",
        backgroundImage:
          "url(https://coursework.vschool.io/content/images/2016/08/iirl45r4u6vg4y6plviu.jpg)",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        opacity: "0.9",
      }}
    >
      <Header
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "black",
        }}
      >
        <div className="demo-logo" />
        <Menu
          style={{
            display: "flex",
            justifyContent: "center",
            backgroundColor: "transparent",
            width: "100%",
            color: "yellow",
            fontSize: "1.3em",
          }}
          mode="horizontal"
          defaultSelectedKeys={["start"]}
          items={menu}
        />
      </Header>
      <Content style={{ padding: "50px", height: "100%", width: "100%" }}>
        <Outlet />
      </Content>
      <Footer
        style={{
          textAlign: "center",
          backgroundColor: "black",
          color: "yellow",
        }}
      >
        Star Wars App ©2023 Created by Marek
      </Footer>
    </Layout>
  );
};
