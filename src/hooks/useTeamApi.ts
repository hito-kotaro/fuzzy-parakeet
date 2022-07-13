import React, { useState } from 'react';
import { Axios, AxiosResponse } from 'axios';
import { createAxiosTokenInstance } from '../lib/axiosInstance';
import { teamType } from '../types/teamsType';

const useTeamApi = () => {
  const authInstance = createAxiosTokenInstance();
  const [teamListRaw, setTeamListRaw] = useState<teamType[]>([]);

  const createTeam = async (name: string, description: string) => {
    const newTeamParams = {
      name,
      description,
    };
    try {
      const result: AxiosResponse = await authInstance.post(
        '/team/create/',
        newTeamParams,
      );
      console.log(result.data);
    } catch (error) {
      alert('作成失敗');
    }
  };

  const fetchAllTeam = async () => {
    try {
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
      setTeamListRaw(data);
    } catch (error) {
      alert('取得失敗');
    }
  };

  const fetchTeamById = async (id: number) => {
    try {
      const result: AxiosResponse = await authInstance.get(`/team/${id}`);
      console.log(result.data);
      return result.data;
    } catch (error) {
      alert('取得失敗');
    }
    return 0;
  };

  return { fetchAllTeam, fetchTeamById, createTeam, teamListRaw };
};

export default useTeamApi;
