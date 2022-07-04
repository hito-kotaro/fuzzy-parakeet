export type questType = {
  id: number;
  owner: string;
  title: string;
  description: string;
  date: string;
  point: number;
  status: boolean;
};

export type createQuestType = Omit<questType, 'id'>;
