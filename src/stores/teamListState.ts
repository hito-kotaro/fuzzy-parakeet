import { atom } from 'recoil';
import { teamType } from '../types/teamsType';

export const teamListState = atom<teamType[]>({
  key: 'TEAM_LIST',
  default: [],
});
