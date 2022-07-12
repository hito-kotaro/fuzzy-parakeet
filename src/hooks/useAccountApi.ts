import React from 'react';
import { AxiosInstance, AxiosResponse } from 'axios';
import { useNavigate } from 'react-router-dom';
import useLogin from './useLogin';
import { axiosInstance } from '../lib/axiosInstance';

const useAccountApi = () => {
  const { login } = useLogin();

  const registerAccount = async (email: string, password: string) => {
    const accountParams = {
      email,
      password,
    };
    try {
      const result: AxiosResponse = await axiosInstance.post(
        '/account/create',
        accountParams,
      );
      console.log(result.data);
      login(result.data.id, email, password);
    } catch (error) {
      alert('作成失敗');
    }
  };

  return { registerAccount };
};

export default useAccountApi;
