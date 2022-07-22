import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { AxiosResponse } from 'axios';
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
      login(result.data.id, email, password);
    } catch (error) {
      // 後でAPIからのレスポンスを表示する
      toast.error('作成失敗');
    }
  };

  const fetchScore = async () => {
    try {
      const result: AxiosResponse = await authInstance.get('/account/score');
      const newScore: scoreType = {
        user_score: result.data.user_score,
        team_score: result.data.team_score,
        account_score: result.data.account_score,
      };

      setScore(newScore);
    } catch (error) {
      toast.error('取得失敗');
    }
  };
  return { registerAccount, fetchScore, score };
};

export default useAccountApi;
