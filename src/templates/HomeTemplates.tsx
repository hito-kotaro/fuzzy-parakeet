import { IconClipboard, IconCopy, IconTrash } from '@supabase/ui';
import React, { VFC } from 'react';
import DropdownButton from '../components/atoms/Buttons/DropdownButton';
import useLogin from '../hooks/useLogin';
import { DropDownItem } from '../types/Dropdown/DropDownItemType';

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
  return <DropdownButton itemList={itemList} />;
};

export default HomeTemplates;
