import { approveRequestType } from '../types/approveRequestType';
import { teamType } from '../types/teamsType';
import { userType } from '../types/usersType';

export const defaultUser: userType = {
  id: 0,
  name: '',
  roleId: 0,
  roleName: '',
  teamId: 0,
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
  description: 'みたな？',
  created_at: 'あした',
  updated_at: 'きのう',
};

export const defaultAR: approveRequestType = {
  id: 0,
  applicant: '',
  applicantId: 0,
  authorizerId: 0,
  title: '',
  description: '',
  point: 0,
  questTitle: '',
  questOwner: '',
  questCreated_at: '',
  questDescription: '',
  status: '',
  authorizer: '',
  created_at: '',
  updated_at: '',
};
