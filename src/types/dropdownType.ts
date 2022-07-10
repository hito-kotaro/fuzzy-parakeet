import { ReactElement } from 'react';

export type dropDownItem = {
  icon: ReactElement;
  onClick: () => void;
  text: string;
  divider: boolean;
};
