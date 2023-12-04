import { Button, ConfigProvider, Form, Input } from "antd";

import { FieldType } from "../../types/types";
import { useSignInMutation } from "../../queries/queries";
import { useNavigate } from "react-router-dom";
import { StyledForm } from "./styles";

export const HomePage = (): JSX.Element => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const { mutate: signInFetch } = useSignInMutation(navigate);

  return (
    <ConfigProvider
      theme={{
        components: {
          Form: {
            colorBgBase: "#fff",
          },
        },
      }}
    >
      <div
        style={{
          backgroundColor: "transparent",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          width: "100%",
        }}
      >
        <StyledForm
          form={form}
          name="login"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: 600 }}
          initialValues={{ remember: true }}
          onFinish={signInFetch}
        >
          <Form.Item<FieldType>
            label="Username"
            name="username"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item<FieldType>
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </StyledForm>
      </div>
    </ConfigProvider>
  );
};
