import { Button, ConfigProvider, Form, Input, Space } from "antd";
import { useNavigate } from "react-router-dom";

import type { LoginType } from "../../types/types";

import { useSignInMutation } from "../../api/authentication/queries";

import { FormWrapper, LoginTitle, StyledForm } from "./styles";
import { useTranslation } from "react-i18next";

export const SignInPage = (): JSX.Element => {
  const { t } = useTranslation();
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
          requiredMark={"optional"}
          onFinish={signInFetch}
        >
          <LoginTitle>{t("signIn:title")}</LoginTitle>
          <Form.Item<LoginType>
            label="Email"
            name="email"
            rules={[{ required: true, message: `${t("signIn:username")}` }]}
          >
            <Input />
          </Form.Item>

          <Form.Item<LoginType>
            label={t("signIn:passwordLabel")}
            name="password"
            rules={[{ required: true, message: `${t("signIn:password")}` }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Space>
              <Button type="primary" htmlType="submit">
                {t("signIn:loginButton")}
              </Button>
              <Button type="text" onClick={() => navigate("/auth/register")}>
                {t("signIn:registerButton")}
              </Button>
            </Space>
          </Form.Item>
        </StyledForm>
      </FormWrapper>
    </ConfigProvider>
  );
};
