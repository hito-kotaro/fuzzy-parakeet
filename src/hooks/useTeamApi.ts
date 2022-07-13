import React from 'react';
import { AxiosResponse } from 'axios';
import { createAxiosTokenInstance } from '../lib/axiosInstance';

const useTeamApi = () => {
  const authInstance = createAxiosTokenInstance();
  const createTeam = async (name: string, description: string) => {
    const newTeamParams = {
      name,
      description,
    };
    try {
      const result: AxiosResponse = await authInstance.post(
        '/team/create',
        newTeamParams,
      );
      console.log(result.data);
    } catch (error) {
      alert('作成失敗');
    }
  };

  return {};
};

export default useTeamApi;
