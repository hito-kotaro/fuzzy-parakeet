import { AxiosResponse } from 'axios';
import React from 'react';
import { axiosInstance, createAxiosTokenInstance } from '../lib/axiosInstance';
import { createApproveRequests } from '../types/approveRequestType';
import useApproveRequestList from './useApproveRequestList';
import useLoading from './useLoading';

const useApproveRequestApi = () => {
  const authInstance = createAxiosTokenInstance();
  const { setIsLoading } = useLoading();
  const { setARList } = useApproveRequestList();

  const fetchApproveRequest = async () => {
    try {
      setIsLoading(true);
      const result: AxiosResponse = await authInstance.get('/approve');
      console.log(result.data.approve_requests);
      setARList(result.data.approve_requests);
      setIsLoading(false);
    } catch {
      alert('取得失敗');
      setIsLoading(false);
    }
  };

  const createReport = async (newReport: createApproveRequests) => {
    try {
      setIsLoading(true);
      const result: AxiosResponse = await authInstance.post('/approve/create', newReport);
      console.log(result.data);
      setIsLoading(false);
    } catch {
      alert('作成失敗');
      setIsLoading(false);
    }
  };
  return { createReport, fetchApproveRequest };
};

export default useApproveRequestApi;
