import { AxiosResponse } from 'axios';
import { toast } from 'react-hot-toast';
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
      setIsLoading(false);
      setUserInfo(result.data);
    } catch {
      toast.error('取得失敗');
      setIsLoading(false);
    }
  };

  const fetchUserAll = async () => {
    try {
      setIsLoading(true);
      const result: AxiosResponse = await authInstance.get('/user');
      setUserList(result.data.users);
      setIsLoading(false);
    } catch (error) {
      toast.error('取得失敗');
      setIsLoading(false);
    }
  };

  const createUser = async (newUser: createUserType) => {
    try {
      setIsLoading(true);
      await authInstance.post('/user/create/', newUser);
      fetchUserAll();
      setIsLoading(false);
    } catch {
      toast.error('作成失敗');
      setIsLoading(false);
    }
  };

  return { fetchUserInfo, fetchUserAll, createUser };
};

export default useUserApi;
