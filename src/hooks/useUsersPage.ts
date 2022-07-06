import React, { useState } from 'react';
import { defaultUser } from '../lib/defaultData';
import { usersData } from '../testData/UsersTestData';
import { primaryListItem } from '../types/ListItem/PrimaryListItemType';
import { deleteUserType, userType } from '../types/usersType';
import useModal from './useModal';
import usePrimaryList from './usePrimaryList';
import useTemplate from './useTemplate';

const useUsersPage = () => {
  const [user, setUser] = useState<userType>(defaultUser);
  const { list, setList } = usePrimaryList();
  const listTemplateState = useTemplate(true);
  const createTemplateState = useTemplate(false);
  const detailTemplateState = useTemplate(false);
  const updateUserInfoTemplateState = useTemplate(false);
  const updateUserAttributeTemplateState = useTemplate(false);
  const modal = useModal();

  // 詳細画面に渡す情報をステートにセット
  const onClickListItem = (id: number) => {
    const data = usersData.filter((u: userType) => {
      return u.id === id;
    });
    setUser(data[0]);
    detailTemplateState.open();
  };

  const onClickPlus = () => {
    createTemplateState.open();
  };

  const filterList = () => {
    const primaryList: primaryListItem[] = usersData.map((u) => {
      const item: primaryListItem = {
        id: u.id,
        name: u.name,
        title: u.name,
        description: u.description,
        date: u.created_at,
        badgeColor: 'blue',
        badgeText: '',
      };
      return item;
    });
    setList(primaryList);
  };

  const deleteExec = () => {
    const deleteUser: deleteUserType = {
      id: user.id,
    };
    console.log(deleteUser);
    modal.toggle();
  };

  return {
    listTemplateState,
    detailTemplateState,
    createTemplateState,
    updateUserInfoTemplateState,
    updateUserAttributeTemplateState,
    list,
    user,
    modal,
    onClickListItem,
    deleteExec,
    filterList,
  };
};

export default useUsersPage;
