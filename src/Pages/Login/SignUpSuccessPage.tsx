import { Button } from "antd";
import { LoginTitle } from "./styles";

export const SignUpSuccessPage = (): JSX.Element => {
  return (
    <div>
      <LoginTitle>Success! Now you can Sign in to your Account!</LoginTitle>
      <Button>Login Page</Button>
    </div>
  );
};
