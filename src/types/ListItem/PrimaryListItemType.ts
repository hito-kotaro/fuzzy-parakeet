import { ReactElement } from 'react';

export type primaryListItem = {
  id: number;
  name: string;
  title: string;
  description: string;
  date: string;
  badge: ReactElement;
};
