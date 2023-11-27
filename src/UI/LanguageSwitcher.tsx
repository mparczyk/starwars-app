import { useState } from 'react';
import { Typography } from 'antd';
import { useTranslation } from 'react-i18next';
import i18n from '../i18n/i18n';
import { localStorageLanguageKey } from '../i18n/lang';

export const LanguageSwitcher = (): JSX.Element => {
  const [active, setActive] = useState(true);
  const { t } = useTranslation();

  const handleOnClick = () => {
    i18n.changeLanguage('en');
    localStorage.setItem(localStorageLanguageKey, 'en');
  };

  return (
    <>
      <Typography.Text style={{ color: 'white' }} strong={i18n.resolvedLanguage === 'en'} onClick={handleOnClick}>
        EN
      </Typography.Text>
      <Typography.Text style={{ color: 'white' }}> / </Typography.Text>

      <Typography.Text style={{ color: 'white' }} strong={i18n.resolvedLanguage === 'de'} onClick={handleOnClick}>
        DE
      </Typography.Text>
    </>
  );
};
