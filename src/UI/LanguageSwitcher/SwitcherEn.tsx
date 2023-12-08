import { useTranslation } from "react-i18next";

import { StyledText } from "./styles";

export const LanguageSwitcherEnglish = ({
  handleOnClick,
}: {
  handleOnClick: (lng: string) => void;
}): JSX.Element => {
  const { i18n } = useTranslation();
  return (
    <StyledText
      strong={i18n.resolvedLanguage === "en"}
      onClick={() => handleOnClick("en")}
    >
      EN
    </StyledText>
  );
};
