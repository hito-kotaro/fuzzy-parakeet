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
};

export type createPenaltyType = {
  title: string;
  description: string;
  penalty: number;
};

export type issuePenaltyType = {
  penalty_id: number;
  team_id: number;
};
