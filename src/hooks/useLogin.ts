import { AxiosResponse } from 'axios';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { axiosInstance } from '../lib/axiosInstance';
import useLoading from './useLoading';

const useLogin = () => {
  const navigate = useNavigate();
  const { setIsLoading } = useLoading();
  const login = async (account: number, email: string, password: string) => {
    const authParams = {
      account_id: account,
      email,
      password,
    };

    try {
      setIsLoading(true);
      const result: AxiosResponse = await axiosInstance.post('/auth/', authParams);
      localStorage.setItem('token', result.data.access_token);
      localStorage.setItem('id', result.data.user_id);
      toast.success('Welcome');
      setIsLoading(false);
      navigate('/home');
    } catch (error) {
      toast.error('ログイン失敗');
      setIsLoading(false);
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('id');
    navigate('/');
  };
  return { login, logout };
};

export default useLogin;
