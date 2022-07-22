import { IconSettings, IconLogOut } from '@supabase/ui';
import React, { useEffect } from 'react';
import useUserApi from '../../../hooks/useUserApi';
import { dropDownItem } from '../../../types/dropdownType';
import HomeTemplates from '../../templates/Home/HomeTemplates';
import useHomePage from '../../../hooks/Home/useHomePage';
import { display, hidden } from '../../../lib/display';
import UserInfoUpdateTemplate from '../../templates/UserInfoUpdateTemplate';
import useAccountApi from '../../../hooks/useAccountApi';

const HomePage = () => {
  const { isSafari, userConfigTemplate, logout, userInfo } = useHomePage();
  const className = isSafari ? 'switch-components-safari' : 'switch-components';
  const { fetchScore, score } = useAccountApi();
  const { fetchUserInfo } = useUserApi();

  const configUser = () => {
    userConfigTemplate.open();
  };

  const dropdownItem: dropDownItem[] = [
    { icon: <IconSettings />, onClick: configUser, text: 'ユーザー設定', divider: false },
    {
      icon: <IconLogOut stroke="red" />,
      onClick: logout,
      text: 'ログアウト',
      divider: true,
    },
  ];

  useEffect(() => {
    fetchUserInfo();
    fetchScore();
  }, []);
  return (
    <>
      <div
        className={` ${className} z-50 ${userConfigTemplate.isOpen ? display : hidden}`}
      >
        <UserInfoUpdateTemplate close={userConfigTemplate.close} name={userInfo.name} />
      </div>

      <HomeTemplates score={score} isSafari={isSafari} dropdownItem={dropdownItem} />
    </>
  );
};

export default HomePage;
