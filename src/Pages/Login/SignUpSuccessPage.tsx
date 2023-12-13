import { Button, ConfigProvider } from "antd";
import { FormWrapper, LoginTitle, SuccessWrapper } from "./styles";
import { useNavigate } from "react-router-dom";

export const SignUpSuccessPage = (): JSX.Element => {
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
          <LoginTitle>Success! Now you can Sign in to your Account!</LoginTitle>
          <Button type="primary" onClick={() => navigate("/auth/login")}>
            Login
          </Button>
        </SuccessWrapper>
      </FormWrapper>
    </ConfigProvider>
  );
};
