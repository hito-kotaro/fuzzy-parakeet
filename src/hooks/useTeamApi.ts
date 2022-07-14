import React, { useState } from 'react';
import { Axios, AxiosResponse } from 'axios';
import { createAxiosTokenInstance } from '../lib/axiosInstance';
import { teamType } from '../types/teamsType';
import useTeamListState from './useTeamListState';
import useLoading from './useLoading';

const useTeamApi = () => {
  const authInstance = createAxiosTokenInstance();
  const { setIsLoading } = useLoading();
  const [teamListRaw, setTeamListRaw] = useState<teamType[]>([]);
  const { teamList, setTeamList } = useTeamListState();

  const fetchAllTeam = async () => {
    try {
      setIsLoading(true);
      const result: AxiosResponse = await authInstance.get('/team/');
      const data = result.data.teams.map((t: teamType) => {
        const createdAt = t.created_at.replace(/-/g, '/').substring(0, 10);
        const updatedAt = t.updated_at.replace(/-/g, '/').substring(0, 10);
        const teamData: teamType = {
          id: t.id,
          name: t.name,
          point: t.point,
          penalty: t.penalty,
          description: t.description,
          created_at: createdAt,
          updated_at: updatedAt,
        };
        return teamData;
      });
      console.log(data);
      setTeamList(data);
      console.log(teamList);
      setIsLoading(false);
      // setTeamListRaw(data);
    } catch (error) {
      alert('取得失敗');
    }
  };

  const createTeam = async (name: string, description: string) => {
    const newTeamParams = {
      name,
      description,
    };
    try {
      setIsLoading(true);
      const result: AxiosResponse = await authInstance.post(
        '/team/create/',
        newTeamParams,
      );
      fetchAllTeam();
      // setTimeout(fetchAllTeam, 100);

      setIsLoading(false);
    } catch (error) {
      alert('作成失敗');
    }
  };
  const fetchTeamById = async (id: number) => {
    console.log(id);
  };

  return { fetchAllTeam, fetchTeamById, createTeam };
};

export default useTeamApi;
