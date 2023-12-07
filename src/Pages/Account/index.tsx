import type { CollapseProps } from "antd";
import { Collapse } from "antd";
import { useAccountQuery } from "../../queries/queries";

const items: CollapseProps["items"] = [
  {
    key: "1",
    label: "This is panel header 1",
    children: <p>text</p>,
  },
];

export const AccountCollapse = (): JSX.Element => {
  const { data: accountData } = useAccountQuery();
  return (
    <Collapse
      items={[
        {
          key: "1",
          label: `${accountData?.data.email}`,
          children: <p>{accountData?.data.name}</p>,
        },
      ]}
      bordered={false}
      defaultActiveKey={["1"]}
      style={{ backgroundColor: "white" }}
    />
  );
};
