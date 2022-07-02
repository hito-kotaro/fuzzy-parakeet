import { ReactElement } from 'react';

export type primaryListItem = {
  id: number;
  iconName: string;
  topText: string;
  bottomText: string;
  rightUpText: string;
  rightBottomText: string | number | ReactElement;
};
