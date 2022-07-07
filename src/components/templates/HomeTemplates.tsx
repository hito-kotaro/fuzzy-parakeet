import { IconLogOut, IconSettings } from '@supabase/ui';
import React, { VFC } from 'react';
import UserCard from '../organisms/Cards/UserCard';
import HomeHeader from '../organisms/Headers/HomeHeader';
import MyWorkList from '../organisms/Lists/MyWorkList';
import useLogin from '../../hooks/useLogin';
import { dropDownItem } from '../../types/Dropdown/dropDownItemType';

type Props = {
  title: string;
};

const HomeTemplates: VFC<Props> = (props) => {
  const { logout } = useLogin();

  const onClick = () => {
    console.log('click');
  };

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
  return (
    <div>
      <HomeHeader title="ホーム" dropDownItems={itemList} />

      <div className="h-6" />

      <div className="px-3">
        <UserCard team="test" userName="test" />
      </div>

      <div className="h-6" />

      <div className="px-3">
        <MyWorkList />
      </div>
    </div>
  );
};
export default HomeTemplates;
