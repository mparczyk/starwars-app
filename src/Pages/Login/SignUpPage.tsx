import { Button, ConfigProvider, Form, Input, Space } from "antd";
import { useNavigate } from "react-router-dom";

import type { RegisterType } from "../../types/types";

import { useSignUpMutation } from "../../queries/queries";
import { FormWrapper, LoginTitle, StyledForm } from "./styles";

export const SignUpPage = (): JSX.Element => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const { mutate: signUpFetch } = useSignUpMutation(navigate);

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
          name="register"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: true }}
          onFinish={signUpFetch}
        >
          <LoginTitle>Registration</LoginTitle>
          <Form.Item<RegisterType>
            label="Name"
            name="name"
            rules={[{ required: true, message: "Please input your Name" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item<RegisterType>
            label="Email"
            name="email"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item<RegisterType>
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Space>
              <Button type="primary" htmlType="submit">
                Register
              </Button>
              <Button
                type="primary"
                htmlType="submit"
                onClick={() => navigate("/auth/login")}
              >
                Login
              </Button>
            </Space>
          </Form.Item>
        </StyledForm>
      </FormWrapper>
    </ConfigProvider>
  );
};
