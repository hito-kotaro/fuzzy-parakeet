import React, { useEffect } from 'react';
import useUsersPage from '../../hooks/useUsersPage';
import ListTemplate from '../templates/ListTemplate';
import UserCreateTemplate from '../templates/UserCreateTemplate';
import UserDetailTemplate from '../templates/UserDetailTemplate';

const UsersPage = () => {
  const {
    list,
    user,
    listTemplateState,
    createTemplateState,
    detailTemplateState,
    onClickListItem,
    filterList,
    onClickPlus,
  } = useUsersPage();
  const display = 'translate-x-0 opacity-100';
  const hidden = '-translate-x-full opacity-0';

  useEffect(() => {
    filterList();
  }, []);

  const dummy = () => {
    console.log('test');
  };

  return (
    <>
      <div
        className={` switch-components z-30 ${
          listTemplateState.isOpen ? display : hidden
        }`}
      >
        <ListTemplate
          title="Users"
          listData={list}
          onClick={onClickListItem}
          onClickPlus={onClickPlus}
        />
      </div>

      <div
        className={` switch-components z-30 ${
          detailTemplateState.isOpen ? display : hidden
        }`}
      >
        <UserDetailTemplate data={user} close={detailTemplateState.close} />
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
