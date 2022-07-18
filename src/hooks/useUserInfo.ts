import React from 'react';
import { useRecoilState } from 'recoil';
import { userInfoState } from '../stores/userInfoState';

const useUserInfo = () => {
  const [userInfo, setUserInfo] = useRecoilState(userInfoState);
  return { userInfo, setUserInfo };
};

export default useUserInfo;
