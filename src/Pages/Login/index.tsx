import { Outlet } from "react-router-dom";

import {
  StyledContent,
  StyledHeader,
  StyledLayout,
  StyledFooter,
} from "../StartSite/styles";
import { LanguageSwitcher } from "../../UI/LanguageSwitcher/LanguageSwitcher";

export const LoginPage = (): JSX.Element => {
  return (
    <StyledLayout>
      <StyledHeader>
        <LanguageSwitcher />
      </StyledHeader>
      <StyledContent>
        <Outlet />
      </StyledContent>
      <StyledFooter>Star Wars App ©2023 Created by Marek</StyledFooter>
    </StyledLayout>
  );
};
