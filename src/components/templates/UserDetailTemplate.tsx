import React, { useEffect, VFC } from 'react';
import usePrimaryList from '../../hooks/usePrimaryList';
import { dropDownItem } from '../../types/dropdownType';
import { userType } from '../../types/usersType';
import PrimaryList from '../molecules/Lists/PrimaryList';
import DetailHeader from '../organisms/Headers/DetailHeader';
import useApproveRequestApi from '../../hooks/useApproveRequestApi';

type Props = {
  data: userType;
  close: () => void;
  menuItem: dropDownItem[];
};

const UserDetailTemplate: VFC<Props> = (props) => {
  const { list, filterByUserId } = usePrimaryList();
  const { data, close, menuItem } = props;
  const { fetchApproveRequest } = useApproveRequestApi();

  const dummy = () => {
    console.log(data.id);
  };

  // UserIDでアクティビティをフィルター
  useEffect(() => {
    fetchApproveRequest();
    filterByUserId(data.id);
    console.log('FIlterByUserID!!');
    console.log(data);
  }, [data]);

  return (
    <div className="bg-base h-full">
      <DetailHeader
        name={data.name}
        date={data.created_at}
        title="最近のアクティビティ"
        closeDetail={close}
        iconSize="large"
        // data.idがcurrent_userと一致すればmyMenuを表示
        // data.role_idが3ならadminMenuを表示する
        dropDownItems={menuItem}
        isDropdown
      />
      <div className="">
        <PrimaryList list={list} onClick={dummy} />
      </div>
    </div>
  );
};

export default UserDetailTemplate;
