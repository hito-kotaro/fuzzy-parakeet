export type approveRequestType = {
  id: number;
  applicant: string;
  applicantId: number;
  authorizer?: string;
  authorizerId: number;
  title: string;
  questTitle: string;
  questOwner: string;
  questDescription: string;
  description: string;
  point: number;
  approve: boolean;
  open: boolean;
  closeCode?: number;
  date: string;
};
