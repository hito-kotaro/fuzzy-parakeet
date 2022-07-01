import { ReactElement } from 'react';

export type DropDownItem = {
  icon: ReactElement;
  onClick: () => void;
  text: string;
  divider: boolean;
};
