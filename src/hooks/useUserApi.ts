import React from 'react';
import { AxiosResponse } from 'axios';
import { createAxiosTokenInstance } from '../lib/axiosInstance';
import useLoading from './useLoading';
import useUserList from './useUserList';

const useUserApi = () => {
  const { setIsLoading } = useLoading();
  const { setUserList } = useUserList();
  const authInstance = createAxiosTokenInstance();
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
  return { fetchUserAll };
};

export default useUserApi;
