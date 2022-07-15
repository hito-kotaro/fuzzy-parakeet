import React from 'react';
import { useRecoilState } from 'recoil';
import { userListState } from '../stores/userListState';

const useUserList = () => {
  const [userList, setUserList] = useRecoilState(userListState);
  return { userList, setUserList };
};

export default useUserList;
