import { useTranslation } from "react-i18next";

import { Language, localStorageLanguageKey } from "../../i18n/lang";
import { StyledText } from "./styles";

export const LanguageSwitcher = (): JSX.Element => {
  const { t, i18n } = useTranslation();

  const handleOnClick = (language: string) => {
    i18n.changeLanguage(language);
    localStorage.setItem(localStorageLanguageKey, language);
  };

  return (
    <div style={{ display: "flex", width: "50px" }}>
      <StyledText
        strong={i18n.resolvedLanguage === Language.EN}
        onClick={() => handleOnClick(Language.EN)}
      >
        EN
      </StyledText>
      <StyledText>/</StyledText>
      <StyledText
        strong={i18n.resolvedLanguage === Language.DE}
        onClick={() => handleOnClick(Language.DE)}
      >
        DE
      </StyledText>
    </div>
  );
};
