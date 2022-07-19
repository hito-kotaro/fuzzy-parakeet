import { approveRequestType } from '../types/approveRequestType';
import { penaltyType } from '../types/PenaltyType';
import { teamType } from '../types/teamsType';
import { userType } from '../types/usersType';

export const defaultPenalty: penaltyType = {
  id: 0,
  title: '',
  owner: '',
  ownerId: 0,
  description: '',
  penalty: 0,
};
export const defaultUser: userType = {
  id: 0,
  name: '',
  role_id: 0,
  roleName: '',
  team_id: 0,
  teamName: '',
  description: '',
  point: 0,
  penalty: 0,
  created_at: '',
  updated_at: '',
};
export const defaultTeam: teamType = {
  id: 0,
  name: 'けつばん',
  point: 0,
  penalty: 0,
  description: 'みたね？',
  created_at: 'あした',
  updated_at: 'きのう',
};

export const defaultAR: approveRequestType = {
  id: 0,
  applicant: '',
  applicant_id: 0,
  authorizerId: 0,
  title: '',
  description: '',
  reward: 0,
  quest_title: '',
  quest_owner: '',
  quest_created_at: '',
  quest_description: '',
  status: '',
  authorizer: '',
  created_at: '',
  updated_at: '',
};
