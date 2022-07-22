import { useRecoilState } from 'recoil';
import { teamListState } from '../stores/teamListState';

const useTeamListState = () => {
  const [teamList, setTeamList] = useRecoilState(teamListState);
  return { teamList, setTeamList };
};

export default useTeamListState;
