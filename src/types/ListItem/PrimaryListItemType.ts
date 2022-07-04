import { ReactElement } from 'react';

export type primaryListItem = {
  id: number;
  name: string;
  title: string;
  description: string;
  date: string;
  badgeColor: 'red' | 'green' | 'gray' | 'yellow' | 'blue' | 'indigo' | 'purple' | 'pink';
  badgeText: string;
};
