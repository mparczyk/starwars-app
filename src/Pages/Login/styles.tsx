import styled from "styled-components";
import { Form } from "antd";

export const StyledForm = styled(Form)`
  background-color: rgb(38, 40, 43);
  width: 400px;
  height: 300px;
  padding: 24px;
  border-radius: 12px;
`;

export const FormWrapper = styled.main`
  backgroun-color: transparent;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`;

export const LoginTitle = styled.h2`
  text-align: center;
  margin: 0px;
  padding-bottom: 32px;
  color: yellow;
`;

export const LoginScreenTitle = styled.h1`
  text-align: center;
  margin: 0px;
  padding-bottom: 32px;
  color: yellow;
`;
