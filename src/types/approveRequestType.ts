export type approveRequestType = {
  id: number;
  applicant: string;
  applicantId: number;
  authorizer?: string;
  authorizerId: number;
  title: string;
  description: string;
  point: number;
  status: boolean;
  date: string;
};
