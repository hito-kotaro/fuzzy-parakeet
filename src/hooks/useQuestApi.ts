import { AxiosResponse } from 'axios';
import React from 'react';
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
      console.log(result.data.quests);
      setQuestList(result.data.quests);
      setIsLoading(false);
    } catch {
      alert('取得失敗');
      setIsLoading(false);
    }
  };

  const createQuest = async (newQuest: createQuestType) => {
    try {
      setIsLoading(true);
      const result: AxiosResponse = await authInstance.post('/quest/create', newQuest);
      console.log(result.data);
      fetchQuestAll();
      setIsLoading(false);
    } catch {
      alert('取得失敗');
      setIsLoading(false);
    }
  };
  return { fetchQuestAll, createQuest };
};

export default useQuestApi;
