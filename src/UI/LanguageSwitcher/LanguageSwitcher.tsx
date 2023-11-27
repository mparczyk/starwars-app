import { useState } from "react";
import { Typography } from "antd";
import { useTranslation } from "react-i18next";

import { localStorageLanguageKey } from "../../i18n/lang";
import { LanguageSwitcherEnglish } from "./SwitcherEn";
import { LanguageSwitcherDeutsch } from "./SchwiterDe";

export const LanguageSwitcher = (): JSX.Element => {
  const { t, i18n } = useTranslation();

  const handleOnClick = (lng: string) => {
    i18n.changeLanguage(lng);
    localStorage.setItem(localStorageLanguageKey, lng);
  };

  return (
    <>
      <LanguageSwitcherEnglish handleOnClick={handleOnClick} />
      <Typography.Text style={{ color: "white" }}> / </Typography.Text>
      <LanguageSwitcherDeutsch handleOnClick={handleOnClick} />
    </>
  );
};
