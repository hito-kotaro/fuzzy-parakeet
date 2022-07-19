import { AxiosResponse } from 'axios';
import React from 'react';
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
      const result: AxiosResponse = await authInstance.post('/penalty/issue', issueInfo);
      console.log(result);
      setIsLoading(false);
    } catch {
      alert('発行失敗');
      setIsLoading(false);
    }
  };
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
      fetchPenaltyList();
      setIsLoading(false);
    } catch {
      alert('作成失敗');
      setIsLoading(false);
    }
  };
  return { fetchPenaltyList, createPenalty, issuePenalty };
};

export default usePenaltyApi;
