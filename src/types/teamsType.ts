export type teamType = {
  id: number;
  name: string;
  description: string;
  created_at: string;
  updated_at: string;
};

export type createTeamType = Omit<teamType, 'id'>;
