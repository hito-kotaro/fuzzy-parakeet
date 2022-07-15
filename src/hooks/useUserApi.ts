import React from 'react';
import { AxiosResponse } from 'axios';
import { createAxiosTokenInstance } from '../lib/axiosInstance';
import useLoading from './useLoading';
import useUserList from './useUserList';
import { createUserType } from '../types/usersType';

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

  return { fetchUserAll, createUser };
};

export default useUserApi;
