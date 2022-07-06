import React, { useEffect, VFC } from 'react';
import usePrimaryList from '../../hooks/usePrimaryList';
import { dropDownItem } from '../../types/Dropdown/dropDownItemType';
import { userType } from '../../types/usersType';
import PrimaryList from '../molecules/Lists/PrimaryList';
import DetailHeader from '../organisms/Headers/DetailHeader';

type Props = {
  data: userType;
  close: () => void;
  menuItem: dropDownItem[];
};
const UserDetailTemplate: VFC<Props> = (props) => {
  const { list, filterByUserId } = usePrimaryList();

  const { data, close, menuItem } = props;

  const dummy = () => {
    console.log(data.id);
  };

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
        dropDownItems={menuItem}
        isDropdown
      />
      <div className="h-70% overflow-scroll">
        <PrimaryList list={list} onClick={dummy} />
      </div>
    </div>
  );
};

export default UserDetailTemplate;
