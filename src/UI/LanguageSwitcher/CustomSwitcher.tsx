import { useTranslation } from "react-i18next";

import { Language, localStorageLanguageKey } from "../../i18n/lang";
import { StyledText } from "./styles";

export const CustomSwitcher = ({
  label,
  value,
}: {
  label: string;
  value: Language;
}): JSX.Element => {
  const { i18n } = useTranslation();

  const handleOnClick = (language: string) => {
    i18n.changeLanguage(language);
    localStorage.setItem(localStorageLanguageKey, language);
    window.location.reload();
  };

  return (
    <StyledText
      strong={i18n.resolvedLanguage === value}
      onClick={() => handleOnClick(value)}
    >
      {label}
    </StyledText>
  );
};
