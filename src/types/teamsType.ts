export type teamType = {
  id: number;
  name: string;
  point: number;
  penalty: number;
  description: string;
  created_at: string;
  updated_at: string;
};

export type createTeamType = Omit<teamType, 'id'>;
