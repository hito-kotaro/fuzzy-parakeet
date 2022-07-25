import React, { useEffect, useState, VFC } from 'react';
import { IconCheckCircle } from '@supabase/ui';
import usePrimaryList from '../../hooks/usePrimaryList';
import { dropDownItem } from '../../types/dropdownType';
import { userType } from '../../types/usersType';
import PrimaryList from '../molecules/Lists/PrimaryList';
import DetailHeader from '../organisms/Headers/DetailHeader';
import useApproveRequestApi from '../../hooks/useApproveRequestApi';
import useUserInfo from '../../hooks/useUserInfo';
import { templateType } from '../../types/templateType';

type Props = {
  data: userType;
  updateUserInfoTemplateState: templateType;
  updateUserAttributeTemplateState: templateType;
  close: () => void;
  toggleModal: () => void;
};

const UserDetailTemplate: VFC<Props> = (props) => {
  const [menu, setMenu] = useState<dropDownItem[]>([]);
  const [isDropdown, setIsDropdown] = useState<boolean>(false);
  const { userInfo } = useUserInfo();
  const { list, filterByUserId } = usePrimaryList();
  const {
    data,
    updateUserInfoTemplateState,
    updateUserAttributeTemplateState,
    close,
    toggleModal,
  } = props;
  const { fetchApproveRequest } = useApproveRequestApi();
  console.log(list);
  const dummy = () => {};
  // ログイン中のユーザーと開いた詳細のユーザーによって表示するメニューを作成する。
  const makeMenu = () => {
    const newMenu: dropDownItem[] = [];

    const updatePasswordbuteMenu: dropDownItem = {
      icon: <IconCheckCircle />,
      onClick: updateUserInfoTemplateState.open,
      text: 'ユーザー情報更新',
      divider: false,
    };

    const updateAttributeMenu: dropDownItem = {
      icon: <IconCheckCircle />,
      onClick: updateUserAttributeTemplateState.open,
      text: 'ユーザー属性変更',
      divider: false,
    };

    const deleteUserMenu: dropDownItem = {
      icon: <IconCheckCircle stroke="red" />,
      onClick: toggleModal,
      text: 'ユーザー削除',
      divider: true,
    };

    if (data.id === userInfo.id) {
      newMenu.push(updatePasswordbuteMenu);
    }

    if (userInfo.role === 'root' || userInfo.role === 'master') {
      newMenu.push(updateAttributeMenu);
      newMenu.push(deleteUserMenu);
    }

    setMenu(newMenu);
  };

  const checkMenuDisplay = () => {
    if (menu.length > 0) {
      setIsDropdown(true);
    } else {
      setIsDropdown(false);
    }
  };
  // UserIDでアクティビティをフィルター
  useEffect(() => {
    fetchApproveRequest();
    filterByUserId(data.id);
    makeMenu();
  }, [data]);

  // Dropdownを表示するかどうかの判定
  useEffect(() => {
    checkMenuDisplay();
  }, [menu]);
  return (
    <div className="bg-base h-full">
      <DetailHeader
        name={data.name}
        date={data.created_at}
        title="最近のアクティビティ"
        closeDetail={close}
        iconSize="large"
        dropDownItems={menu}
        isDropdown={isDropdown}
      />
      <div className="">
        <PrimaryList list={list} onClick={dummy} />
      </div>
    </div>
  );
};

export default UserDetailTemplate;
