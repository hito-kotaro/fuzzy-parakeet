import { teamType } from '../types/teamsType';

export const teamsData: teamType[] = [
  {
    id: 1,
    name: 'チーム1',
    teamTotalPoint: 100,
    teamPenalty: 20,
    description: 'チーム1です',
    created_at: '2022/1/1',
    updated_at: '2022/2/1',
  },
  {
    id: 2,
    name: 'チーム2',
    teamTotalPoint: 20,
    teamPenalty: 4,
    description: 'チーム2です',
    created_at: '2022/1/1',
    updated_at: '',
  },
  {
    id: 3,
    name: 'チーム3',
    teamTotalPoint: 10,
    teamPenalty: 100,
    description: 'チーム3です',
    created_at: '2022/1/1',
    updated_at: '',
  },
];
