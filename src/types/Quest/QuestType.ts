export type questType = {
  id: number;
  owner: string;
  title: string;
  description: string;
  date: string;
  reward: number;
  status: boolean;
};

export type createQuestType = {
  title: string;
  description: string;
  reward: number;
};
