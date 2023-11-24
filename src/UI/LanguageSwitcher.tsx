import { useState } from 'react';
import { Typography } from 'antd';
import { useTranslation } from 'react-i18next';
import i18n from '../i18n/i18n';

export const LanguageSwitcher = (): JSX.Element => {
  const [active, setActive] = useState(true);
  const { t } = useTranslation();

  const handleOnClick = () => {
    setActive(prevState => !prevState);
  };

  return (
    <>
      <Typography.Text style={{ color: 'white' }} strong={active} onClick={handleOnClick}>
        EN
      </Typography.Text>
      <Typography.Text style={{ color: 'white' }}> / </Typography.Text>

      <Typography.Text style={{ color: 'white' }} strong={!active} onClick={handleOnClick}>
        DE
      </Typography.Text>
    </>
  );
};
