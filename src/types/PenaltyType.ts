export type penaltyType = {
  id: number;
  title: string;
  owner: string;
  ownerId: number;
  description: string;
  penalty: number;
  created_at: string;
  updated_at: string;
};

export type applyPenaltyType = {
  teamId: number;
  penaltyId: number;
  description: string;
  created_at: string;
  updated_at: string;
};
export type createPenaltyType = Omit<penaltyType, 'id'>;
