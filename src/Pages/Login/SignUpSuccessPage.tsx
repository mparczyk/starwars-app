import { Button, ConfigProvider } from "antd";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { FormWrapper, LoginTitle, SuccessWrapper } from "./styles";

export const SignUpSuccessPage = (): JSX.Element => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <ConfigProvider
      theme={{
        components: {
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
        <SuccessWrapper>
          <LoginTitle>{t("signUp:popUp")}</LoginTitle>
          <Button type="primary" onClick={() => navigate("/auth/login")}>
            Login
          </Button>
        </SuccessWrapper>
      </FormWrapper>
    </ConfigProvider>
  );
};
