import { ReactElement } from 'react';

export type primaryListItem = {
  iconName: string;
  topText: string;
  bottomText: string | ReactElement;
  righetUpText: string;
  rightBottomText: string | number | ReactElement;
};
