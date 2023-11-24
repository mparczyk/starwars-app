import { Outlet, useMatches } from 'react-router-dom';

import { menu } from './menuItems';
import { StyledContent, StyledHeader, StyledLayout, StyledMenu, StyledFooter } from './styles';
import { ConfigProvider, Menu } from 'antd';
import { Language } from '../../i18n/lang';

export const StartSite = (): JSX.Element => {
  const matches = useMatches();
  Object.entries(Language).forEach(([key, value]) => console.log(key, value));

  return (
    <StyledLayout>
      <StyledHeader>
        <div className='demo-logo' />
        <StyledMenu mode='horizontal' defaultSelectedKeys={[matches.at(-1)?.id ?? '']} items={menu} />
        {/* <div>
          {Object.keys(lngs).map((lng) => (
            <button key={lng} style={{ fontWeight: i18n.resolvedLanguage === lng ? 'bold' : 'normal' }} type="submit" onClick={() => i18n.changeLanguage(lng)}>
              {lngs[lng]}
            </button>
          ))}
        </div> */}
      </StyledHeader>
      <StyledContent>
        <Outlet />
      </StyledContent>
      <StyledFooter>Star Wars App ©2023 Created by Marek</StyledFooter>
    </StyledLayout>
  );
};
