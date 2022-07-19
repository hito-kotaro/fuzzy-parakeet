import React, { useEffect, VFC } from 'react';
import { IconLogOut, IconSettings } from '@supabase/ui';
import UserCard from '../organisms/Cards/UserCard';
import HomeHeader from '../organisms/Headers/HomeHeader';
import MyWorkList from '../organisms/Lists/MyWorkList';
import useLogin from '../../hooks/useLogin';
import { dropDownItem } from '../../types/dropdownType';
import useUserApi from '../../hooks/useUserApi';
import useUserInfo from '../../hooks/useUserInfo';
import useTemplate from '../../hooks/useTemplate';
import useUserAgent from '../../hooks/useUserAgent';
import UserInfoUpdateTemplate from './UserInfoUpdateTemplate';

type Props = {
  title: string;
};

const HomeTemplates: VFC<Props> = (props) => {
  const { isSafari } = useUserAgent();
  const className = isSafari ? 'switch-components-safari' : 'switch-components';
  const userConfig = useTemplate(false);
  const { logout } = useLogin();
  const { userInfo } = useUserInfo();
  const display = 'translate-x-0 opacity-100';
  const hidden = '-translate-x-full opacity-0';

  const onClick = () => {
    userConfig.open();
  };

  const { fetchUserInfo } = useUserApi();
  const itemList: dropDownItem[] = [
    { icon: <IconSettings />, onClick, text: 'ユーザー設定', divider: false },
    {
      icon: <IconLogOut stroke="red" />,
      onClick: logout,
      text: 'ログアウト',
      divider: true,
    },
  ];

  const { title } = props;
  useEffect(() => {
    fetchUserInfo();
  }, []);
  return (
    <>
      <div className={` ${className} z-50 ${userConfig.isOpen ? display : hidden}`}>
        <UserInfoUpdateTemplate close={userConfig.close} name={userInfo.name} />
      </div>

      <HomeHeader title="ホーム" dropDownItems={itemList} />

      <div className="h-6" />

      <div className="px-3">
        <UserCard team={userInfo.team} userName={userInfo.name} />
      </div>

      <div className="h-6" />

      <div className="px-3">
        <MyWorkList />
      </div>
    </>
  );
};
export default HomeTemplates;
