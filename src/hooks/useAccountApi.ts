import React, { useState } from 'react';
import { AxiosInstance, AxiosResponse } from 'axios';
import { useNavigate } from 'react-router-dom';
import useLogin from './useLogin';
import { axiosInstance, createAxiosTokenInstance } from '../lib/axiosInstance';
import type { scoreType } from '../types/scoreType';

const useAccountApi = () => {
  const { login } = useLogin();
  const [score, setScore] = useState<scoreType>({
    user_score: 0,
    team_score: 0,
    account_score: 0,
  });
  const authInstance = createAxiosTokenInstance();

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

  const fetchScore = async () => {
    try {
      const result: AxiosResponse = await authInstance.get('/account/score');
      console.log(result.data);
      const newScore: scoreType = {
        user_score: result.data.user_score,
        team_score: result.data.team_score,
        account_score: result.data.account_score,
      };

      setScore(newScore);
    } catch (error) {
      alert('取得失敗');
    }
  };
  return { registerAccount, fetchScore, score };
};

export default useAccountApi;
