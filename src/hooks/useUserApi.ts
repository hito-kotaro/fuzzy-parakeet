import React from 'react';
import { AxiosResponse } from 'axios';
import { createAxiosTokenInstance } from '../lib/axiosInstance';
import useLoading from './useLoading';

const useUserApi = () => {
  const { setIsLoading } = useLoading();
  const authInstance = createAxiosTokenInstance();
  const fetchUserAll = async () => {
    try {
      setIsLoading(true);
      const result: AxiosResponse = await authInstance.get('/user');
      console.log(result);
      setIsLoading(false);
    } catch (error) {
      alert('取得失敗');
      setIsLoading(false);
    }
  };
  return { fetchUserAll };
};

export default useUserApi;
