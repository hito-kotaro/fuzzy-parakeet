export type penaltyType = {
  id: number;
  title: string;
  owner: string;
  ownerId: number;
  description: string;
  penalty: number;
};

export type applyPenaltyType = {
  team_id: number;
  penaltyId: number;
  description: string;
  created_at: string;
  updated_at: string;
};

export type createPenaltyType = {
  title: string;
  description: string;
  penalty: number;
};
