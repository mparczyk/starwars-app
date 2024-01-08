import { Button, ConfigProvider, Form, Input, Space } from "antd";
import { useNavigate } from "react-router-dom";

import type { RegisterType } from "../../types/types";

import { useSignUpMutation } from "../../api/authentication/queries";

import { FormWrapper, LoginTitle, StyledForm } from "./styles";
import { useTranslation } from "react-i18next";

export const SignUpPage = (): JSX.Element => {
  const { t } = useTranslation();
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
          requiredMark={"optional"}
          onFinish={signUpFetch}
        >
          <LoginTitle>{t("signUp:title")}</LoginTitle>
          <Form.Item<RegisterType>
            label="Name"
            name="name"
            rules={[{ required: true, message: `${t("signUp:name")}` }]}
          >
            <Input />
          </Form.Item>
          <Form.Item<RegisterType>
            label="Email"
            name="email"
            rules={[{ required: true, message: `${t("signUp:email")}` }]}
          >
            <Input />
          </Form.Item>

          <Form.Item<RegisterType>
            label="Password"
            name="password"
            rules={[{ required: true, message: `${t("signUp:password")}` }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Space>
              <Button type="primary" htmlType="submit">
                Register
              </Button>
              <Button type="text" onClick={() => navigate("/auth/login")}>
                Login
              </Button>
            </Space>
          </Form.Item>
        </StyledForm>
      </FormWrapper>
    </ConfigProvider>
  );
};
