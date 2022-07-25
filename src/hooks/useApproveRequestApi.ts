import { toast } from 'react-hot-toast';
import { AxiosResponse } from 'axios';
import { createAxiosTokenInstance } from '../lib/axiosInstance';
import {
  createApproveRequests,
  updateApproveRequests,
} from '../types/approveRequestType';
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
      setARList(result.data.approve_requests);
      setIsLoading(false);
    } catch {
      toast.error('取得失敗');
      setIsLoading(false);
    }
  };

  const createReport = async (newReport: createApproveRequests) => {
    try {
      setIsLoading(true);
      await authInstance.post('/approve/create', newReport);

      setIsLoading(false);
    } catch {
      toast.error('作成失敗');
      setIsLoading(false);
    }
  };

  const updateApproveStatus = async (updateRequest: updateApproveRequests) => {
    try {
      setIsLoading(true);
      await authInstance.put('/approve/update', updateRequest);
      fetchApproveRequest();
      setIsLoading(false);
    } catch {
      toast.error('更新失敗');
      setIsLoading(false);
    }
  };
  return { createReport, fetchApproveRequest, updateApproveStatus };
};

export default useApproveRequestApi;
