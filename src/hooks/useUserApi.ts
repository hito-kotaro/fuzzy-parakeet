import React from 'react';
import { AxiosResponse } from 'axios';
import { createAxiosTokenInstance } from '../lib/axiosInstance';
import useLoading from './useLoading';
import useUserList from './useUserList';
import { createUserType } from '../types/usersType';
import useUserInfo from './useUserInfo';

const useUserApi = () => {
  const { setIsLoading } = useLoading();
  const { setUserList } = useUserList();
  const { setUserInfo } = useUserInfo();
  const authInstance = createAxiosTokenInstance();

  // ログインしたときにユーザー情報を取得するようの関数を作成
  // ホーム画面に出力するようの情報を取得
  const fetchUserInfo = async () => {
    try {
      setIsLoading(true);
      const userId = localStorage.getItem('id');
      const result: AxiosResponse = await authInstance.get(`/user/${userId}`);
      console.log(result.data);
      setIsLoading(false);
      setUserInfo(result.data);
    } catch {
      alert('取得失敗');
      setIsLoading(false);
    }
  };

  const fetchUserAll = async () => {
    try {
      setIsLoading(true);
      const result: AxiosResponse = await authInstance.get('/user');
      console.log(result.data.users);
      setUserList(result.data.users);
      setIsLoading(false);
    } catch (error) {
      alert('取得失敗');
      setIsLoading(false);
    }
  };

  const createUser = async (newUser: createUserType) => {
    try {
      setIsLoading(true);
      console.log(newUser);
      const result: AxiosResponse = await authInstance.post('/user/create/', newUser);
      console.log(result.data);
      fetchUserAll();
      setIsLoading(false);
    } catch {
      alert('取得失敗');
      setIsLoading(false);
    }
  };

  return { fetchUserInfo, fetchUserAll, createUser };
};

export default useUserApi;
