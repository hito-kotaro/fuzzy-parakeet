import { ReactElement } from 'react';

export type primaryListItem = {
  id: number;
  iconName: string;
  topText: string;
  bottomText: string | ReactElement;
  righetUpText: string;
  rightBottomText: string | number | ReactElement;
};
