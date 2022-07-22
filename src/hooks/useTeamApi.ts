import { toast } from 'react-hot-toast';
import { AxiosResponse } from 'axios';
import { createAxiosTokenInstance } from '../lib/axiosInstance';
import { teamType } from '../types/teamsType';
import useTeamListState from './useTeamListState';
import useLoading from './useLoading';

const useTeamApi = () => {
  const authInstance = createAxiosTokenInstance();
  const { setIsLoading } = useLoading();
  const { setTeamList } = useTeamListState();

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

      setTeamList(data);

      setIsLoading(false);
      // setTeamListRaw(data);
    } catch (error) {
      toast.error('取得失敗');
    }
  };

  const createTeam = async (name: string, description: string) => {
    const newTeamParams = {
      name,
      description,
    };
    try {
      setIsLoading(true);
      await authInstance.post('/team/create/', newTeamParams);
      fetchAllTeam();
      // setTimeout(fetchAllTeam, 100);

      setIsLoading(false);
    } catch (error) {
      toast.error('作成失敗');
    }
  };

  return { fetchAllTeam, createTeam };
};

export default useTeamApi;
