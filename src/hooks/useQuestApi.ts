import { toast } from 'react-hot-toast';
import { AxiosResponse } from 'axios';
import { createAxiosTokenInstance } from '../lib/axiosInstance';
import { createQuestType } from '../types/Quest/QuestType';
import useLoading from './useLoading';
import useQuestList from './useQuestList';

const useQuestApi = () => {
  const { setQuestList } = useQuestList();
  const { setIsLoading } = useLoading();
  const authInstance = createAxiosTokenInstance();

  const fetchQuestAll = async () => {
    try {
      setIsLoading(true);
      const result: AxiosResponse = await authInstance.get('/quest');

      setQuestList(result.data.quests);
      setIsLoading(false);
    } catch {
      toast.error('取得失敗');
      setIsLoading(false);
    }
  };

  const createQuest = async (newQuest: createQuestType) => {
    try {
      setIsLoading(true);
      await authInstance.post('/quest/create', newQuest);

      fetchQuestAll();
      setIsLoading(false);
    } catch {
      toast.error('取得失敗');
      setIsLoading(false);
    }
  };
  return { fetchQuestAll, createQuest };
};

export default useQuestApi;
