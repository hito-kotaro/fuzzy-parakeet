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
import useApproveRequestList from '../../hooks/useApproveRequestList';
import { approveRequestType } from '../../types/approveRequestType';
import ApproveDetailTemplate from './ApproveDetailTemplate';
import useTemplate from '../../hooks/useTemplate';
import useUserAgent from '../../hooks/useUserAgent';
import { defaultAR } from '../../lib/defaultData';

type Props = {
  data: userType;
  updateUserInfoTemplateState: templateType;
  updateUserAttributeTemplateState: templateType;
  close: () => void;
  toggleModal: () => void;
};

const UserDetailTemplate: VFC<Props> = (props) => {
  const detailTemplateState = useTemplate(false);
  const [menu, setMenu] = useState<dropDownItem[]>([]);
  const [approveRequest, setApproveRequest] = useState<approveRequestType>(defaultAR);
  const { ARList } = useApproveRequestList();
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
  const display = 'translate-x-0 opacity-100';
  const hidden = '-translate-x-full opacity-0';
  const { isSafari } = useUserAgent();
  const className = isSafari ? 'switch-components-safari' : 'switch-components';
  const dummy = (id: number) => {
    const ar = ARList.filter((a: approveRequestType) => {
      return a.id === id;
    });
    setApproveRequest(ar[0]);
    detailTemplateState.open();
  };

  useEffect(() => {
    console.log(approveRequest);
  }, [approveRequest]);
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

  // UserIDでアクティビティをフィルター
  useEffect(() => {
    fetchApproveRequest();
    filterByUserId(data.id);
    makeMenu();
  }, [data]);

  return (
    <div className="bg-base h-full">
      <div
        className={`${className} z-40 ${detailTemplateState.isOpen ? display : hidden}`}
      >
        <ApproveDetailTemplate data={approveRequest} close={detailTemplateState.close} />
      </div>

      <DetailHeader
        name={data.name}
        date={data.created_at}
        title="最近のアクティビティ"
        closeDetail={close}
        iconSize="large"
        dropDownItems={menu}
      />
      <div className="">
        <PrimaryList list={list} onClick={dummy} />
      </div>
    </div>
  );
};

export default UserDetailTemplate;
