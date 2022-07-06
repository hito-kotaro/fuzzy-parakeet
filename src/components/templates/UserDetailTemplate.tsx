import { IconCheckCircle } from '@supabase/ui';
import React, { useEffect, VFC } from 'react';
import usePrimaryList from '../../hooks/usePrimaryList';
import { dropDownItem } from '../../types/Dropdown/dropDownItemType';
import { templateType } from '../../types/templateType';
import { userType } from '../../types/usersType';
import PrimaryList from '../molecules/Lists/PrimaryList';
import DetailHeader from '../organisms/Headers/DetailHeader';
import UserUpdateTemplate from './UserUpdateTemplate';

type Props = {
  data: userType;
  close: () => void;
  updateUserTemplateState: templateType;
};
const UserDetailTemplate: VFC<Props> = (props) => {
  const { list, filterByUserId } = usePrimaryList();

  const { data, close, updateUserTemplateState } = props;

  const dummy = () => {
    console.log(data.id);
  };

  const myMenu: dropDownItem[] = [
    {
      icon: <IconCheckCircle />,
      onClick: updateUserTemplateState.open,
      text: 'ユーザー情報更新',
      divider: false,
    },
  ];

  const masterMenu: dropDownItem[] = [
    {
      icon: <IconCheckCircle />,
      onClick: dummy,
      text: 'ユーザー属性変更',
      divider: false,
    },
    {
      icon: <IconCheckCircle stroke="red" />,
      onClick: dummy,
      text: 'ユーザー削除',
      divider: true,
    },
  ];

  // userDataをPrimaryListに入れる
  useEffect(() => {
    filterByUserId(data.id);
  }, [data]);

  return (
    <div className="bg-base h-screen">
      <DetailHeader
        name={data.name}
        date={data.created_at}
        title="最近のアクティビティ"
        closeDetail={close}
        iconSize="large"
        // data.idがcurrent_userと一致すればmyMenuを表示
        // data.roleIdが3ならadminMenuを表示する
        dropDownItems={myMenu}
        isDropdown
      />
      <div className="h-70% overflow-scroll">
        <PrimaryList list={list} onClick={dummy} />
      </div>
    </div>
  );
};

export default UserDetailTemplate;
