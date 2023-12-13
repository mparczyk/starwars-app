import { Button, ConfigProvider, Dropdown, MenuProps, Space } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { useAccountQuery } from "../../queries/queries";
import { localStorageTokenKey } from "../../utils/token";
import { NavigateFunction, useNavigate } from "react-router-dom";

const handleOnClick = (navigate: NavigateFunction) => {
  localStorage.removeItem(localStorageTokenKey);
  navigate("/auth");
};

export const AccountCollapse = (): JSX.Element => {
  const navigate = useNavigate();
  const { data: accountData } = useAccountQuery();

  const items: MenuProps["items"] = [
    {
      key: "1",
      label: (
        <Button type="text" onClick={() => handleOnClick(navigate)}>
          Logout
        </Button>
      ),
    },
  ];

  return (
    <ConfigProvider
      theme={{
        components: {
          Dropdown: {
            colorText: "white",
            colorTextDescription: "rgba(5, 5, 5, 0.06)",
          },
        },
      }}
    >
      <Dropdown menu={{ items }} trigger={["click"]}>
        <Space>
          <DownOutlined />
          {`${accountData?.data.email}`}
        </Space>
      </Dropdown>
    </ConfigProvider>
  );
};
