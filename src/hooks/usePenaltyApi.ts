import { AxiosResponse } from 'axios';
import React from 'react';
import { createAxiosTokenInstance } from '../lib/axiosInstance';
import { createPenaltyType } from '../types/PenaltyType';
import useLoading from './useLoading';
import usePenaltyList from './usePenaltyList';

const usePenaltyApi = () => {
  const { setIsLoading } = useLoading();
  const { setPenaltyList } = usePenaltyList();
  const authInstance = createAxiosTokenInstance();

  const fetchPenaltyList = async () => {
    try {
      setIsLoading(true);
      const result: AxiosResponse = await authInstance.get('/penalty');
      setIsLoading(false);
      console.log(result.data.penalties);
      setPenaltyList(result.data.penalties);
    } catch {
      alert('作成失敗');
      setIsLoading(false);
    }
  };

  const createPenalty = async (newPenalty: createPenaltyType) => {
    try {
      setIsLoading(true);
      const result: AxiosResponse = await authInstance.post(
        '/penalty/create',
        newPenalty,
      );
      setIsLoading(false);
    } catch {
      alert('作成失敗');
      setIsLoading(false);
    }
  };
  return { fetchPenaltyList, createPenalty };
};

export default usePenaltyApi;
