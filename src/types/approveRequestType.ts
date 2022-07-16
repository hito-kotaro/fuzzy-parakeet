export type approveRequestType = {
  id: number;
  applicant: string;
  applicant_id: number;
  title: string;
  quest_title: string;
  quest_owner: string;
  quest_created_at: string;
  quest_description: string;
  description: string;
  reward: number;
  status: string;
  created_at: string;
  updated_at: string;
  authorizer?: string;
  authorizerId?: number;
};

export type createApproveRequests = {
  title: string;
  description: string;
  quest_id: number;
};
