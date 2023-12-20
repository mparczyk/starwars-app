import { Button, ConfigProvider, Form, Input, Space } from "antd";
import { useNavigate } from "react-router-dom";

import type { LoginType } from "../../types/types";

import { useSignInMutation } from "../../api/authentication/queries";

import { FormWrapper, LoginTitle, StyledForm } from "./styles";

export const SignInPage = (): JSX.Element => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const { mutate: signInFetch } = useSignInMutation(navigate);

  return (
    <ConfigProvider
      theme={{
        components: {
          Form: {
            labelColor: "yellow",
          },
          Button: {
            colorPrimary: "yellow",
            colorPrimaryActive: "yellow",
            colorPrimaryHover: "yellow",
            primaryColor: "rgba(0, 0, 0, 0.88)",
            fontWeight: "500",
          },
        },
      }}
    >
      <FormWrapper>
        <StyledForm
          form={form}
          name="login"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: true }}
          onFinish={signInFetch}
        >
          <LoginTitle>Login</LoginTitle>
          <Form.Item<LoginType>
            label="Email"
            name="email"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item<LoginType>
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Space>
              <Button type="primary" htmlType="submit">
                Login
              </Button>
              <Button type="text" onClick={() => navigate("/auth/register")}>
                Register
              </Button>
            </Space>
          </Form.Item>
        </StyledForm>
      </FormWrapper>
    </ConfigProvider>
  );
};
