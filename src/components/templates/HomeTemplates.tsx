import { IconClipboard, IconCopy, IconTrash } from '@supabase/ui';
import React, { VFC } from 'react';
import UserCard from '../organisms/Cards/UserCard';
import HomeHeader from '../organisms/Headers/HomeHeader';
import MyWorkList from '../organisms/Lists/MyWorkList';
import useLogin from '../../hooks/useLogin';
import { DropDownItem } from '../../types/Dropdown/DropDownItemType';

type Props = {
  title: string;
};
const HomeTemplates: VFC<Props> = (props) => {
  const { logout } = useLogin();
  const onClick = () => {
    console.log('click');
  };

  const itemList: DropDownItem[] = [
    { icon: <IconClipboard />, onClick, text: 'Duplicate', divider: false },
    { icon: <IconCopy />, onClick, text: 'Copy', divider: false },
    { icon: <IconTrash />, onClick, text: 'Trash', divider: false },
    { icon: <IconClipboard />, onClick: logout, text: 'Logout', divider: true },
  ];

  const { title } = props;
  return (
    <div>
      <HomeHeader title="ホーム" />

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
