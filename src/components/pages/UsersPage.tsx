import { IconCheckCircle } from '@supabase/ui';
import React, { useEffect } from 'react';
import useUsersPage from '../../hooks/useUsersPage';
import { dropDownItem } from '../../types/dropdownType';
import PrimaryModal from '../molecules/PrimaryModal';
import ListTemplate from '../templates/ListTemplate';
import UserAttributeUpdateTemplate from '../templates/UserAttributeUpdateTemplate';
import UserCreateTemplate from '../templates/UserCreateTemplate';
import UserDetailTemplate from '../templates/UserDetailTemplate';
import UserInfoUpdateTemplate from '../templates/UserInfoUpdateTemplate';

const UsersPage = () => {
  const {
    list,
    user,
    listTemplateState,
    createTemplateState,
    detailTemplateState,
    updateUserInfoTemplateState,
    updateUserAttributeTemplateState,
    modal,
    deleteExec,
    onClickListItem,
    filterList,
  } = useUsersPage();

  const display = 'translate-x-0 opacity-100';
  const hidden = '-translate-x-full opacity-0';

  useEffect(() => {
    filterList();
  }, []);

  const myMenu: dropDownItem[] = [
    {
      icon: <IconCheckCircle />,
      onClick: updateUserInfoTemplateState.open,
      text: 'ユーザー情報更新',
      divider: false,
    },
  ];

  const masterMenu: dropDownItem[] = [
    {
      icon: <IconCheckCircle />,
      onClick: updateUserAttributeTemplateState.open,
      text: 'ユーザー属性変更',
      divider: false,
    },
    {
      icon: <IconCheckCircle stroke="red" />,
      onClick: modal.toggle,
      text: 'ユーザー削除',
      divider: true,
    },
  ];

  return (
    <>
      <PrimaryModal
        onCancel={modal.toggle}
        onConfirm={deleteExec}
        toggle={modal.toggle}
        visible={modal.visible}
        name={user.name}
      />
      <div
        className={` switch-components z-30 ${
          listTemplateState.isOpen ? display : hidden
        }`}
      >
        <ListTemplate
          title="Users"
          listData={list}
          onClick={onClickListItem}
          onClickPlus={createTemplateState.open}
        />
      </div>

      <div
        className={` switch-components z-30 ${
          detailTemplateState.isOpen ? display : hidden
        }`}
      >
        <UserDetailTemplate
          data={user}
          close={detailTemplateState.close}
          // masterならmasterMenuを、idが自分と一致したらmyIdを渡す
          menuItem={myMenu}
        />
      </div>

      <div
        className={` switch-components z-40 ${
          updateUserInfoTemplateState.isOpen ? display : hidden
        }`}
      >
        <UserInfoUpdateTemplate
          close={updateUserInfoTemplateState.close}
          name={user.name}
        />
      </div>

      <div
        className={` switch-components z-40 ${
          updateUserAttributeTemplateState.isOpen ? display : hidden
        }`}
      >
        <UserAttributeUpdateTemplate
          close={updateUserAttributeTemplateState.close}
          user={user}
        />
      </div>

      <div
        className={` switch-components z-30 ${
          createTemplateState.isOpen ? display : hidden
        }`}
      >
        <UserCreateTemplate close={createTemplateState.close} />
      </div>
    </>
  );
};

export default UsersPage;
