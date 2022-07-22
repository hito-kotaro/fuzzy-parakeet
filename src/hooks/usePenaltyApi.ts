import { toast } from 'react-hot-toast';
import { AxiosResponse } from 'axios';
import { createAxiosTokenInstance } from '../lib/axiosInstance';
import { createPenaltyType, issuePenaltyType } from '../types/PenaltyType';
import useLoading from './useLoading';
import usePenaltyList from './usePenaltyList';

const usePenaltyApi = () => {
  const { setIsLoading } = useLoading();
  const { setPenaltyList } = usePenaltyList();
  const authInstance = createAxiosTokenInstance();

  const issuePenalty = async (issueInfo: issuePenaltyType) => {
    try {
      setIsLoading(true);
      await authInstance.post('/penalty/issue', issueInfo);
      setIsLoading(false);
    } catch {
      toast.error('取得失敗');
      setIsLoading(false);
    }
  };
  const fetchPenaltyList = async () => {
    try {
      setIsLoading(true);
      const result: AxiosResponse = await authInstance.get('/penalty');
      setIsLoading(false);

      setPenaltyList(result.data.penalties);
    } catch {
      toast.error('作成失敗');
      setIsLoading(false);
    }
  };

  const createPenalty = async (newPenalty: createPenaltyType) => {
    try {
      setIsLoading(true);
      await authInstance.post('/penalty/create', newPenalty);
      fetchPenaltyList();
      setIsLoading(false);
    } catch {
      toast.error('作成失敗');
      setIsLoading(false);
    }
  };
  return { fetchPenaltyList, createPenalty, issuePenalty };
};

export default usePenaltyApi;
