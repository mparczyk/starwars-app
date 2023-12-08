import { Button, Collapse } from "antd";
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
  return (
    <Collapse
      items={[
        {
          key: "1",
          label: `${accountData?.data.email}`,
          children: (
            <>
              <p>{accountData?.data.name}</p>
              <Button type="text" onClick={() => handleOnClick(navigate)}>
                Logout
              </Button>
            </>
          ),
        },
      ]}
      bordered={false}
      defaultActiveKey={["1"]}
      style={{ backgroundColor: "white" }}
    />
  );
};
