import { approveRequestType } from '../types/approveRequestType';
import { teamType } from '../types/teamsType';

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
