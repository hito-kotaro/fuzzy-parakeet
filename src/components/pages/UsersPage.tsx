import React, { useEffect } from 'react';
import useLoading from '../../hooks/useLoading';
import useUserAgent from '../../hooks/useUserAgent';
import useUserApi from '../../hooks/useUserApi';
import useUsersPage from '../../hooks/useUsersPage';
import PrimaryModal from '../molecules/PrimaryModal';
import ListTemplate from '../templates/ListTemplate';
import UserAttributeUpdateTemplate from '../templates/UserAttributeUpdateTemplate';
import UserCreateTemplate from '../templates/UserCreateTemplate';
import UserDetailTemplate from '../templates/UserDetailTemplate';
import UserInfoUpdateTemplate from '../templates/UserInfoUpdateTemplate';
import Loading from '../atoms/Loading';
import useUserList from '../../hooks/useUserList';
import useUserInfo from '../../hooks/useUserInfo';
import useApproveRequestApi from '../../hooks/useApproveRequestApi';
import useApproveRequestList from '../../hooks/useApproveRequestList';
import ApproveDetailTemplate from '../templates/ApproveDetailTemplate';

const UsersPage = () => {
  const { isLoading } = useLoading();
  const { userInfo } = useUserInfo();
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
  const { userList } = useUserList();
  const { fetchUserAll } = useUserApi();
  const { fetchApproveRequest } = useApproveRequestApi();
  const { isSafari } = useUserAgent();
  const { ARList } = useApproveRequestList();
  const className = isSafari ? 'switch-components-safari' : 'switch-components';
  const display = 'translate-x-0 opacity-100';
  const hidden = '-translate-x-full opacity-0';

  // レンダリング時にバックエンドからユーザー一覧を取得
  useEffect(() => {
    fetchUserAll();
    fetchApproveRequest();
  }, []);

  useEffect(() => {
    filterList();
  }, [userList]);

  return (
    <>
      {/* <div
        className={`${className} z-40 ${detailTemplateState.isOpen ? display : hidden}`}
      >
        <ApproveDetailTemplate data={approveRequest} close={detailTemplateState.close} />
      </div> */}

      <PrimaryModal
        onCancel={modal.toggle}
        onConfirm={deleteExec}
        toggle={modal.toggle}
        visible={modal.visible}
        name={user.name}
      />
      <div
        className={` ${className} z-30 ${listTemplateState.isOpen ? display : hidden}`}
      >
        {isLoading ? (
          <div>
            <div className="h-10" />
            <Loading size={64} />
          </div>
        ) : (
          <ListTemplate
            title="ユーザー"
            blankText="ユーザーがいません"
            listData={list}
            onClick={onClickListItem}
            onClickPlus={
              userInfo.role === 'root' || userInfo.role === 'master'
                ? createTemplateState.open
                : undefined
            }
          />
        )}
      </div>

      <div
        className={` ${className} z-30 ${detailTemplateState.isOpen ? display : hidden}`}
      >
        <UserDetailTemplate
          toggleModal={modal.toggle}
          data={user}
          close={detailTemplateState.close}
          updateUserInfoTemplateState={updateUserInfoTemplateState}
          updateUserAttributeTemplateState={updateUserAttributeTemplateState}
        />
      </div>

      <div
        className={` ${className} z-40 ${
          updateUserInfoTemplateState.isOpen ? display : hidden
        }`}
      >
        <UserInfoUpdateTemplate
          close={updateUserInfoTemplateState.close}
          name={user.name}
        />
      </div>

      <div
        className={` ${className} z-40 ${
          updateUserAttributeTemplateState.isOpen ? display : hidden
        }`}
      >
        <UserAttributeUpdateTemplate
          close={updateUserAttributeTemplateState.close}
          user={user}
        />
      </div>

      <div
        className={` ${className} z-30 ${createTemplateState.isOpen ? display : hidden}`}
      >
        <UserCreateTemplate close={createTemplateState.close} />
      </div>
    </>
  );
};

export default UsersPage;
