import { useState } from "react";
import { Typography } from "antd";
import { useTranslation } from "react-i18next";

import { localStorageLanguageKey } from "../../i18n/lang";

export const LanguageSwitcherEnglish = ({
  handleOnClick,
}: {
  handleOnClick: (lng: string) => void;
}): JSX.Element => {
  const { i18n } = useTranslation();
  return (
    <Typography.Text
      style={{ color: "white" }}
      strong={i18n.resolvedLanguage === "en"}
      onClick={() => handleOnClick("en")}
    >
      EN
    </Typography.Text>
  );
};
